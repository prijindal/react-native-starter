import { createRouter } from '@exponent/ex-navigation';

import Home from './Home';
import Login from './Login';

const Router = createRouter(() => ({
  home: () => Home,
  login: () => Login,
}));

export default Router;
