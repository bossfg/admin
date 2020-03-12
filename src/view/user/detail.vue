<template>
  <div>
    个人信息{{id}}
  </div>
</template>

<script>
export default {
props: [
  'id'
]
}
</script>

<style lang="scss" scoped>
div {
  margin: 15px;
}
</style>