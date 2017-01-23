import { connect } from 'react-redux';
import SideBar from './SideBar';
import { setUser } from '../../actions/user';

const mapStateToProps = ({ user }) => ({ user });

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(setUser('')),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SideBar);
