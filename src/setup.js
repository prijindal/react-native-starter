import React, { Component } from 'react';
import { Provider } from 'react-redux';

import SplashScreen from './components/SplashScreen';
import configureStore from './configureStore';
import AppNavigator from './components/AppNavigator';

function setup():React.Component {
  class Root extends Component {
    state = {
      isLoading: true,
      store: configureStore(() => this.setState({ isLoading: false })),
    };

    render() {
      if (this.state.isLoading) {
        return <SplashScreen />;
      }
      return (
        <Provider store={this.state.store}>
          <AppNavigator />
        </Provider>
      );
    }
  }

  return Root;
}

export default setup;
