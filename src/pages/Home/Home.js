import React, { Component, PropTypes } from 'react';
import { View, Text } from 'react-native';

import ScrollableLayout from '../../components/ScrollableLayout';
import ListItem from '../../components/ListItem';
import theme from '../../themes/base-theme';
// import mockData from '../../../helpers/mockedData.json';
import mockData from './mockData';

const styles = {
  view: {
    backgroundColor: theme.backgroundText,
  },
  subheader: {
    paddingLeft: 16,
    height: 48,
    justifyContent: 'center',
  },
  subheaderText: {
    fontSize: 14,
    color: theme.secondaryDarkText,
    fontWeight: '900',
    fontFamily: 'sans-serif-light',
  },
};

class Home extends Component {
  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func,
    }).isRequired,
    user: PropTypes.shape({
      name: PropTypes.string,
    }).isRequired,
  }

  state = {
    refreshing: false,
    loading: false,
    actions: [],
    data: [],
  }

  componentWillMount() {
    this._mounted = true;
    this.updateActions(this.props);
  }

  componentDidMount() {
    mockData()
    .then((data) => {
      if (!this._mounted) return;
      this.setState({
        loading: false,
        data,
      });
    });
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
        this.props.navigation.navigate('login');
      }
    } else if (position === 0) {
      this.props.navigation.navigate('notifications');
    } else if (position === 1) {
      this.props.navigation.navigate('profile');
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

  openUser(user) {
    this.props.navigation.navigate('user', { user });
  }

  onRefresh = () => {
    this.setState({
      refreshing: true,
    });
    mockData()
    .then((data) => {
      if (!this._mounted) return;
      this.setState(() => ({
        data,
        refreshing: false,
      }));
    });
  }

  render() {
    return (
      <View style={styles.view}>
        <ScrollableLayout
          title="Home"
          actions={this.state.actions}
          // loadNewData={this.loadNewData}
          onActionSelected={this.onActionSelected}
          navigation={this.props.navigation}
          style={styles.list}
          onRefresh={this.onRefresh}
          refreshing={this.state.refreshing}
        >
          {this.state.data.map(({ id, name, list }) =>
            <View>
              {list.length > 0 &&
                <View key={id}>
                  <View style={styles.subheader}>
                    <Text style={styles.subheaderText}>{name}</Text>
                  </View>
                  {
                    list.map((item, idx) =>
                      <ListItem
                        item={item}
                        idx={idx}
                        length={list.length}
                        onPress={() => this.openUser(item)}
                        key={item.id}
                      />,
                  )}
                </View>
              }
            </View>,
          )}
        </ScrollableLayout>
      </View>
    );
  }
}

export default Home;
