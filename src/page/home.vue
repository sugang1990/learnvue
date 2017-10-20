<template>
  <el-row id="phead" class="bg-lgray" justify="space-between">
    <el-col :span="1">
      <div class="grid-content">
        <img src="../assets/logo.png" class="logo">
      </div>
    </el-col>
    <el-col :span="6">
      <div class="grid-content">
          <div class="name">公交票款支付系统</div>
      </div>
      </el-col>
    <el-col :span="1" :offset="15">
      <div class="grid-content">
        <img src="../assets/user.jpg" class="user">
      </div>
    </el-col>
    <el-col :span="1">
      <div class="grid-content">
        <img src="../assets/arr_down.png" class="arr_down">
      </div>
    </el-col>
  </el-row>
</template>

<script>
    export default {
        name: 'home',
        data () {
            return {
                msg: 'Welcome to jn-B'
            }
        }
    }
</script>

<style scoped>
   #phead{
     height: 46px;
     line-height: 46px;
     background-color: #f7f7f7;
     text-align: left;
   }
   #phead .logo{
     width: 42px;
     height: 22px;
     margin-left: 32px;
     border-width: 0px;
    }
   #phead .user{
     width: 33px;
     height: 36px;
     margin-left: 32px;
     border-width: 0px;
   }
   #phead .name{
      font-size: 18px;
      font-weight: bolder;
      text-align: left;
      color: #3E4F67;
      letter-spacing: 4px;
      margin-left: 14px;
    }
   #phead .arr_down{

   }

</style>
