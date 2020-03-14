<template>
  <div>
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
import Header from "../components/header";
import Left from "../components/left";
export default {
  components: {
    Header: Header,
    Left: Left
  },
  data() {
    return {};
  },
  created() {},
  mounted() {},
  methods: {}
};
</script>

<style scoped lang="scss">
.container {
  height: 100vh;
  flex: 1;
  overflow-x: hidden;
  display: flex;
  .content {
    flex: 1;
    overflow-x: hidden;
  }
}
</style>
