<template>
  <div id="app">
    <Header />
    <div class="container">
      <Left />
      <div class="content">
        <el-breadcrumb style="margin: 15px;" separator-class="el-icon-arrow-right">
          <el-breadcrumb-item :to="{path: '/adduser'}">用户管理</el-breadcrumb-item>
          <el-breadcrumb-item :to="{path: '/'}">用户列表</el-breadcrumb-item>
          <el-breadcrumb-item >用户添加</el-breadcrumb-item>
        </el-breadcrumb>
        <div style="width: 1000px">
          <router-view />
        </div>
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
  }
};
</script>

<style lang="scss" scoped>
#app {
  display: flex;
  height: 100vh;
  width: 100vw;
  flex-direction: column;
  .container {
    flex: 1;
    display: flex;
  }
}
</style>
