/* @flow */
import { StackNavigator } from 'react-navigation';

import Home from './pages/Home';
import User from './pages/User';
import Profile from './pages/Profile';
import Login from './pages/Login';
import Settings from './pages/Settings';

const Routes = StackNavigator({
  home: { screen: Home },
  user: { screen: User },
  profile: { screen: Profile },
  settings: { screen: Settings },
  login: { screen: Login },
}, {
  headerMode: 'none',
});

export default Routes;
