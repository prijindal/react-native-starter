import React, { Component, PropTypes } from 'react';
import { View, ScrollView, Text } from 'react-native';

import Layout from '../../components/Layout';
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
    loading: false,
    actions: [],
    data: [],
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
          data: mockData(),
        });
      },
      0,
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

  onScroll = ({ nativeEvent }) => {
    const offsetBuffer = 500;
    const offset = nativeEvent.contentOffset.y;
    const size = nativeEvent.contentSize.height;
    const measurement = nativeEvent.layoutMeasurement.height;
    if (size - (measurement + offset) < offsetBuffer) {
      this.loadNewData();
    }
    // console.log(measurement + offset, size);
  }

  loadNewData() {
    if (this.state.loading) return;
    if (this.state.data.length > 10) return;
    this.setState({
      loading: true,
    });
    this.setState(prevState => ({
      loading: false,
      data: [
        ...prevState.data,
        ...mockData(),
      ],
    }));
  }

  render() {
    return (
      <View style={styles.view}>
        <Layout
          title="Home"
          actions={this.state.actions}
          onActionSelected={this.onActionSelected}
          navigation={this.props.navigation}
        />
        <ScrollView
          ref={(c) => { this.scrollView = c; }}
          onScroll={this.onScroll}
          style={styles.list}
        >
          {this.state.data.map(({ id, name, list }) =>
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
            </View>,
          )}
        </ScrollView>
      </View>
    );
  }
}

export default Home;
