<template>
    <div class="nav">
        <el-menu
        mode="horizontal"
        :ellipsis="false"
        @select="handleSelect"
      >
        <el-menu-item index="0" style="margin-right: auto;justify-content: left;">
          <img
            width="164px"
            height="80px"
            style="float:left;margin-left: 50px;"
            src="../../static/img/LOGO1.png"
            alt="Element logo"
          />
        </el-menu-item>
        <el-menu-item index="1"><span>首页</span></el-menu-item>
        <el-menu-item index="2"><span>价格方案</span></el-menu-item>
        <el-menu-item index="3"><span>个人中心</span></el-menu-item>
      </el-menu>
    </div>
</template>
<script>
export default {
    name :'Nav',
    methods: {
        handleSelect(key) {
            console.log('--',key);
            switch(key){
                case "1":
                    this.$router.push("/Index");
                    break;
                case "2":
                    this.$router.push("/Scheme");
                    break;
                case "3":
                this.$router.push("/Login");
                break;
            }
        }
    },
}
</script>
<style scoped>
     .el-submenu.is-active div.el-submenu__title{
        outline: 0 !important;
        border-bottom: none !important;
    }
    .el-menu--horizontal.el-menu{
        border-bottom: none !important;
    }
    .el-menu--horizontal>.el-menu-item {
        border-bottom: none !important;
    }
    .el-menu {
        width: 100%;
        height: 80px;
        box-shadow: 0px 2px 6px 0px rgba(238,238,238,1);
        justify-content: flex-end;
    }
    .el-menu-item {
        padding: 0px !important;
        width: 15%;
        height: 80px;
        float: right;
    }
    .el-menu-item.is-active {
        outline: 0 !important;
        background: none !important;
        border-bottom: none !important;
        color: rgba(0,184,144,1) !important;
    }
    .el-menu-item:hover{
        outline: 0 !important;
        color: rgba(16,16,16,1) !important; 
        background: none !important;
    }
    .el-menu--horizontal>.el-menu-item.is-active span{
        color: rgba(0,184,144,1) !important;
        border-bottom: 2px solid rgba(0,184,144,1) !important;
    }
</style>