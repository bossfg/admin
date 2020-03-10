<template>
  <div id="app">
    <Header />
    <div class="container">
      <Left />
      <div class="content">
        <el-breadcrumb style="margin: 15px;" separator-class="el-icon-arrow-right">
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item>活动管理</el-breadcrumb-item>
          <el-breadcrumb-item>活动列表</el-breadcrumb-item>
          <el-breadcrumb-item>活动详情</el-breadcrumb-item>
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
  }
};
</script>

<style lang="scss" scoped>
#app {
  display: flex;
  height: 100vh;
  flex-direction: column;
  .container {
    flex: 1;
    display: flex;
    .content {
      flex: 1;
    }
  }
}
</style>
