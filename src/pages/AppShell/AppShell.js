/* @flow */
import React from 'react';
import { View } from 'react-native';
import { ToolbarAndroid } from 'react-native-vector-icons/MaterialIcons';

import StatusBar from '../../components/StatusBar';
import theme from '../../themes/base-theme';

const styles = {
  toolbar: {
    height: 56,
    backgroundColor: theme.toolbarDefaultBg,
    elevation: 4,
  },
};

const AppShell = () => (
  <View>
    <StatusBar />
    <ToolbarAndroid
      title="Home"
      titleColor={theme.whiteText}
      navIconName="menu"
      style={styles.toolbar}
    />
  </View>
);

export default AppShell;
