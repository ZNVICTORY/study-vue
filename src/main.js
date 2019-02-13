//这是所有js 入口的文件
console.log("ok");

//导入Vue
import Vue from 'vue'
//导入MUI 的样式
import './lib/mui/css/mui.min.css'

//按需导入组件
import { Header } from 'mint-ui';
Vue.component(Header.name,Header);



//导入APP根组件
import app from './App.vue'

var vm = new Vue({
    el:'#app',
    render:c=>c(app)
});