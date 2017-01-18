import { connect } from 'react-redux';
import SideBar from './SideBar';

const mapStateToProps = ({ user }) => ({ user });

export default connect(
  mapStateToProps,
)(SideBar);
