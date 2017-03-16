/* @flow */
import React, { Component, PropTypes } from 'react';
import { View, Keyboard, TextInput } from 'react-native';

import Layout from '../../components/Layout';
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
      navigate: PropTypes.func,
    }).isRequired,
    setUser: PropTypes.func.isRequired,
    user: PropTypes.shape({
      name: PropTypes.string,
    }).isRequired,
  }

  state = {
    name: this.props.user.name,
  }

  nameInput: any

  signIn = () => {
    this.props.navigation.navigate('home');
    this.props.setUser(this.state.name);
    Keyboard.dismiss();
  }

  render() {
    return (
      <View>
        <Layout
          enableBackButton
          navIconName="close"
          onIconClicked={Keyboard.dismiss}
          title="Login"
          navigation={this.props.navigation}
        >
          <View style={styles.container}>
            <TextInput
              ref={(c) => { this.nameInput = c; }}
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
