import { createRouter } from '@exponent/ex-navigation';

import App from './App';
import Home from './pages/Home';
import Login from './pages/Login';
import Profile from './pages/Profile';
import User from './pages/User';
import Settings from './pages/Settings';

const Router = createRouter(() => ({
  app: () => App,
  home: () => Home,
  login: () => Login,
  profile: () => Profile,
  user: () => User,
  settings: () => Settings,
}));

export default Router;
