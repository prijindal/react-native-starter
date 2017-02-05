import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { DrawerLayoutAndroid, Dimensions, BackAndroid } from 'react-native';

import SideBar from '../SideBar';
import Router from '../../Router';

import theme from '../../themes/base-theme';

@connect(
  ({ nav }) => ({ nav }),
  dispatch => ({
    goBack: () => dispatch({
      type: 'Back',
    }),
  }),
)
class AppNavigator extends Component {
  static defaultProps = {
    drawerState: 'closed',
  }

  static propTypes = {
    drawerState: PropTypes.string,
    closeDrawer: PropTypes.func.isRequired,
    openDrawer: PropTypes.func.isRequired,
    nav: PropTypes.shape({
      index: PropTypes.number,
    }).isRequired,
    goBack: PropTypes.func.isRequired,
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
      if (this.props.nav.index > 0) {
        this.props.goBack();
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
          <SideBar />
        }
        drawerWidth={this.drawerWidth()}
        onDrawerClose={this.props.closeDrawer}
        onDrawerOpen={this.props.openDrawer}
        drawerBackgroundColor={theme.transparent}
      >
        <Router />
      </DrawerLayoutAndroid>
    );
  }
}

export default AppNavigator;
