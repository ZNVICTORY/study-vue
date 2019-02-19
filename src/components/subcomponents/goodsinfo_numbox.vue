<template>
    <div class="mui-numbox" data-numbox-min='1' :data-numbox-max='max'>
        <input class="mui-btn mui-btn-numbox-minus" type="button" value="-" size="small">
        <input id="test" class="mui-input-numbox"  value="1"  @change="countchange" ref="numbox">
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
              // console.log(this.$refs.numbox.value);
              //子组件调用父组件传递过来的方法，$emit()//,参数1:方法名，参数2：该方法的参数，
              this.$emit("getCount",parseInt(this.$refs.numbox.value));
          }
        },
        props:["max"],
        watch:{
            //属性监听
            "max":function(newValue,oldValue){
                //使用 JS API 设置 numbox 的最大值
                mui(".mui-numbox").numbox().setOptions("max",newValue);
            }
        }
    }
</script>

<style scoped>

</style>