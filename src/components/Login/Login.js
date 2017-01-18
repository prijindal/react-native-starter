import React, { Component, PropTypes } from 'react';
import { View, TextInput } from 'react-native';
import TextInputLayout from 'react-native-text-input-layout';

import Layout from '../Layout';
import Button from '../Button';
import theme from '../../themes/base-theme';

const styles = {
  container: {
    marginHorizontal: 8,
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  textInputContainer: {
    marginTop: 8,
  },
  textInput: {
    fontSize: 18,
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
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
          <TextInputLayout style={styles.textInputContainer}>
            <TextInput
              autoCapitalize="words"
              style={styles.textInput}
              placeholder="Name"
              onChangeText={name => this.setState({ name })}
            />
          </TextInputLayout>
          <View style={styles.buttonContainer}>
            <Button
              textColor={theme.whiteText}
              disabled={this.state.name === ''}
              backgroundColor={this.state.name ? theme.primary500 : theme.primary100}
              onPress={this.signIn}
            >
              SIGN IN
            </Button>
          </View>
        </View>
      </Layout>
    );
  }
}

export default Login;
