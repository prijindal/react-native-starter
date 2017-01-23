import React, { Component, PropTypes } from 'react';
import { View, Text } from 'react-native';

import Layout from '../../components/Layout';
import StatusBar from '../../components/StatusBar';

class Settings extends Component {
  static propTypes = {
    navigator: PropTypes.shape({}).isRequired,
  }

  render() {
    return (
      <View>
        <StatusBar />
        <Layout
          enableBackButton
          navIconName="close"
          title="Settings"
          navigator={this.props.navigator}
        >
          <View>
            <Text>Settings</Text>
          </View>
        </Layout>
      </View>
    );
  }
}

export default Settings;
