<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
  
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
  
}
</style>
