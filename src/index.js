import dva from 'dva';
import createLoading from 'dva-loading';
import pools from './models/pools';
import router from './router';
import './index.html';
import './index.css';

// 1. Initialize
const app = dva();

// 2. Plugins
app.use(createLoading());

// 3. Model
app.model(pools);

// 4. Router
app.router(router);

// 5. Start
app.start('#root');
