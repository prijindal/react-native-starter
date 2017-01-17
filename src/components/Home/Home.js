import React, { Component, PropTypes } from 'react';
import { Text } from 'react-native';

import Layout from '../Layout';
import Loading from '../Loading';
import theme from '../../themes/base-theme';

const styles = {
  text: {
    color: theme.primaryDarkText,
  },
};

class Home extends Component {
  static propTypes = {
    navigator: PropTypes.shape().isRequired,
  }

  state = {
    loading: true,
    list: [],
  }

  componentDidMount() {
    setTimeout(
      () =>
        this.setState({
          loading: false,
          list: [1, 2, 3],
        }),
      3000,
    );
  }

  render() {
    const { loading, list } = this.state;
    return (
      <Layout
        title="Home"
        navigator={this.props.navigator}
      >
        {loading ?
          <Loading /> :
          list.map(item =>
            <Text
              style={styles.text}
              key={item}
            >{item}</Text>,
        )}
      </Layout>
    );
  }
}

export default Home;
