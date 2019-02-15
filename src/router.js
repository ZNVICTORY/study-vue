import  Vue  from  'vue'
//导入路由模块
import VueRouter from 'vue-router'
//安装路由模块
Vue.use(VueRouter);
//导入对应的路由组件
import Home from './components/Tabbar/homeContainer.vue'
import Member from './components/Tabbar/MemberContainer.vue'
import Search from './components/Tabbar/SearchContainer.vue'
import Shopcar from './components/Tabbar/ShopcarContainer.vue'
import  NewList from './components/news/newlist.vue'
import NewInfo from './components/news/newinfo.vue'


//创建路由对象
var router = new VueRouter({
    routes:[
        //配置路有规则
        {path:'/',redirect:"/home"},//路由重定向
        { path: '/home' , component:Home },
        { path: '/member' , component:Member },
        { path: '/shopcar' , component:Shopcar },
        { path: '/search' , component:Search },
        {path: '/home/newlist', component:NewList},
        {path:'/home/newinfo/:id', component:NewInfo}
    ],
    linkActiveClass:'mui-active'//覆盖默认的路由，高亮的类，默认的类叫做router-link-active
});
//把路由对象暴露出去
export default router;