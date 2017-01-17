import React, { Component } from 'react';
import { View, Text } from 'react-native';
import CodePush from 'react-native-code-push';

import AppNavigator from './components/AppNavigator';

class App extends Component {
  state = {
    showDownloadingModal: false,
    showInstalling: false,
    downloadProgress: 0,
  };

  componentDidMount() {
    CodePush.sync({ updateDialog: true, installMode: CodePush.InstallMode.IMMEDIATE },
      (status) => {
        switch (status) {
          case CodePush.SyncStatus.DOWNLOADING_PACKAGE:
            this.setState({ showDownloadingModal: true });
            this._modal.open();
            break;
          case CodePush.SyncStatus.INSTALLING_UPDATE:
            this.setState({ showInstalling: true });
            break;
          case CodePush.SyncStatus.UPDATE_INSTALLED:
            this._modal.close();
            this.setState({ showDownloadingModal: false });
            break;
          default:
            break;
        }
      },
      ({ receivedBytes, totalBytes }) => {
        this.setState({ downloadProgress: (receivedBytes / totalBytes) * 100 });
      },
    );
  }
  render() {
    const { showDownloadingModal, showInstalling, downloadProgress } = this.state;
    if (showDownloadingModal) {
      return (
        <View>
          {showInstalling ?
            <Text>Installing</Text> :
            <Text>Downloading: {downloadProgress}</Text>
          }
        </View>
      );
    }
    return <AppNavigator />;
  }
}

export default App;
