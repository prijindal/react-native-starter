import React, { PropTypes } from 'react';
import { View } from 'react-native';
import theme from '../../themes/base-theme';

const styles = {
  statusbar: {
    height: 24,
  },
};

const StatusBar = props => (
  <View>
    <View style={[styles.statusbar, { backgroundColor: props.backgroundColor }]} />
  </View>
);

StatusBar.propTypes = {
  backgroundColor: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.shape(),
  ]),
};

StatusBar.defaultProps = {
  backgroundColor: theme.primary500,
};

export default StatusBar;
