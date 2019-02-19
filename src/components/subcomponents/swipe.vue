<template>
    <!--轮播图组件-->
    <div>
        <mt-swipe :auto="4000">
            <!--将来谁用此组件，谁为我们传递lunbotuList-->
            <!--此时，lunbotuList应该是父组件向子组件传值来设置，子组件应使用props来接收-->
            <mt-swipe-item v-for="item in lunbotuList" v-bind:key="item.url">
            <img v-bind:src="item.url" alt="" :class="{full:isfull}">
            </mt-swipe-item>
        </mt-swipe>
    </div>
</template>

<script>
    export default {
        name: "swipe",
        props:["lunbotuList","isfull"]
    }
</script>

<style scoped lang="scss">
    .mint-swipe{
        height: 200px;
    }
    .mint-swipe-item{
        text-align: center;
        img{
            /*width: 100%;*/
            height: 100%;
        }
        .full{
            width:100%;
        }
    }
</style>