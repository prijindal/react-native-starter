/* @flow */
import React, { Component, PropTypes } from 'react';
import { View, Text, Image } from 'react-native';

import Layout from '../../components/Layout';
import theme from '../../themes/base-theme';

class Profile extends Component {
  static propTypes = {
    navigator: PropTypes.shape({
      immediatelyResetStack: PropTypes.func,
    }).isRequired,
    user: PropTypes.shape({
      name: PropTypes.string,
    }).isRequired,
  }

  state = {
    uri: 'https://lh3.googleusercontent.com/AQReAe_Kc0b7vEpY68NmyinordjwmTI9YAstfxNA8uZUlmyv7q8N1wVsgBUxq697e10dHg=s630',
  }

  render() {
    return (
      <Image
        source={{ uri: this.state.uri }}
        style={{ height: 230 }}
      >
        <View style={{ backgroundColor: 'hsla(0, 0%, 0%, 0.5)', height: 230 }}>
          <Layout
            enableBackButton
            title="Profile"
            titleColor={theme.darkText}
            toolbarStyle={{ backgroundColor: theme.transparent }}
            navigator={this.props.navigator}
          >
            <Text>{this.props.user.name}</Text>
          </Layout>
        </View>
      </Image>
    );
  }
}

export default Profile;
