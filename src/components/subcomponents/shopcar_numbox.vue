<template>
    <div class="mui-numbox" data-numbox-min='1' >
        <input class="mui-btn mui-btn-numbox-minus" type="button" value="-" size="small">
        <input id="test" class="mui-input-numbox"  :value="initCount"  @change="countchange" ref="numbox">
        <input class="mui-btn mui-btn-numbox-plus" type="button" value="+" size="small">
    </div>
</template>

<script>
    import mui from '../../lib/mui/js/mui.min.js'
    export default {
        name: "goodsinfo_numbox",
        mounted(){
            //初始化数字选择框组件
            mui(".mui-numbox").numbox();
        },

        methods:{
            countchange(){
                //每当文本框的值改变时，获取到他的值
                console.log(this.$refs.numbox.value);
                console.log(this.goodsid);
                this.$store.commit("updateGoodsinfo",{id:this.goodsid,
                count:this.$refs.numbox.value})
            }
        },
        props:["initCount","goodsid"]
    }
</script>

<style scoped lang="scss">
.mui-numbox{
    height: 27px;
}
</style>