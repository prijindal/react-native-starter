import React, { Component, PropTypes } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';

import theme from '../../themes/base-theme';

const styles = {
  buttonOpacity: {
    height: 48,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    height: 36,
    margin: 6,
    paddingHorizontal: 16,
    borderRadius: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontWeight: '600',
    fontSize: 14,
  },
};

const Button: Component = ({ children, onPress, backgroundColor, textColor, disabled }) => (
  <TouchableOpacity
    activeOpacity={disabled ? 1 : 0.2}
    style={styles.buttonOpacity}
    onPress={disabled ? null : onPress}
  >
    <View style={[styles.button, { backgroundColor }]}>
      <Text style={[styles.buttonText, { color: textColor }]}>{children}</Text>
    </View>
  </TouchableOpacity>
);

Button.propTypes = {
  children: PropTypes.string.isRequired,
  onPress: PropTypes.func,
  backgroundColor: PropTypes.string,
  textColor: PropTypes.string,
  disabled: PropTypes.bool,
};

Button.defaultProps = {
  onPress: () => {},
  backgroundColor: theme.primary500,
  textColor: theme.whiteText,
  disabled: false,
};

export default Button;
