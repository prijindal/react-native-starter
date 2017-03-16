/* @flow */
import React, { Component } from 'react';
import { Provider } from 'react-redux';

import AppShell from './pages/AppShell';
import configureStore from './configureStore';
import AppNavigator from './components/AppNavigator';

function setup() {
  class Root extends Component {
    state = {
      isLoading: true,
      store: configureStore(() => this.setState({ isLoading: false })),
    };

    render() {
      if (this.state.isLoading) {
        return <AppShell />;
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
