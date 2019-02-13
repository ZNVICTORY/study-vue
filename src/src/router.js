import Vue from 'vue'
//导入vue-router包
import VueRouter from 'vue-router'
//手动安装vue-router
Vue.use(VueRouter);
import account from './main/accout.vue'
//导入account的俩个子组件
import login from './subcom/login.vue'
import register from './subcom/register.vue'
import goodlist from './main/goodslist.vue'


//创建路由对象
var router = new VueRouter({
    routes:[
        {path:"/account",component:account,
            children:[
                {path:'login',component:login},
                {path:'register',component:register}
            ]},
        {path:"/goodlist",component:goodlist}
    ]
});
//把路由对象暴露出去
export default router;