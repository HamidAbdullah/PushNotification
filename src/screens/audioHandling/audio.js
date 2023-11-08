/* eslint-disable no-shadow */
/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useRef, useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  FlatList,
  Dimensions,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import IconIonicons from 'react-native-vector-icons/Ionicons';
import IconFeather from 'react-native-vector-icons/Feather';
import TrackPlayer, {
  Capability,
  usePlaybackState,
  useProgress,
  State,
} from 'react-native-track-player';
import {useRoute} from '@react-navigation/native';
import {Slider} from '@miblanchard/react-native-slider';
import surahsData from '../../constants/surahData';

const {width, height} = Dimensions.get('window');

const Tilawat = () => {
  const route = useRoute();
  const {index, reciters} = route.params;
  const progress = useProgress();
  const playbackState = usePlaybackState();
  const [currentTilawat, setCurrentTilawat] = useState(index);
  const playerInitialized = useRef(false);
  const ref = useRef();

  useEffect(() => {
    setTimeout(() => {
      ref.current.scrollToIndex({
        animated: true,
        index: currentTilawat,
      });
    }, 500);
  }, []);

  useEffect(() => {
    if (!playerInitialized.current) {
      setupPlayer();
      playerInitialized.current = true;
    }
  }, [currentTilawat]);
  // Helper function to format the time in seconds to the format "mm:ss"
  const formatTime = timeInSeconds => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = Math.floor(timeInSeconds % 60);
    return `${minutes < 10 ? '0' : ''}${minutes}:${
      seconds < 10 ? '0' : ''
    }${seconds}`;
  };

  const setupPlayer = async () => {
    try {
      if (!playerInitialized.current) {
        await TrackPlayer.setupPlayer();
        await TrackPlayer.updateOptions({
          capabilities: [
            Capability.Play,
            Capability.Pause,
            Capability.SkipToNext,
            Capability.SkipToPrevious,
            Capability.Stop,
          ],
          compactCapabilities: [Capability.Play, Capability.Pause],
        });
        await TrackPlayer.add(surahsData);
        playerInitialized.current = true;
      }
      await TrackPlayer.skip(currentTilawat);
      togglePlayback(playbackState);
    } catch (error) {
      console.log('setup player Error ....', error);
    }
  };

  const togglePlayback = async playbackState => {
    if (
      [
        State.Paused,
        State.Ready,
        State.Connecting,
        State.Buffering,
        State.None,
        State.Stopped,
      ].includes(playbackState)
    ) {
      await TrackPlayer.play();
    } else {
      await TrackPlayer.pause();
    }
  };

  return (
    <View style={styles.container}>
      <View>
        <FlatList
          ref={ref}
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          data={surahsData}
          getItemLayout={(data, index) => ({
            length: width,
            offset: width * index,
            index,
          })}
          initialScrollIndex={currentTilawat}
          onScroll={async e => {
            const x = e.nativeEvent.contentOffset.x / width;
            setCurrentTilawat(parseInt(x.toFixed(0), 10));
            await TrackPlayer.skip(parseInt(x.toFixed(0), 10));
            togglePlayback(playbackState);
          }}
          renderItem={({item, index}) => (
            <View style={styles.bannerView}>
              <Image source={reciters[0].image} style={styles.banner} />
              <Text style={styles.name}>{item.title}</Text>
            </View>
          )}
        />
      </View>
      <View style={styles.sliderView}>
        <Slider
          value={progress.position}
          maximumValue={progress.duration}
          minimumValue={0}
          thumbTintColor="black"
          onValueChange={async value => {
            await TrackPlayer.seekTo(value);
          }}
        />
        <View style={styles.timeDurationStyle}>
          <Text style={styles.timerStyle}>{formatTime(progress.position)}</Text>
          <Text style={styles.timerStyle}>{formatTime(progress.duration)}</Text>
        </View>
      </View>
      <View style={styles.btnArea}>
        <IconFeather name="repeat" size={20} color="#000" />

        <Icon
          name="backward"
          size={32}
          color="#000"
          onPress={async () => {
            if (currentTilawat > 0) {
              setCurrentTilawat(prev => prev - 1);
              ref.current.scrollToIndex({
                animated: true,
                index: currentTilawat - 1,
              });
              await TrackPlayer.skip(currentTilawat - 1);
              togglePlayback(playbackState);
            }
          }}
        />

        <Icon
          name={
            playbackState === State.Paused || playbackState === State.Ready
              ? 'play'
              : 'pause'
          }
          size={32}
          color="#000"
          onPress={async () => {
            togglePlayback(playbackState);
          }}
        />

        <Icon
          name="forward"
          size={32}
          color="#000"
          onPress={async () => {
            if (surahsData.length - 1 > currentTilawat) {
              setCurrentTilawat(prev => prev + 1);
              ref.current.scrollToIndex({
                animated: true,
                index: currentTilawat + 1,
              });
              await TrackPlayer.skip(currentTilawat + 1);
              togglePlayback(playbackState);
            }
          }}
        />

        <IconIonicons name="shuffle" size={30} color="#000000" />
      </View>
    </View>
  );
};

export default Tilawat;

const styles = StyleSheet.create({
  timerStyle: {
    fontWeight: '900',
    fontSize: 12,
  },
  timeDurationStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: width - 35,
    alignSelf: 'center',
  },
  container: {
    flex: 1,
  },
  bannerView: {
    width,
    height: height / 2 - 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginTop: 20,
    marginBottom: 30,
  },
  banner: {
    width: '95%',
    height: '100%',
    borderRadius: 10,
  },
  name: {
    marginTop: 10,
    fontSize: 20,
    marginLeft: 20,
    fontWeight: '700',
    color: '#000',
    alignSelf: 'center',
  },
  sliderView: {
    marginTop: 20,
    alignSelf: 'center',
    width: '90%',
  },
  btnArea: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginTop: 20,
  },
});
