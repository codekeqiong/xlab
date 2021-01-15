import ReactDOM from 'react-dom'
import { router } from './router/index';
import '@/assets/style/common.less';
import moment from 'moment';
import 'moment/locale/zh-cn';
moment.locale('zh-cn');


ReactDOM.render(router, document.getElementById('root'));
