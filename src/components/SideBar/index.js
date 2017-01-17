import React, { Component } from 'react';
import { ScrollView, Text, Image, View } from 'react-native';

import theme from '../../themes/base-theme';

const styles = {
  container: {
    backgroundColor: theme.whiteText,
    flex: 1,
  },
  image: {
    height: 180,
    flex: 1,
    width: undefined,
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  imageOverlay: {
    backgroundColor: 'hsla(0, 0%, 0%, 0.5)',
    height: 180,
    flex: 1,
    justifyContent: 'center',
  },
};

class SideBar extends Component {
  state = {
    uri: 'https://lh3.googleusercontent.com/AQReAe_Kc0b7vEpY68NmyinordjwmTI9YAstfxNA8uZUlmyv7q8N1wVsgBUxq697e10dHg=s630',
    imageHeight: 180,
  }

  onScrollViewLayout = (event) => {
    const { width } = event.nativeEvent.layout;
    const imageHeight = (width * 9) / 16;
    this.setState({
      imageHeight,
    });
  }

  render() {
    return (
      <ScrollView onLayout={this.onScrollViewLayout} style={styles.container}>
        <Image
          source={{ uri: this.state.uri }}
          style={[styles.image, { height: this.state.imageHeight }]}
        >
          <View style={styles.imageOverlay}>
            <Text style={{opacity: 1, color: '#000'}}>Priyanshu</Text>
          </View>
        </Image>
        <Text>
          SideBar
        </Text>
      </ScrollView>
    );
  }
}

export default SideBar;
