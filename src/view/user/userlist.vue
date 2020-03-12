<template>
  <div>
    <el-table :data="tableData"  border>
    <el-table-column prop="date" label="日期" width="180"></el-table-column>
    <el-table-column prop="name" label="姓名" width="180"></el-table-column>
    <el-table-column prop="address" label="地址"></el-table-column>
  </el-table>
  </div>
</template>

<script>
import { getuserList } from '@/api'
import axios from 'axios'
export default {
  created() {
    this.getuserList()
    this.getuserListJson()
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
    },
    getuserListJson() {
      axios.get('/json/user.json').then(
        (data)=>{
          this.tableData = data.data.data
        }
      )
    }
  }
};
</script>

<style lang="scss" scoped>
  .el-table{
    overflow: hidden ;
    // width: 1000px;
    margin: 15px;
  }
</style>
