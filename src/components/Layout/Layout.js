import React, { Component, PropTypes } from 'react';
import { View } from 'react-native';
import { ToolbarAndroid } from 'react-native-vector-icons/MaterialIcons';

import theme from '../../themes/base-theme';

const styles = {
  container: {
    // marginTop: 24,
  },
  toolbar: {
    height: 56,
    backgroundColor: theme.toolbarDefaultBg,
    elevation: 4,
  },
};

class Layout extends Component {
  static defaultProps = {
    enableBackButton: false,
    title: 'StarterKit',
    children: <View />,
    titleColor: theme.whiteText,
    subtitle: '',
    actions: [],
    onActionSelected: () => {},
    onIconClicked: () => {},
    toolbarStyle: {},
    navIconName: '',
  }

  static propTypes = {
    openDrawer: PropTypes.func.isRequired,
    navigator: PropTypes.shape({
      pop: PropTypes.func,
    }).isRequired,
    children: PropTypes.node,
    enableBackButton: PropTypes.bool,
    toolbarStyle: PropTypes.shape(),
    title: PropTypes.string,
    titleColor: PropTypes.string,
    subtitle: PropTypes.string,
    actions: PropTypes.arrayOf(
      PropTypes.shape({}),
    ),
    onActionSelected: PropTypes.func,
    onIconClicked: PropTypes.func,
    navIconName: PropTypes.string,
  }

  pop = () => {
    this.props.navigator.pop();
    this.props.onIconClicked();
  }

  openDrawer = () => {
    this.props.openDrawer();
    this.props.onIconClicked();
  }

  render() {
    const toolbarProps = {
      onIconClicked: this.openDrawer,
      navIconName: 'menu',
    };
    if (this.props.enableBackButton) {
      toolbarProps.onIconClicked = this.pop;
      toolbarProps.navIconName = 'arrow-back';
    }
    if (this.props.navIconName) {
      toolbarProps.navIconName = this.props.navIconName;
    }
    return (
      <View style={styles.container}>
        <ToolbarAndroid
          style={[styles.toolbar, this.props.toolbarStyle]}
          title={this.props.title}
          subtitle={this.props.subtitle}
          actions={this.props.actions}
          onActionSelected={this.props.onActionSelected}
          titleColor={this.props.titleColor}
          subtitleColor={theme.secondaryWhiteText}
          {...toolbarProps}
        />
        {this.props.children}
      </View>
    );
  }
}

export default Layout;
