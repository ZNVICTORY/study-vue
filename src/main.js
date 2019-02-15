//这是所有js 入口的文件
console.log("ok");

//导入Vue
import Vue from 'vue'
//1.1导入路由的包
// import VueRouter from 'vue-router'
//1.2安装路由
// Vue.use(VueRouter);
//1.3导入自定义的router.js 路由模块
import router from  './router.js'
//导入vue-resource
import VueResource from 'vue-resource'
Vue.use(VueResource);
//导入时间插件
import moment from 'moment';
//定义全局过滤器
Vue.filter("dataformat",function (dataStr,pattern='YYYY-MM-DD HH:mm:ss') {
    return moment(dataStr).format(pattern);
});



//导入MUI 的样式
import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'

//按需导入组件
import { Header, Swipe, SwipeItem ,Button} from 'mint-ui';
Vue.component(Header.name,Header);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.component(Button.name, Button);



//导入APP根组件
import app from './App.vue'

var vm = new Vue({
    el:'#app',
    render:c=>c(app),
    router//挂在路由对象到VM实例上
});