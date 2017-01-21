import React, { Component, PropTypes } from 'react';
import { ScrollView, TouchableNativeFeedback, Text, Image, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import MenuItem from '../MenuItem';
import List from '../List';
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
    paddingTop: 46,
    flex: 1,
  },
  avatar: {
    marginLeft: 16,
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
    paddingLeft: 16,
    paddingRight: 16,
    flexDirection: 'row',
    paddingTop: 8,
    paddingBottom: 8,
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
              <TouchableNativeFeedback onPress={this.toggleDownArrow}>
                <View style={styles.profileInfoContainer}>
                  <View style={styles.profileInfo}>
                    <Text style={styles.name}>{user.name}</Text>
                    <Text style={styles.email}>{user.email}</Text>
                  </View>
                  <View style={styles.downArrowContainer}>
                    <Icon
                      style={styles.downArrow}
                      name={this.state.downArrow ? 'arrow-drop-down' : 'arrow-drop-up'}
                    />
                  </View>
                </View>
              </TouchableNativeFeedback>
            </View>
          </Image>
          {this.state.downArrow ?
            <View>
              <List>
                <MenuItem
                  item={{ name: 'Inbox', icon: 'inbox' }}
                  iconColor={theme.primary500}
                  textColor={theme.primary500}
                />
                <MenuItem
                  item={{ name: 'Snoozed', icon: 'access-time' }}
                  iconColor={theme.accent700}
                />
                <MenuItem
                  item={{ name: 'Done', icon: 'check' }}
                  iconColor={theme.accent700}
                />
              </List>
              <List>
                <MenuItem item={{ name: 'Drafts', icon: 'drafts' }} />
                <MenuItem item={{ name: 'sent', icon: 'send' }} />
                <MenuItem item={{ name: 'Reminders', icon: 'touch-app' }} />
                <MenuItem item={{ name: 'Trash', icon: 'delete' }} />
                <MenuItem item={{ name: 'Spam', icon: 'error' }} />
              </List>
              <List>
                <MenuItem item={{ name: 'Saved', icon: 'bookmark' }} />
              </List>
              <List>
                <MenuItem item={{ name: 'Create New', icon: 'add' }} />
              </List>
            </View> :
            <List noBorder>
              <MenuItem item={{ name: 'Add Account', icon: 'add' }} />
              <MenuItem item={{ name: 'Manage Account', icon: 'settings' }} />
            </List>
          }
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
