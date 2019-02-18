<template>
    <div>
        <!--轮播图区域-->
        <swiper :lunbotuList="lunbotuList" :isfull="true"></swiper>
        <!--内容区域-->
        <ul class="mui-table-view mui-grid-view mui-grid-9">
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <router-link to="/home/newlist">
                <span class="mui-icon mui-icon-home"></span>
                <div class="mui-media-body">新闻资讯</div></router-link></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <router-link to="/home/photolist">
                <span class="mui-icon mui-icon-email"><span class="mui-badge">5</span></span>
                <div class="mui-media-body">图片分享</div>
                </router-link></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <router-link to="/home/goodslist">
                <span class="mui-icon mui-icon-chatbubble"></span>
                <div class="mui-media-body">商品购买</div></router-link></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                <span class="mui-icon mui-icon-location"></span>
                <div class="mui-media-body">留言反馈</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                <span class="mui-icon mui-icon-search"></span>
                <div class="mui-media-body">视频专区</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                <span class="mui-icon mui-icon-phone"></span>
                <div class="mui-media-body">联系我们</div></a></li>
        </ul>
        <!--<h1>这是首页</h1>-->
    </div>
</template>

<script>
    import { Toast } from 'mint-ui';
    import swiper from '../subcomponents/swipe.vue'
    export default {
        name: "homeContainer",
        data(){
            return {
               lunbotuList:[
                   {url:"https://i1.mifile.cn/f/i/2018/mi8/summary/index1.jpg"},
                   {url:"https://i1.mifile.cn/f/i/2018/mi8/summary/index2.jpg"},
                   {url:"https://i1.mifile.cn/f/i/2018/mi8/summary/index3.jpg"}
               ]//保存轮播图的数组
            }
        },
        // created(){
        //     this.getLunbotu();
        // },
        methods:{
            //获去轮播图数据的方法
            getLunbotu(){
                this.$http.get("请求地址").then(result =>{
                    // console.log(result.body)
                    if(result.body.status === 0 ){
                        //成功
                        this.lunbotuList = result.body.message;
                    }else{
                        //获取失败
                        Toast("加载轮播图失败。。。")
                    }
                })

            }
        },
        components:{
            swiper
        }
    }
</script>

<style scoped lang="scss">

    .mui-grid-view.mui-grid-9{
        border: 0;
        background: #ffffff;

    }
    .mui-grid-view.mui-grid-9 .mui-table-view-cell{
        border: 0;
        img{
            width: 60px;
            height: 60px;
        }
    }

</style>