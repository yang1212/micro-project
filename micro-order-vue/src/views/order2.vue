<template>
  <div class="home">
    我是order2
    <el-button @click="goMemberPage">去到member模块</el-button>
  </div>
</template>

<script>

export default {
  name: 'order1',
  components: {
  },
  methods: {
    goMemberPage() {
      this.$router.push({
        path: 'memberManage'
      })
    }
  }
}
</script>
