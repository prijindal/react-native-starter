import React, { PropTypes } from 'react';
import { requireNativeComponent } from 'react-native';

const RNTextInputLayout = requireNativeComponent('RNTextInputLayout', null);

const styles = {
  textInputLayout: {
    marginTop: 8,
  },
};

const TextInputLayout = props => (
  <RNTextInputLayout {...props} style={[styles.textInputLayout, props.style]} />
);

TextInputLayout.propTypes = {
  style: PropTypes.shape(),
};

TextInputLayout.defaultProps = {
  style: {},
};

export default TextInputLayout;
