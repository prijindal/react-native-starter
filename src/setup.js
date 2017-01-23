import React, { Component } from 'react';
import { NavigationStyles, NavigationProvider, StackNavigation } from '@exponent/ex-navigation';
import { Provider } from 'react-redux';

import SplashScreen from './components/SplashScreen';
import Router from './Router';
import configureStore from './configureStore';

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
          <NavigationProvider router={Router}>
            <StackNavigation
              id="master"
              initialRoute={Router.getRoute('app')}
              defaultRouteConfig={{
                styles: {
                  ...NavigationStyles.Fade,
                },
              }}
            />
          </NavigationProvider>
        </Provider>
      );
    }
  }

  return Root;
}

export default setup;
