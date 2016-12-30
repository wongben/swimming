import dva from 'dva';
import { hashHistory } from 'dva/router';
import pools from './models/pools';
import router from './router';
import './index.html';
import './index.css';

// 1. Initialize
const app = dva({
  history: hashHistory,
});

// 2. Plugins
//app.use({});

// 3. Model
app.model(pools);

// 4. Router
app.router(router);

// 5. Start
app.start('#root');
