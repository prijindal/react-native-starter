import React, { Component, PropTypes } from 'react';
import { View, TouchableNativeFeedback, Text } from 'react-native';
import * as Animatable from 'react-native-animatable';

import theme from '../../themes/base-theme';

const styles = {
  buttonOpacity: {
    height: 48,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    minWidth: 88,
    height: 36,
    margin: 6,
    paddingHorizontal: 16,
    borderRadius: 2,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 2,
  },
  buttonText: {
    fontWeight: '600',
    fontSize: 14,
  },
};

class Button extends Component {
  state = {
    raised: false,
  }

  render() {
    const {
      children,
      onPress,
      backgroundColor,
      pressedBackgroundColor,
      textColor,
      disabled,
    } = this.props;
    const { raised } = this.state;
    const element = (
      <Animatable.View
        transition={['backgroundColor', 'elevation']}
        style={
        [
          styles.button,
          {
            backgroundColor: raised ? pressedBackgroundColor : backgroundColor,
            elevation: raised ? 6 : 2,
          },
        ]
        }
      >
        <Text style={[styles.buttonText, { color: textColor }]}>{children}</Text>
      </Animatable.View>
    );
    if (disabled) {
      return (
        <View style={styles.buttonOpacity}>
          {element}
        </View>
      );
    }
    return (
      <TouchableNativeFeedback
        style={styles.buttonOpacity}
        onPress={onPress}
        onPressIn={() => this.setState({ raised: true })}
        onPressOut={() => this.setState({ raised: false })}
      >
        {element}
      </TouchableNativeFeedback>
    );
  }
}

Button.propTypes = {
  children: PropTypes.string.isRequired,
  onPress: PropTypes.func,
  backgroundColor: PropTypes.string,
  pressedBackgroundColor: PropTypes.string,
  textColor: PropTypes.string,
  disabled: PropTypes.bool,
};

Button.defaultProps = {
  onPress: () => {},
  backgroundColor: theme.primary500,
  pressedBackgroundColor: theme.primary700,
  textColor: theme.whiteText,
  disabled: false,
};

export default Button;
