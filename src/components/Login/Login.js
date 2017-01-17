import React, { Component, PropTypes } from 'react';
import { View, Button } from 'react-native';

import Layout from '../Layout';
// import Loading from '../Loading';
// import theme from '../../themes/base-theme';

const styles = {
  container: {
    flexDirection: 'row',
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  button: {
    marginTop: 8,
    marginHorizontal: 8,
    flex: 1,
    height: 48,
  },
};

class Login extends Component {
  static propTypes = {
    navigator: PropTypes.shape({
      push: PropTypes.func,
    }).isRequired,
    setUser: PropTypes.func.isRequired,
  }

  state = {
    name: '',
  }

  signIn = () => {
    this.props.setUser(this.state.name);
    this.props.navigator.push('home');
  }

  render() {
    return (
      <Layout
        enableBackButton
        title="Login"
        navigator={this.props.navigator}
      >
        <View style={styles.container}>
          <Button
            title="Sign In"
            style={styles.button}
            onPress={this.signIn}
          />
        </View>
      </Layout>
    );
  }
}

export default Login;
