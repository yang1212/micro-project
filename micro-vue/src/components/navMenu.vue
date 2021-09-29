<template>
  <div style="width: 150px">
    <el-row class="tac">
      <el-menu
          default-active="2"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose">
          <el-menu-item index="2" v-for="(item,index) in menuArr" :key="index">
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
    menuArr: []
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
