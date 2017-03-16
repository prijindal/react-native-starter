/* @flow */
import React, { Component, PropTypes } from 'react';
import { View } from 'react-native';

import theme from '../../themes/base-theme';

const styles = {
  view: {
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderColor: theme.dividerDarkText,
  },
};

class List extends Component {
  static defaultProps = {
    noBorder: false,
  }

  static propTypes = {
    children: PropTypes.node.isRequired,
    noBorder: PropTypes.bool,
  }

  render() {
    return (
      <View style={[styles.view, { borderBottomWidth: this.props.noBorder ? 0 : 1 }]}>
        {this.props.children}
      </View>
    );
  }
}

export default List;
