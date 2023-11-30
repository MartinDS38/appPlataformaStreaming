import React from 'react';
import { View } from 'react-native';
import { Video, ResizeMode } from 'expo-av';

import styles from './styles';

const VideoComponent = () => {
  return (
    <View style={styles.containerVideo}>
      <Video
        source={{ uri: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4' }}  // Reemplaza 'URL_DEL_VIDEO' con la URL de tu video
        style={styles.video}
        shouldPlay={false}
        useNativeControls
        resizeMode={ResizeMode.CONTAIN}
      />
    </View>
  );
};

export default VideoComponent;