import React, { PropTypes } from 'react';
import { Router, Route, IndexRoute, Link } from 'dva/router';
import IndexPage from './routes/IndexPage';
import Pools from './routes/Pools';

export default ({ history }) => {
  return (
    <Router history={history}>
      <Route path="/" component={Pools} />
      <Route path="/pools" component={Pools} />
    </Router>
  );
};
