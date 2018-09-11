<template>
  <el-breadcrumb class="app-breadcrumb" separator="/">
    <transition-group name="breadcrumb">
      <el-breadcrumb-item  v-for="(item,index)  in levelList"  :key="item.path" >
        <span  class="no-redirect">{{item.name}}</span>
        <!--<router-link v-else :to="item.redirect||item.path">{{item.meta.title}}</router-link>-->
      </el-breadcrumb-item>
    </transition-group>
  </el-breadcrumb>
</template>

<script>

export default {
    name:"breadcrumv",
  created() {
    this.getBreadcrumb()
  },
  data() {
    return {
      levelList: null
    }
  },
  watch: {
    $route() {
      this.getBreadcrumb()
    }
  },
  methods: {

    getBreadcrumb() {
      let matched = this.$route.matched.filter(item => item.name)
      this.levelList = matched
//        console.log(this.levelList)
    }
  }
}
</script>


