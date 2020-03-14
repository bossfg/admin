<template>
  <div class="login">
    <el-form
      :model="ruleForm"
      status-icon
      :rules="rules"
      ref="ruleForm"
      label-position="left"
      label-width="100px"
      class="demo-ruleForm"
      style=" height: 300px;background: #fff; box-sizing: border-box;padding: 0px 50px 50px 30px "
    >
      <h1 style="background: #fff;padding-top: 20px;padding-bottom:20px">人员管理平台</h1>
      <el-form-item label="用户名" prop="username">
        <el-input type="username" v-model="ruleForm.username" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input type="password" v-model="ruleForm.password" autocomplete="off"></el-input>
      </el-form-item>
      <Button
        type="primary"
        style="padding: 0px 100px;font-size: 20px;word-spacing: 20px;height: 40px"
        @click="submitForm('ruleForm')"
      >登&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;录</Button>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      ruleForm: {
        username: "",
        passsword: ""
      },
      rules: {
        username: [
          { required: true, message: "请输入用户名称", trigger: "blur" }
        ],
        password: [{ required: true, message: "请输入密码", trigger: "blur" }]
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.$message({
            message: "登录成功",
            type: "success",
            duration: 1500,
            onClose: () => {
              this.$Loading.finish();
              sessionStorage.setItem('login',this.ruleForm.username)
              this.$router.push("/");
            }
          });
        } else {
          this.$Loading.error();
          this.$message({
            message: "用户名密码均不能为空",
            type: "error",
            duration: 1500,
          })
          return false;
        }
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.login {
  height: 100vh;
  background: skyblue;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>