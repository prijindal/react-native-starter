import React, { Component, PropTypes } from 'react';
import { TouchableNativeFeedback, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import theme from '../../themes/base-theme';

const styles = {
  view: {
    backgroundColor: theme.whiteText,
    paddingHorizontal: 16,
    height: 40,
    alignItems: 'center',
    flexDirection: 'row',
  },
  icon: {
    fontSize: 24,
  },
  text: {
    fontSize: 13,
    fontWeight: '500',
    paddingLeft: 32,
    color: theme.primaryDarkText,
  },
};

class MenuItem extends Component {
  static propTypes = {
    item: PropTypes.shape({
      name: PropTypes.string,
      icon: PropTypes.string,
    }).isRequired,
  }
  render() {
    const { name, icon } = this.props.item;
    return (
      <TouchableNativeFeedback>
        <View style={styles.view}>
          <Icon name={icon} style={styles.icon} />
          <Text style={styles.text}>{name}</Text>
        </View>
      </TouchableNativeFeedback>
    );
  }
}

export default MenuItem;
