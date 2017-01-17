import { createRouter } from '@exponent/ex-navigation';

import Home from './Home';

const Router = createRouter(() => ({
  home: () => Home,
}));

export default Router;
