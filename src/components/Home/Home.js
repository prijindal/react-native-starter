import React, { Component, PropTypes } from 'react';
import { Text } from 'react-native';
import Layout from '../Layout';

class Home extends Component {
  static propTypes = {
    navigator: PropTypes.shape().isRequired,
  }

  render() {
    return (
      <Layout navigator={this.props.navigator}>
        <Text>Home</Text>
      </Layout>
    );
  }
}

export default Home;
