import React, { Component, PropTypes } from 'react';
import Drawer from 'react-native-drawer';
import { NavigationProvider, StackNavigation } from '@exponent/ex-navigation';
import { StatusBar } from 'react-native';

import Router from '../Router';
import SideBar from '../SideBar';
import theme from '../../themes/base-theme';

const styles = {
  drawerStyles: {
    drawer: {
      shadowColor: '#000000',
      shadowOpacity: 0.8,
      shadowRadius: 3,
    },
    main: {
      paddingLeft: 3,
    },
  },
};

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

  openDrawerOffset({ width }) {
    if (width - 56 > 320) {
      return width - 320;
    }
    return 56;
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
        openDrawerOffset={this.openDrawerOffset} // 20% gap on the right side of drawer
        panCloseMask={0.2}
        captureGestures
        styles={styles.drawerStyles}
        tweenHandler={ratio => ({
          main: {
            backgroundColor: '#000',
            opacity: (2 - ratio) / 2,
          },
          mainOverlay: {
            backgroundColor: '#000000',
            opacity: ratio * 1.1,
          },
        })}
      >
        <StatusBar
          animated
          translucent
          backgroundColor={theme.transparent}
        />
        <NavigationProvider router={Router}>
          <StackNavigation initialRoute={Router.getRoute('home')} />
        </NavigationProvider>
      </Drawer>
    );
  }
}

export default AppNavigator;
