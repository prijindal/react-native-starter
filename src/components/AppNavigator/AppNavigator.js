import React, { Component, PropTypes } from 'react';
import Drawer from 'react-native-drawer';
import { NavigationProvider, StackNavigation } from '@exponent/ex-navigation';
import { StatusBar } from 'react-native';

import Router from '../Router';
import SideBar from '../SideBar';
import theme from '../../themes/base-theme';

class AppNavigator extends Component {
  static propTypes = {
    drawerState: PropTypes.string,
    closeDrawer: React.PropTypes.func,
  }

  componentDidUpdate() {
    if (this.props.drawerState === 'opened') {
      this.openDrawer();
    }

    if (this.props.drawerState === 'closed') {
      this._drawer.close();
    }
  }

  openDrawer() {
    this._drawer.open();
  }

  closeDrawer = () => {
    if (this.props.drawerState === 'opened') {
      this.props.closeDrawer();
    }
  }
  render() {
    return (
      <Drawer
        ref={(ref) => { this._drawer = ref; }}
        type="overlay"
        content={<SideBar />}
        tapToClose
        acceptPan
        onClose={this.closeDrawer}
        openDrawerOffset={0.2} // 20% gap on the right side of drawer
        panCloseMask={0.2}
        captureGestures
      >
        <StatusBar
          backgroundColor={theme.statusBarColor}
          barStyle="default"
        />
        <NavigationProvider router={Router}>
          <StackNavigation initialRoute={Router.getRoute('home')} />
        </NavigationProvider>
      </Drawer>
    );
  }
}

export default AppNavigator;
