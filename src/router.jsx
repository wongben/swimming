import React, { PropTypes } from 'react';
import { Router, Route, Redirect } from 'dva/router';
import Pools from './routes/Pools';
import PoolPage from './routes/PoolPage';
import Playground from './routes/Playground';
import NotFound from './routes/NotFound';
import Info from './routes/Info';
import PhotoAlbum from './routes/photoAlbum';
import Profile from './routes/Profile';
import LifeSaver from './routes/LifeSaver';
import {CoachPage} from './routes/coach';
import Preferential from './routes/Preferential';

export default ({ history }) => {
  return (
    <Router history={history}>
      <Redirect from="/" to="/pools" />
      <Route path="/pools" component={Pools} />
      <Route path="/pools/:poolId" component={PoolPage} />
      <Route path="/discount" component={Playground} />
      <Route path="/info" component={Playground} />
      <Route path="/mine" component={Playground} />
      <Route path="/playground" component={Playground} />
      <Route path="/info" component={Info} />  
      <Route path="/photoAlbum" component={PhotoAlbum} />
      <Route path="/profile" component={Profile} />      
      <Route path="/lifesaver" component={LifeSaver} />
      <Route path="/coach" component={CoachPage} />
      <Route path="/preferential" component={Preferential} />
      <Route path="*" component={NotFound} />
    </Router>
  );
};
