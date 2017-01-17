import { connect } from 'react-redux';
import Layout from './Layout';

import { openDrawer } from '../../actions/drawer';

const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch => ({
  openDrawer: () => dispatch(openDrawer()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Layout);
