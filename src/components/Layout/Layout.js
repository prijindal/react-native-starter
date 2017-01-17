import React, { Component, PropTypes } from 'react';
import { View } from 'react-native';
import { ToolbarAndroid } from 'react-native-vector-icons/MaterialIcons';

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
    title: 'StarterKit',
    subtitle: '',
  }

  static propTypes = {
    openDrawer: PropTypes.func.isRequired,
    navigator: PropTypes.shape({
      pop: PropTypes.func,
    }).isRequired,
    children: PropTypes.node.isRequired,
    enableBackButton: PropTypes.bool,
    title: PropTypes.string,
    subtitle: PropTypes.string,
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
        <ToolbarAndroid
          style={styles.toolbar}
          title={this.props.title}
          subtitle={this.props.subtitle}
          titleColor={theme.primaryWhiteText}
          subtitleColor={theme.secondaryWhiteText}
          {...toolbarProps}
        />
        {this.props.children}
      </View>
    );
  }
}

export default Layout;
