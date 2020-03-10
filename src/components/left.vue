<template>
  <div class="left">
    <el-menu
      default-active="1-4-1"
      class="el-menu-vertical-demo"
      background-color="#545c64"
      router
      text-color="#fff"
      active-text-color="skyblue">
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>用户管理</span>
        </template>
          <el-menu-item index="1-4-1" route="/">用户列表</el-menu-item>
      </el-submenu>
      <el-menu-item index="2" route="/adduser">
        <i class="el-icon-menu"></i>
        <span slot="title">商品管理</span>
      </el-menu-item>
      <el-menu-item index="3" >
        <i class="el-icon-document"></i>
        <span slot="title">订单管理</span>
      </el-menu-item>
      <el-menu-item index="4">
        <i class="el-icon-setting"></i>
        <span slot="title">投诉管理</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.left {
  min-width: 201px;
  background: #545c64;
  /deep/.el-menu {
  border-right: none;
}
}
</style>