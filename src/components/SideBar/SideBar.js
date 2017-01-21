import React, { Component, PropTypes } from 'react';
import { ScrollView, TouchableNativeFeedback, Text, Image, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import MenuItem from '../MenuItem';
import theme from '../../themes/base-theme';

const user = {
  name: 'Priyanshu Jindal',
  email: 'priyanshujindal1995@gmail.com',
  uri: 'https://lh3.googleusercontent.com/AQReAe_Kc0b7vEpY68NmyinordjwmTI9YAstfxNA8uZUlmyv7q8N1wVsgBUxq697e10dHg=s630',
  avatar: 'https://avatars2.githubusercontent.com/u/10034872?v=3&s=460',
};

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
    paddingLeft: 16,
    paddingTop: 46,
    flex: 1,
  },
  avatar: {
    width: 62,
    height: 62,
    borderRadius: 50,
  },
  profileInfo: {
  },
  name: {
    opacity: 1,
    color: theme.primaryWhiteText,
    fontWeight: '500',
  },
  email: {
    opacity: 1,
    color: theme.secondaryWhiteText,
  },
  profileInfoContainer: {
    justifyContent: 'space-between',
    paddingRight: 16,
    flexDirection: 'row',
    marginTop: 8,
  },
  downArrowContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 36,
    height: 36,
  },
  downArrow: {
    opacity: 1,
    fontSize: 24,
    color: theme.whiteText,
  },
  fixedView: {
    elevation: 8,
    backgroundColor: theme.whiteText,
  },
};

class SideBar extends Component {
  static propTypes = {
    user: PropTypes.shape({
      name: PropTypes.string,
    }).isRequired,
  }

  state = {
    imageHeight: 180,
    downArrow: true,
  }

  onScrollViewLayout = (event) => {
    const { width } = event.nativeEvent.layout;
    const imageHeight = (width * 9) / 16;
    this.setState({
      imageHeight,
    });
  }

  toggleDownArrow = () => {
    this.setState(prevState => ({
      ...prevState,
      downArrow: !prevState.downArrow,
    }));
  }

  render() {
    return (
      <View onLayout={this.onScrollViewLayout} style={styles.container}>
        <ScrollView>
          <Image
            source={{ uri: user.uri }}
            style={[styles.image, { height: this.state.imageHeight }]}
          >
            <View style={styles.imageOverlay}>
              <Image
                style={styles.avatar}
                source={{ uri: user.avatar }}
              />
              <View style={styles.profileInfoContainer}>
                <View style={styles.profileInfo}>
                  <Text style={styles.name}>{user.name}</Text>
                  <Text style={styles.email}>{user.email}</Text>
                </View>
                <TouchableNativeFeedback onPress={this.toggleDownArrow}>
                  <View style={styles.downArrowContainer}>
                    <Icon
                      style={styles.downArrow}
                      name={this.state.downArrow ? 'arrow-drop-down' : 'arrow-drop-up'}
                    />
                  </View>
                </TouchableNativeFeedback>
              </View>
            </View>
          </Image>
          <MenuItem item={{ name: 'Inbox', icon: 'inbox' }} />
          <MenuItem item={{ name: 'Snoozed', icon: 'access-time' }} />
          <MenuItem item={{ name: 'Done', icon: 'check' }} />
          <MenuItem item={{ name: 'Drafts', icon: 'drafts' }} />
          <MenuItem item={{ name: 'sent', icon: 'send' }} />
          <MenuItem item={{ name: 'Reminders', icon: 'touch-app' }} />
          <MenuItem item={{ name: 'Trash', icon: 'delete' }} />
          <MenuItem item={{ name: 'Saved', icon: 'bookmark' }} />
          <MenuItem item={{ name: 'Create New', icon: 'add' }} />
        </ScrollView>
        <View style={styles.fixedView}>
          <MenuItem item={{ name: 'Settings', icon: 'settings' }} />
          <MenuItem item={{ name: 'Help and Feedback', icon: 'help' }} />
        </View>
      </View>
    );
  }
}

export default SideBar;
