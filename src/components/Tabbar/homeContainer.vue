<template>
    <div>
        <mt-swipe :auto="4000">
            <mt-swipe-item>1</mt-swipe-item>
            <mt-swipe-item>2</mt-swipe-item>
            <mt-swipe-item>3</mt-swipe-item>
            <!--<mt-swipe-item v-for="item in lunbotuList" v-bind:key="item.url">-->
                <!--<img v-bind:src="item.img" alt="">-->
            <!--</mt-swipe-item>-->
        </mt-swipe>


        <ul class="mui-table-view mui-grid-view mui-grid-9">
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                <span class="mui-icon mui-icon-home"></span>
                <div class="mui-media-body">新闻资讯</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                <span class="mui-icon mui-icon-email"><span class="mui-badge">5</span></span>
                <div class="mui-media-body">图片分享</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                <span class="mui-icon mui-icon-chatbubble"></span>
                <div class="mui-media-body">商品购买</div></a></li>
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
    export default {
        name: "homeContainer",
        data(){
            return {
               lunbotuList:[]//保存轮播图的数组
            }
        },
        created(){
            this.getLunbotu();
        },
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
        }
    }
</script>

<style scoped lang="scss">
    .mint-swipe{
        height: 180px;
    }
    .mint-swipe-item{
        &:nth-child(1){
            background: red;
         }
        &:nth-child(2){
            background: blue;
        }
        &:nth-child(3){
            background: pink;
        }
        img{
            width: 100%;
            height: 100%;
        }
    }
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