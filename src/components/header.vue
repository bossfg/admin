<template>
  <div class="header">
    <div class="left-text">后台管理系统</div>
    <el-menu
      :default-active="activeIndex2"
      class="el-menu-demo"
      router
      mode="horizontal"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="skyblue"
    >
      <el-submenu index="2">
        <template slot="title">我的工作台</template>
        <el-menu-item index="2-1">选项1</el-menu-item>
        <el-menu-item index="2-2">选项2</el-menu-item>
        <el-menu-item index="2-3" route="/login" @click="exit">退出</el-menu-item>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
import "../assets/css/common.css";
export default {
  data() {
    return {
      activeIndex2: "2"
    };
  },
  methods: {
    exit() {
      sessionStorage.removeItem('login')
    }
  }
};
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background: #545c64;
  .left-text {
    font-size: 20px;
    padding: 15px 20px;
  }
  .el-menu {
    border-bottom: none;
  }
}
</style>
