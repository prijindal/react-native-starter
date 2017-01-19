import React from 'react';
import { View } from 'react-native';
import theme from '../../themes/base-theme';

const styles = {
  statusbar: {
    height: 24,
    backgroundColor: theme.statusBarColor,
  },
};

const StatusBar = () => (
  <View>
    <View style={styles.statusbar} />
  </View>
);

export default StatusBar;
