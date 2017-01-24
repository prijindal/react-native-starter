import React, { Component, PropTypes } from 'react';
import { View, TextInput } from 'react-native';

import theme from '../../themes/base-theme';
import Layout from '../../components/Layout';
import StatusBar from '../../components/StatusBar';
import TextInputLayout from '../../components/TextInputLayout';

const styles = {
  container: {},
};

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
          <View style={styles.container}>
            <TextInputLayout style={styles.textInputContainer}>
              <TextInput
                ref={(c) => { this.nameInput = c; }}
                autoCapitalize="words"
                style={styles.textInput}
                underlineColorAndroid={theme.primary500}
                placeholder="Name"
                onChangeText={name => this.setState({ name })}
              />
            </TextInputLayout>
          </View>
        </Layout>
      </View>
    );
  }
}

export default Settings;
