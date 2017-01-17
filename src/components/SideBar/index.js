import React, { Component } from 'react';
import { View, Text } from 'react-native';

import theme from '../../themes/base-theme';

const styles = {
  container: {
    backgroundColor: theme.primary100,
    flex: 1,
  },
};

class SideBar extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>
          SideBar
        </Text>
      </View>
    );
  }
}

export default SideBar;
