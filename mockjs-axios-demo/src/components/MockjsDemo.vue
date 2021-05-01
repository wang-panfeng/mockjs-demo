<template>
  <div>
      <el-row>
          商品背景图片
      </el-row>
      <el-row>
          <img :src="img"  alt="商品背景图片" style="width:200px;height:200px;background-size:contain"/>
      </el-row>
     <el-row>
         {{result}}
     </el-row>
    <el-row>
  
    <el-button type="primary" @click="getUserInfo">获取用户信息</el-button>
    <el-button type="success" @click="getGoodsInfo">获取商品信息</el-button>
    
   
    </el-row>

  </div>
</template>

<script>
import service from '../service';
// import service from '../service';
export default {
  name: 'MockJsDemo',
  data(){
      return{
          result:'',
          img:''
      }
  },
  methods:{
      getUserInfo(){
          service.getUserInfo({}).then(resp=>{
              this.result = resp;
          })
      },
       getGoodsInfo(){
          service.getGoods({}).then(resp=>{
              this.result = resp;
              this.img = this.result.data.responseData[0].img;
          })
      },
  }
}
</script>

<style scoped lang="less">

</style>
