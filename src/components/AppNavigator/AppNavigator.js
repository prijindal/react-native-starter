import React, { Component, PropTypes } from 'react';
import { NavigationStyles, StackNavigation } from '@exponent/ex-navigation';
import { DrawerLayoutAndroid, Dimensions, BackAndroid } from 'react-native';

import StatusBar from '../StatusBar';
import Router from '../../Router';
import SideBar from '../SideBar';

class AppNavigator extends Component {
  static defaultProps = {
    drawerState: 'closed',
  }

  static propTypes = {
    drawerState: PropTypes.string,
    closeDrawer: PropTypes.func.isRequired,
    openDrawer: PropTypes.func.isRequired,
    navigation: PropTypes.shape({}).isRequired,
  }

  componentDidMount() {
    this.registerBackButton();
  }

  componentDidUpdate() {
    if (this.props.drawerState === 'opened') {
      this.openDrawer();
    }

    if (this.props.drawerState === 'closed') {
      this._drawer.closeDrawer();
    }
  }

  componentWillUnmount() {
    BackAndroid.removeEventListener('hardwareBackPress');
  }

  registerBackButton() {
    BackAndroid.addEventListener('hardwareBackPress', () => {
      if (this.props.drawerState === 'opened') {
        this._drawer.closeDrawer();
        return true;
      }
      return false;
    });
  }

  openDrawer() {
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
        renderNavigationView={() =>
          <SideBar
            navigation={this.props.navigation}
          />
        }
        drawerWidth={this.drawerWidth()}
        onDrawerClose={this.props.closeDrawer}
        onDrawerOpen={this.props.openDrawer}
      >
        <StatusBar />
        <StackNavigation
          id="app"
          defaultRouteConfig={{
            styles: {
              ...NavigationStyles.Fade,
            },
          }}
          initialRoute={Router.getRoute('home')}
        />
      </DrawerLayoutAndroid>
    );
  }
}

export default AppNavigator;
