import React from 'react';
import { View, StatusBar } from 'react-native';
import theme from '../../themes/base-theme';

const styles = {
  statusbar: {
    height: 24,
    backgroundColor: theme.statusBarColor,
  },
};

const StatusBarView = () => (
  <View>
    <StatusBar
      animated
      translucent
      backgroundColor={theme.transparent}
    />
    <View style={styles.statusbar} />
  </View>
);

export default StatusBarView;
