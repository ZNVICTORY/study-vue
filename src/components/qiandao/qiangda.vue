<template>
   <div class="qiangda-container">
       <div class="nav-content">
                 <p>
                     <span>当前位置: </span>
                     <span>活动列表</span>
                     <span>></span>
                     <span>创建抢答器</span>
                  </p>
             </div>
         <div class="main-content">
                 <label for=""></label>
                <textarea name="" id="" cols="30" rows="10"  placeholder="请输入抢答问题" required v-model="data1"></textarea>
          
                  <div id="submit">
                      <button v-show="flag" type="submit" @click="getPost">发布抢答</button>
                    
                      <button v-show="cancel_flag" id="cancel" type="button" >结束抢答</button>
                  </div>
                  <div id="load" v-show="panel_flag">
                      <mt-spinner   type="fading-circle" :size="100"  color="rgb(100, 100, 100)"></mt-spinner>
                      <span id="load-font">等待抢答</span>
                  </div>
                  <!-- <div id="panel" v-show="false" >
                      <span>{{ name }}</span><span>同学</span>
                     
                  </div> -->
                  <!-- <div id="btn-panel" v-show="true" >
                      <circle_btn></circle_btn>
                  </div> -->
                 <!-- <circle_btn></circle_btn> -->
             
             <p></p>
         </div>
   </div>
</template>

<script type="text/javascript">
import circle_btn from './button.vue';
export default {
   name: '',
   data() {
       return {
           id:this.$route.params.id,
           data1:"",
           flag:true,
           name:"小月",
           panel_flag:false,
           cancel_flag:false     
       }
   },
   created(){

   },
   methods:{
     
        getPost(){
          
               setTimeout(()=>{
                   this.flag = !this.flag;
                   this.panel_flag = !this.panel_flag;
                    this.cancel_flag = !this.cancel_flag;
               },0);
                setTimeout(()=>{
                       this.panel_flag = !this.panel_flag;
                     
                   },3000)
           
            
     
        //   this.$http.post("http://www.zhkt.fun/responder/add?c_id=396599",{emulateJSON:true}).then(result=>{
            //    console.log(result.body);
            //  if(result.body.status!=0){
            //      this.flag = !this.flag;
            //      if(result.body.status==0){
            //          this.flag = !this.flag;
            //          this.name = result.body.message;
            //          this.panel_flag = !this.panel_flag;
            
            //      }
            //   }
        //   })
        
        },
     
   },

  components: {
      circle_btn
  }
}
</script>

<style scoped >
.qiangda-container{
    background-color: #F4F4F4;
}
      .header{
          display: block;
          height: 218px;
      }
      .nav-content p{
          background-color: #F4F4F4;
          height: 42px;
          padding-top: 15px;
          font-size: 14px;
          color: black;
          width: 985px;
          margin: 0 auto;
      }
      .main-content{
          background-color:#ffffff;
          display: block;
          width: 985px; 
          border: 1px;
          margin: 0 auto;
          padding-top: 30px;
          padding-left: 18px;
          padding-right: 18px;
          box-shadow:0 0 2px 2px #f4f4f4
     }
     .main-content p{
           font-size: 14px;
           color: black;
     }
     .main-content textarea{
         margin-bottom: 20px;   
     }
     textarea,input{
         font-size: 14px;
     }
     .button-groups{
         display: flex;
         justify-content: center
     }
     .main-content button{
         font-size: 15px;
         padding: 0 40px;   
         height: 40px;
         border: 1px solid #00bbdd;
         text-align: center;
         cursor: pointer;
         border-radius: 4px;
         background: none;
         /* margin-right: 20px; */
      
     }
     #submit{
         position: absolute;
         left: 50%;
         top: 50%;
         transform: translateX(-50px) translateY(-50px);
         transition:all ease .5s;
         z-index: 99;
     }
     #cancel{
          transform: translateY(130px) translateX(-10px);
            transition:all ease .5s;
     }
     #load{
         position: absolute;
         left: 50%;
         top: 50%;
         width: 100px;
         height: 100px;
        transform: translateX(-50px) translateY(-50px);
          transition:all ease .5s;
     }
     #load-font{
         position:absolute;
         color:rgb(210, 180, 140);
         font-weight: bold;
         font-size: 15px;
         left: 20px;
         top: 35px;
     }
     #panel{
         width: 200px;
         height: 100px;
         background-color:#000;
         opacity: 0.75;
         color: #ffffff;
         text-align: center;
         position: absolute;
         padding-top: 38px;
         line-height: 20px;
         border-radius: 4px;
         box-shadow: 0px 0px  3px 3px #aaa;
         position: absolute;
         left: 50%;
         top: 50%;
         font-size: 20px;
         transform: translateX(-77px) translateY(-80px);    
     }
     #btn-panel{
       
         position: absolute;
         left: 50%;
         top: 50%;
         transform: translateX(-77px) translateY(-80px);    
     }
    
</style>
