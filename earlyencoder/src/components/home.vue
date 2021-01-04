<template>
    <el-container>
      <!-- 头部区域-->
      <el-header>
        <div id="headerLogo">
          <img src=""/>
          <span id="headerLogoSpan">整机编码系统</span>
        </div>
        <div id="headerDate" style="color: #fff;">时间</div>
      <el-button id="btnLogOut" type="info" @click="logOut">退出</el-button>
      </el-header>
      <el-container>
        <!--左侧边栏 -->
        <el-aside width="200px">
          <el-menu default-active="1-4-1"
          class="el-menu-vertical-demo"
          background-color="#545c64"
          text-color="#fff"
          router>
            <el-submenu index="1">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span slot="title">用户管理</span>
              </template>
            </el-submenu>
            <el-submenu index="2">
              <template slot="title">
                <i class="el-icon-menu"></i>
                <span slot="title">权限管理</span>
              </template>
            </el-submenu>
            <el-submenu index="3">
              <template slot="title">
                <i class="el-icon-document"></i>
                <span slot="title">编码管理</span>
              </template>
              <!-- <el-submenu index="3-1">
                <span slot="title">选项1</span> -->
                <el-menu-item index="/productCode">编码生成</el-menu-item>
                <el-menu-item index="/productCode">编码查询</el-menu-item>
              <!-- </el-submenu> -->
            </el-submenu>
            <!-- <el-submenu index="4">
            <template slot="title">
              <i class="el-icon-setting"></i>
              <span slot="title">编码查询</span>
            </template>
            </el-submenu> -->
          </el-menu>
        </el-aside>
        <!-- 右侧边栏-->
        <el-main>

          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
</template>

<script>
  export default{
    name:'home',
    methods:{
      logOut(){
        window.sessionStorage.clear();
        this.$router.push("/login");
      }
    }
  }
</script>

<style scoped>
  /**
   * 主页布局
   */
  .el-container{
    height: 100%;
  }
  /**
   * 头部区域
   */
.el-header{
  background-color: #303133;
  display: flex;
  justify-content: space-between;
  padding-left: 0;
  align-items: center;
  color: #fff;
}
#headerLogo{
  display: flex;
  align-items: center;
}
#headerLogoSpan{
  margin-left: 15px;
}

/**
 * 左侧边栏
 */
.el-aside{
  background-color: #545c64;
}
/**
 * 右侧主功能区
 */
.el-main{
  background-color: #DFE4ED;
}
</style>
