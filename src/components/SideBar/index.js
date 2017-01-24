import { connect } from 'react-redux';
import SideBar from './SideBar';
import { setUser } from '../../actions/user';
import { closeDrawer } from '../../actions/drawer';

const mapStateToProps = ({ user }) => ({ user });

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(setUser('')),
  closeDrawer: () => dispatch(closeDrawer()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SideBar);
