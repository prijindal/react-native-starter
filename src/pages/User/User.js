import React, { Component, PropTypes } from 'react';
import { View, Text, Image } from 'react-native';

import theme from '../../themes/base-theme';
import Layout from '../../components/Layout';

const styles = {
  avatar: {
    height: 240,
    width: 360,
  },
  toolbar: {
    backgroundColor: theme.transparent,
  },
};

class User extends Component {
  static propTypes = {
    navigator: PropTypes.shape({}).isRequired,
    user: PropTypes.shape({
      id: PropTypes.string,
      title: PropTypes.string,
      body: PropTypes.string,
      avatar: PropTypes.string,
    }).isRequired,
  }

  render() {
    const { title, avatar, body } = this.props.user;
    return (
      <View>
        <Image source={{ uri: avatar }} style={styles.avatar}>
          <Layout
            enableBackButton
            title={title}
            titleColor={theme.darkText}
            toolbarStyle={styles.toolbar}
            actions={[]}
            onActionSelected={this.onActionSelected}
            navigator={this.props.navigator}
          />
        </Image>
        <Text style={styles.body}>{body}</Text>
      </View>
    );
  }
}

export default User;
