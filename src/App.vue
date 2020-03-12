<template>
  <div id="app">
    <Header />
    <div class="container">
      <Left />
      <div class="content">
        <el-breadcrumb style="margin: 15px;" separator-class="el-icon-arrow-right">
          <el-breadcrumb-item :to="{path: '/adduser'}">用户管理</el-breadcrumb-item>
          <el-breadcrumb-item :to="{path: '/'}">用户列表</el-breadcrumb-item>
          <el-breadcrumb-item :to="{path: '/detail/3'}">用户详情</el-breadcrumb-item>
        </el-breadcrumb>
          <router-view />
      </div>
    </div>
  </div>
</template>

<script>
import Header from "./components/header";
import Left from "./components/left";
export default {
  name: "App",
  components: {
    Header: Header,
    Left: Left
  },
  data() {
    return {
    }
  }
  
};
</script>

<style lang="scss" scoped>
#app {
  display: flex;
  text-align: center;
  height: 100vh;
  width: 100vw;
  flex-direction: column;
  .container {
    flex: 1;
    overflow-x: hidden;
    display: flex;
    .content {
      flex: 1;
      overflow-x: hidden;
    }
  }
}
</style>
