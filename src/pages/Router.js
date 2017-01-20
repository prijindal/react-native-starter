import { createRouter } from '@exponent/ex-navigation';

import Home from './Home';
import Login from './Login';
import Profile from './Profile';
import User from './User';

const Router = createRouter(() => ({
  home: () => Home,
  login: () => Login,
  profile: () => Profile,
  user: () => User,
}));

export default Router;
