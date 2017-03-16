/* @flow */
import { connect } from 'react-redux';
import Home from './Home';

const mapStateToProps = ({ user }) => ({ user });

export default connect(
  mapStateToProps,
)(Home);
