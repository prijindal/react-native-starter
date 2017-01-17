import React, { Component } from 'react';
import { View, Text } from 'react-native';

const styles = {
  container: {
    backgroundColor: '#ff0',
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
