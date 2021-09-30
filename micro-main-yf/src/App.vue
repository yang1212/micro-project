<template>
  <div id="rootApp" style="display: flex">
    <nav-menu :menuArr="menuArr"/>
    <div>
      <!-- 主应用渲染区，用于挂载主应用路由触发的组件 -->
      <router-view v-show="$route.name" />
      <!-- 子应用渲染区，用于挂载子应用节点 -->
      <section v-show="!$route.name" id="frame"></section>
    </div>
  </div>
</template>
<script>
import navMenu from '@/components/navMenu'

export default {
  name: 'rootApp',
  components: {
    navMenu
  },
  data() {
    return {
      menuArr: [ 
        {
          key: "Home",
          title: "主页",
          path: "/"
        },
        {
          key: "order",
          title: "订单模块",
          path: "/orderManage"
        }
      ]
    }
  }
}

</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
