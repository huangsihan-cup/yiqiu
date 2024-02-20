<template>
  <div class="home" ref="home">
    <el-container>
      <el-header>
        <Nav></Nav>
      </el-header>
        <router-view></router-view>
    </el-container>
  </div>
</template>

<script>
import Nav from "../components/header/Nav"
import Index from "../components/Index"
export default {
  name: 'HomeView',
  components: {
    Nav,
    Index
  },
  mounted() {
        let h = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
        this.$refs.home.style.minHeight = h+"px";
    },
}
</script>
<style>
  @import "../static/css/common.css";
    .home{
        min-height:100%;
    }
    .el-header{
        padding:0px !important;
        height:auto !important;
    }
    .el-main{
      margin-top: 10px;
      padding: 0px !important;
    }
</style>
