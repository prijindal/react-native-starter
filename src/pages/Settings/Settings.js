import React, { Component, PropTypes } from 'react';
import { View, TextInput, Slider, Picker } from 'react-native';

import theme from '../../themes/base-theme';
import Layout from '../../components/Layout';
import StatusBar from '../../components/StatusBar';

const styles = {
  container: {},
  textInputContainer: {
    marginTop: 5,
  },
};

class Settings extends Component {
  static propTypes = {
    navigator: PropTypes.shape({
      pop: PropTypes.func,
    }).isRequired,
  }

  onActionSelected = () => {
    this.props.navigator.pop();
  }

  render() {
    return (
      <View>
        <StatusBar />
        <Layout
          enableBackButton
          actions={[{
            title: 'Save',
            iconName: 'save',
            show: 'always',
          }]}
          onActionSelected={this.onActionSelected}
          navIconName="close"
          title="Settings"
          navigator={this.props.navigator}
        >
          <View style={styles.container}>
            <TextInput
              ref={(c) => { this.nameInput = c; }}
              autoCapitalize="words"
              style={styles.textInput}
              underlineColorAndroid={theme.primary500}
              placeholder="Name"
              onChangeText={name => this.setState({ name })}
            />
            <Slider />
            <Picker
              mode="dropdown"
              style={{ justifyContent: 'flex-end' }}
            >
              <Picker.Item label="Java" value="java" />
              <Picker.Item label="JavaScript" value="js" />
            </Picker>
          </View>
        </Layout>
      </View>
    );
  }
}

export default Settings;
