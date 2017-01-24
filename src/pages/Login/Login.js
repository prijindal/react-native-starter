import React, { Component, PropTypes } from 'react';
import { View, Keyboard, TextInput } from 'react-native';

import Router from '../../Router';

import Layout from '../../components/Layout';
import StatusBar from '../../components/StatusBar';
import Button from '../../components/Button';
import theme from '../../themes/base-theme';

const styles = {
  container: {
    marginHorizontal: 8,
    alignItems: 'stretch',
    justifyContent: 'center',
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
    navigation: PropTypes.shape({
      getNavigator: PropTypes.func,
    }).isRequired,
    navigator: PropTypes.shape({
      pop: PropTypes.func,
    }).isRequired,
    setUser: PropTypes.func.isRequired,
    user: PropTypes.shape({
      name: PropTypes.string,
    }).isRequired,
  }

  state = {
    name: this.props.user.name,
  }

  signIn = () => {
    this.props.navigator.pop();
    this.props.navigation.getNavigator('app').immediatelyResetStack([Router.getRoute('home')], 0);
    this.props.setUser(this.state.name);
    Keyboard.dismiss();
  }

  render() {
    return (
      <View>
        <StatusBar />
        <Layout
          enableBackButton
          navIconName="close"
          onIconClicked={Keyboard.dismiss}
          title="Login"
          navigator={this.props.navigator}
        >
          <View style={styles.container}>
            <TextInput
              ref={(c) => { this.nameInput = c; }}
              autoCapitalize="words"
              placeholder="Name"
              underlineColorAndroid={theme.primary500}
              defaultValue={this.state.name}
              onChangeText={name => this.setState({ name })}
            />
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
      </View>
    );
  }
}

export default Login;
