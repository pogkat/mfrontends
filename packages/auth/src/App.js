import React from 'react';
import { Switch, Route, Router } from 'react-router-dom';
import {
  StylesProvider,
  createGenerateClassName,
} from '@material-ui/core/styles';

import Signin from './components/Signin';
import Signup from './components/Signup';

const generateClassName = createGenerateClassName({
  productionPrefix: 'au',
});

export default ({ history , onAuthChange}) => {
  return (
    <div>
      <StylesProvider generateClassName={generateClassName}>
        <Router history={history}>
          <Switch>
            <Route path="/auth/signin">
              <Signin onSignIn={onAuthChange} />
            </Route>

            <Route path="/auth/signup">
              <Signup onSignIn={onAuthChange} />
            </Route>
          </Switch>
        </Router>
      </StylesProvider>
    </div>
  );
};
