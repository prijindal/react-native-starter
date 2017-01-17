import { connect } from 'react-redux';

import AppNavigator from './AppNavigator';

import { closeDrawer } from '../../actions/drawer';

const mapStateToProps = ({ drawer: { drawerState } }) => ({ drawerState });

const mapDispatchToProps = dispatch => ({
  closeDrawer: () => dispatch(closeDrawer()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AppNavigator);
