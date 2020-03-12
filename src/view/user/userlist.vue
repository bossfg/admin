<template>
  <el-table :data="tableData" border>
    <el-table-column prop="date" label="日期" width="180"></el-table-column>
    <el-table-column prop="name" label="姓名" width="180"></el-table-column>
    <el-table-column prop="address" label="地址"></el-table-column>
  </el-table>
</template>

<script>
import { getuserList } from '@/api'
export default {
  created() {
    this.getuserList()
  },
  data() {
    return {
      tableData: []
    };
  },
  methods: {
    async getuserList() {
      let res = await getuserList()
      this.tableData = res.data.tableData
    }
  }
};
</script>

<style>
.el-table {
  margin: 15px;
}
</style>