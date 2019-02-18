<template>
    <div class="newsinfo-container">
        <h3 class="title">新闻详情 --- {{ id }}</h3>
        <p class="subtitle">
            <span>发表时间</span>
            <span>点击:0次</span>
        </p>

        <hr>
        <div class="content"></div>

        <comment-box :id="this.id"></comment-box>
    </div>
</template>

<script>
    //导入评论子组件
 import comment from '../subcomponents/comment.vue'
    export default {
        name: "newinfo",
        data(){
            return {
                id:this.$route.params.id
            }
        },
        methods:{},
        components:{
            //用来注册子组件
            'comment-box':comment
        }
    }
</script>

<style scoped lang="scss">
  .newsinfo-container{
      padding: 0 4px;
      .title{
          font-size: 16px;
          margin: 15px 0;
          text-align: center;
          color: red;
      }
      .subtitle{
          font-size: 13px;
          color: #226aff;
          display: flex;
          justify-content: space-between;
      }
      .content{}
  }
</style>