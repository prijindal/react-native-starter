import { createRouter } from '@exponent/ex-navigation';

import AppNavigator from './components/AppNavigator';
import Home from './pages/Home';
import Login from './pages/Login';
import Profile from './pages/Profile';
import User from './pages/User';
import Settings from './pages/Settings';

const Router = createRouter(() => ({
  app: () => AppNavigator,
  home: () => Home,
  login: () => Login,
  profile: () => Profile,
  user: () => User,
  settings: () => Settings,
}));

export default Router;
