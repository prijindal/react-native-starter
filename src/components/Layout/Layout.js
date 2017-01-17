import React, { Component, PropTypes } from 'react';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import theme from '../../themes/base-theme';

const styles = {
  toolbar: {
    height: 56,
    backgroundColor: theme.toolbarDefaultBg,
  },
};

class Layout extends Component {
  static defaultProps = {
    enableBackButton: false,
  }

  static propTypes = {
    openDrawer: PropTypes.func.isRequired,
    navigator: PropTypes.shape({
      pop: PropTypes.func,
    }).isRequired,
    children: PropTypes.element.isRequired,
    enableBackButton: PropTypes.bool,
  }

  pop = () => {
    this.props.navigator.pop();
  }

  render() {
    let toolbarProps = {
      onIconClicked: this.props.openDrawer,
      navIconName: 'menu',
    };
    if (this.props.enableBackButton) {
      toolbarProps.onIconClicked = this.pop;
      toolbarProps.navIconName = 'arrow-back';
    }
    return (
      <View>
        <Icon.ToolbarAndroid
          style={styles.toolbar}
          titleColor={theme.whiteText}
          {...toolbarProps}
        />
        {this.props.children}
      </View>
    );
  }
}

export default Layout;
