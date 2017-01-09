import dva from 'dva';
import { hashHistory } from 'dva/router';
import pools from './models/pools';
import infos from './models/infos';
import router from './router';
import './index.html';
import './index.css';
//import './less/common/mixins.less'


// 1. Initialize
const app = dva({
  history: hashHistory,
});

// 2. Plugins
//app.use({});

// 3. Model
app.model(pools);
app.model(infos);

// 4. Router
app.router(router);

// 5. Start
app.start('#root');
