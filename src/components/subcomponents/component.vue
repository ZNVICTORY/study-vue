<template>
    <div class="cmt-container">
        <h3>发表评论</h3>
        <textarea placeholder="请输入" maxlength="120" v-model="msg"></textarea>
        <mt-button type="primary" size="large" @click="postComment">发表评论</mt-button>

        <div class="cmt-list">
            <div class="cmt-item" v-model="commentlist" v-for="(item,i) in commentlist" :key="i">
                <div class="cmt-title">
                    第一楼&nbsp;&nbsp;用户:{{ item.user_name}}&nbsp;&nbsp;发表时间:{{ item.add_time | dataformat}}
                </div>
                <div class="cmt-body">
                    {{ item.content }}
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
                commentlist:[
                    {user_name: "匿名用户", add_time: Date.now(), content:"哈哈哈哈哈哈"},
                    {user_name: "匿名用户", add_time: Date.now(), content:"哈哈哈哈哈哈"},
                    {user_name: "匿名用户", add_time: Date.now(), content:"哈哈哈哈哈哈"},
                    {user_name: "匿名用户", add_time: Date.now(), content:"哈哈哈哈哈哈"},
                    {user_name: "匿名用户", add_time: Date.now(), content:"哈哈哈哈哈哈"}
                ],
                msg:""//评论输入的内容
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
            },
            postComment(){
                //trim()方法清除空格
                //post 参数1.url:请求路径，参数2.提交的数据对象，参数3.提交的数据格式
                if (this.msg.trim().length === 0){
                    return Toast("评论为空")
                }
                this.$http.post('url',{content:this.msg.trim()}).then(result=>{
                    if (result.body.status === 0 ){
                        var cmt = {user_name:"匿名用户",add_time:Date.now(),content:this.msg.trim()};
                        this.commentlist.unshift(cmt);
                        this.msg = "";
                    }
                });
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