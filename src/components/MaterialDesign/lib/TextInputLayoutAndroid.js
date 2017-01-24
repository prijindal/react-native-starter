/* eslint react/require-default-props: 0 */
import React, { Component, PropTypes } from 'react';
import { requireNativeComponent, View } from 'react-native';

const RCTTextInputLayoutAndroid = requireNativeComponent('RCTTextInputLayoutAndroid', null);

class TextInputLayoutAndroid extends Component {
  static propTypes = {
    ...View.propTypes,
    hint: PropTypes.string,
    hintAnimationEnabled: PropTypes.bool,
    errorEnabled: PropTypes.bool,
    error: PropTypes.string,
    counterEnabled: PropTypes.bool,
    counterMaxLength: PropTypes.number,
  }

  static defaultProps = {}

  render() {
    return (
      <RCTTextInputLayoutAndroid
        {...this.props}
        style={this.props.style}
      >
        {this.props.children}
      </RCTTextInputLayoutAndroid>
    );
  }
}

module.exports = TextInputLayoutAndroid;
