import { connect } from 'react-redux';

import AppNavigator from './AppNavigator';

import { closeDrawer, openDrawer } from '../../actions/drawer';

const mapStateToProps = ({ drawer: { drawerState } }) => ({ drawerState });

const mapDispatchToProps = dispatch => ({
  closeDrawer: () => dispatch(closeDrawer()),
  openDrawer: () => dispatch(openDrawer()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AppNavigator);
