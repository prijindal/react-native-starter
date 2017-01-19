import { createRouter } from '@exponent/ex-navigation';

import Home from './Home';
import Login from './Login';
import Profile from './Profile';

const Router = createRouter(() => ({
  home: () => Home,
  login: () => Login,
  profile: () => Profile,
}));

export default Router;
