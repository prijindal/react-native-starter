import React, { Component } from 'react';
import { ActivityIndicator } from 'react-native';

const styles = {
  indicator: {
    marginTop: 10,
  },
};

class Loading extends Component {
  render() {
    return (
      <ActivityIndicator
        animating
        size="large"
        style={styles.indicator}
      />
    );
  }
}

export default Loading;
