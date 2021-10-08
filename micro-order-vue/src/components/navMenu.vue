<template>
  <div>
    <el-row class="tac">
      <el-menu
          @open="handleOpen"
          @close="handleClose">
          <el-menu-item v-for="(item,index) in menuArr" :key="index" index="1">
            <router-link :to="{path: item.path }">
              <i class="el-icon-menu"></i>
              <span>{{item.title}}</span>
            </router-link>
          </el-menu-item>
      </el-menu>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'navMenu',
  props: {
  },
  data() {
    return {
      menuArr: [
        {
          title: "nav1",
          path: "/order1"
        },
        {
          title: "nav2",
          path: "/order2"
        }
      ]
    }
  },
  methods: {
    handleOpen() {},
    handleClose() {}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
