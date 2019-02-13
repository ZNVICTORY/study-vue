//这是所有js 入口的文件
import Vue from 'vue'
//导入app组件
import app from './App.vue'
//导入vue-router包
import VueRouter from 'vue-router'
//手动安装vue-router
Vue.use(VueRouter);
//导入自定义路由模块
import  router from './router.js'
//创建VM 实例
var vm = new  Vue({
    el:'#app',
    render:c=>c(app),//render 会把 el 指定的容器中，所有的内容都清空覆盖，所以不要把
    // 路由的router-view 和router-link 直接写到 el 所控制的元素中
    router//将路由挂载到VM上
});