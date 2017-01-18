import React, { Component, PropTypes } from 'react';
import { NavigationProvider, StackNavigation } from '@exponent/ex-navigation';
import { StatusBar, DrawerLayoutAndroid, Dimensions } from 'react-native';

import Router from '../Router';
import SideBar from '../SideBar';
import theme from '../../themes/base-theme';

class AppNavigator extends Component {
  static defaultProps = {
    drawerState: 'closed',
  }

  static propTypes = {
    drawerState: PropTypes.string,
    closeDrawer: PropTypes.func.isRequired,
    openDrawer: PropTypes.func.isRequired,
  }

  componentDidUpdate() {
    if (this.props.drawerState === 'opened') {
      this.openDrawer();
    }

    if (this.props.drawerState === 'closed') {
      this._drawer.closeDrawer();
    }
  }

  openDrawer() {
    // console.log(this._drawer.openDrawer());
    this._drawer.openDrawer();
  }

  drawerWidth = () => {
    const { width } = Dimensions.get('window');
    if (width - 56 > 320) {
      return 320;
    }
    return width - 56;
  }

  render() {
    return (
      <DrawerLayoutAndroid
        ref={(ref) => { this._drawer = ref; }}
        renderNavigationView={() => <SideBar />}
        drawerWidth={this.drawerWidth()}
        onDrawerClose={this.props.closeDrawer}
        onDrawerOpen={this.props.openDrawer}
      >
        <StatusBar
          animated
          translucent
          backgroundColor={theme.transparent}
        />
        <NavigationProvider router={Router}>
          <StackNavigation initialRoute={Router.getRoute('home')} />
        </NavigationProvider>
      </DrawerLayoutAndroid>
    );
  }
}

export default AppNavigator;
