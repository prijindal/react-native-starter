import React from 'react';
import { ActivityIndicator } from 'react-native';

const styles = {
  indicator: {
    marginTop: 10,
  },
};

const Loading = () => (
  <ActivityIndicator
    animating
    size="large"
    style={styles.indicator}
  />
);

export default Loading;
