import React, { Component, PropTypes } from 'react';
import { Text } from 'react-native';

import Layout from '../../components/Layout';
import Loading from '../../components/Loading';
import theme from '../../themes/base-theme';

const styles = {
  text: {
    color: theme.primaryDarkText,
  },
};

class Home extends Component {
  static propTypes = {
    navigator: PropTypes.shape({
      push: PropTypes.func,
    }).isRequired,
    user: PropTypes.shape({
      name: PropTypes.string,
    }).isRequired,
  }

  state = {
    loading: true,
    actions: [],
    list: [],
  }

  componentWillMount() {
    this._mounted = true;
    this.updateActions(this.props);
  }

  componentDidMount() {
    setTimeout(
      () => {
        if (!this._mounted) return;
        this.setState({
          loading: false,
          list: [1, 2, 3],
        });
      },
      3000,
    );
  }

  componentWillReceiveProps(nextProps) {
    if (this._mounted) {
      this.updateActions(nextProps);
    }
  }

  componentWillUnmount() {
    this._mounted = false;
  }

  onActionSelected = (position) => {
    if (!this.props.user.name) {
      if (position === 0) {
        this.props.navigator.push('login');
      }
    } else if (position === 0) {
      this.props.navigator.push('notifications');
    } else if (position === 1) {
      this.props.navigator.push('profile');
    }
  }

  updateActions(props) {
    let actions = [];
    if (props.user.name) {
      actions = [
        ...actions,
        {
          title: 'Notifications',
          iconName: 'notifications',
          show: 'always',
        },
        {
          title: 'Logout',
          iconName: 'person-outline',
          show: 'always',
        },
      ];
    } else {
      actions = [
        ...actions,
        {
          title: 'Login',
          iconName: 'person',
          show: 'always',
        },
      ];
    }
    if (this._mounted) {
      this.setState({
        actions,
      });
    }
  }

  render() {
    const { loading, list } = this.state;
    return (
      <Layout
        title="Home"
        actions={this.state.actions}
        onActionSelected={this.onActionSelected}
        navigator={this.props.navigator}
      >
        {loading ?
          <Loading /> :
          list.map(item =>
            <Text
              style={styles.text}
              key={item}
            >{item}</Text>,
        )}
      </Layout>
    );
  }
}

export default Home;
