import React, { Component, PropTypes } from 'react';
import { View } from 'react-native';
import { ToolbarAndroid } from 'react-native-vector-icons/MaterialIcons';

import StatusBar from '../StatusBar';
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
    backgroundColor: theme.primary500,
    statusBar: true,
  }

  static propTypes = {
    openDrawer: PropTypes.func.isRequired,
    navigation: PropTypes.shape({
      goBack: PropTypes.func,
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
    backgroundColor: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.shape(),
    ]),
    statusBar: PropTypes.bool,
  }

  pop = () => {
    this.props.navigation.goBack();
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
        {this.props.statusBar &&
          <StatusBar backgroundColor={this.props.backgroundColor} />
        }
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
