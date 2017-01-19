import React, { Component, PropTypes } from 'react';
import { View, TextInput, Keyboard } from 'react-native';
import TextInputLayout from 'react-native-text-input-layout';
import { NavigationStyles } from '@exponent/ex-navigation';

import Router from '../Router';

import Layout from '../../components/Layout';
import Button from '../../components/Button';
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
      immediatelyResetStack: PropTypes.func,
    }).isRequired,
    setUser: PropTypes.func.isRequired,
    user: PropTypes.shape({
      name: PropTypes.string,
    }).isRequired,
  }

  static route = {
    styles: {
      ...NavigationStyles.FloatVertical,
    },
  };

  state = {
    name: this.props.user.name,
  }

  componentDidMount() {
    this.nameInput.focus();
  }

  signIn = () => {
    this.props.navigator.immediatelyResetStack([Router.getRoute('home')], 0);
    this.props.setUser(this.state.name);
    Keyboard.dismiss();
  }

  render() {
    return (
      <Layout
        enableBackButton
        onIconClicked={Keyboard.dismiss}
        title="Login"
        navigator={this.props.navigator}
      >
        <View style={styles.container}>
          <TextInputLayout style={styles.textInputContainer}>
            <TextInput
              ref={(c) => { this.nameInput = c; }}
              autoCapitalize="words"
              style={styles.textInput}
              placeholder="Name"
              defaultValue={this.state.name}
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
