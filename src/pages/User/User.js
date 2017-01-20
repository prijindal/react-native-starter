import React, { Component, PropTypes } from 'react';
import { View, Text, Image } from 'react-native';

import Layout from '../../components/Layout';

class User extends Component {
  static propTypes = {
    navigator: PropTypes.shape({}).isRequired,
    user: PropTypes.shape({
      id: PropTypes.string,
      title: PropTypes.string,
      body: PropTypes.string,
      avatar: PropTypes.string,
    }).isRequired,
  }

  render() {
    return (
      <Layout
        enableBackButton
        title="Home"
        actions={[]}
        onActionSelected={this.onActionSelected}
        navigator={this.props.navigator}
      >
        <View>
          <Text>{this.props.user.title}</Text>
        </View>
      </Layout>
    );
  }
}

export default User;
