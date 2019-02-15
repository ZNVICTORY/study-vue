<template>
    <div class="cmt-container">
        <h3>发表评论</h3>
        <textarea placeholder="请输入" maxlength="120"></textarea>
        <mt-button type="primary" size="large">发表评论</mt-button>

        <div class="cmt-list">
            <div class="cmt-item">
                <div class="cmt-title">
                    第一楼&nbsp;&nbsp;用户:匿名用户&nbsp;&nbsp;发表时间:2012-12-12 12:12:21
                </div>
                <div class="cmt-body">
                    哈哈哈哈哈哈哈哈
                </div>
            </div>
            <div class="cmt-item">
                <div class="cmt-title">
                    第一楼&nbsp;&nbsp;用户:匿名用户&nbsp;&nbsp;发表时间:2012-12-12 12:12:21
                </div>
                <div class="cmt-body">
                    哈哈哈哈哈哈哈哈
                </div>
            </div>
            <div class="cmt-item">
                <div class="cmt-title">
                    第一楼&nbsp;&nbsp;用户:匿名用户&nbsp;&nbsp;发表时间:2012-12-12 12:12:21
                </div>
                <div class="cmt-body">
                    哈哈哈哈哈哈哈哈
                </div>
            </div>
            <div class="cmt-item">
                <div class="cmt-title">
                    第一楼&nbsp;&nbsp;用户:匿名用户&nbsp;&nbsp;发表时间:2012-12-12 12:12:21
                </div>
                <div class="cmt-body">
                    哈哈哈哈哈哈哈哈
                </div>
            </div>
        </div>

        <mt-button type="danger" size="large" plain @click="getMore()">加载更多</mt-button>
    </div>
</template>

<script>
    import { Toast } from 'mint-ui'
     export default {
        name: "component",
        data(){
            return {
                pageIndex:1,
                commentlist:[]
            }
        },
         created(){
           this.getComments();
         },
        methods:{
            getComments(){//获取所有评论
                this.$http.get("请求路径"+this.id+"?pageIndex="+this.pageIndex).then(result =>{
                    if(result.body.status ===0){
                        // this.commentlist = result.body.message;
                        this.commentlist = this.commentlist.concat(result.body.message);
                    }

                    else{

                        Toast("获取失败");
                    }
                })
            },
            getMore(){
                this.pageIndex++;
                this.getComments();
            }
        },
         props:["id"]
    }
</script>

<style scoped lang="scss">
  .cmt-container{
      /*padding: 0 4px;*/
      h3{
          font-size: 18px;
      }
      textarea{
          font-size: 14px;
          height: 85px;
          margin: 0;
      }
      .cmt-list{
          margin: 10px 0;
          .cmt-item{
              font-size: 13px;
              .cmt-title{
                  background-color: #ccc;
                  line-height: 30px;
              }
              .cmt-body{
                  line-height: 35px;
                  text-indent: 2em;
              }
          }
      }
  }
</style>