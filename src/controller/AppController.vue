<template>
  <el-container>
    <el-header class="erp-header-layout">
      <el-row type="flex" class="box-align">
  <el-col class="erp-header-logo">
    VUEADMIN
    </el-col>
  <el-col :span="10">
    <div class="tools" @click.prevent="collapse">
      <span class="erp-menu-switch">
        <i class="fa fa-align-justify"></i>
      </span>
    </div>
  </el-col>
  <el-col :span="4" class="erp-header-right-tools">
    <el-dropdown trigger="click" size="medium" :hide-on-click="true" style="color:#fff;">
  <span class="el-dropdown-link">
    超级管理员<i class="el-icon-arrow-down el-icon--right"></i>
  </span>
  <el-dropdown-menu slot="dropdown">
    <el-dropdown-item>我的消息</el-dropdown-item>
    <el-dropdown-item>设置</el-dropdown-item>
    <el-dropdown-item divided>退出</el-dropdown-item>
  </el-dropdown-menu>
</el-dropdown>
  </el-col>
</el-row>
    </el-header>
    <el-container class="erp-container-main">
      <aside>
        <el-menu 
        :class="isCollapse?'':'erp-aside-layout'"
          :default-active="menuActive"
          :collapse="isCollapse"
          @select="handleSelect"
          background-color="#2A363B"
          text-color="#fff"
          active-text-color="#ffd04b" 
          :collapse-transition="false"
          unique-opened>
              <template v-for="(item,index) in $router.options.routes">
                        <!--处理多级菜单开始-->
                        <el-submenu :index="index+''" v-if="item.leaf">
                            <template slot="title">
                            <i :class="item.iconCls"></i>
                            <span slot="title"> {{item.name}}</span>
                            
              </template>

          <template v-for="(child,cIndex) in item.children" v-if="!child.hidden">
            <!--三级菜单开始-->
            <el-submenu :index="index+'-'+cIndex+''" v-if="child.leaf">
              <template slot="title">{{child.name}}
          </template>
                          <el-menu-item v-for="child1 in child.children" :index="item.path+'/'+child.path+'/'+child1.path" :key="child1.path"
                                        v-if="!child1.hidden">
                            ● {{child1.name}}
                          </el-menu-item>
                         <!--三级菜单结束-->
                        </el-submenu>
                        <!--二级菜单名称开始-->
                        <el-menu-item v-if="!child.leaf" :index="item.path+'/'+child.path">
                          {{child.name}}
                        </el-menu-item>
                        <!--二级菜单结束-->
                    </template>
               </el-submenu>
               <!--处理多级菜单结束-->

               <!--处理一级菜单开始-->
                <el-menu-item v-if="!item.leaf && item.children.length > 0" :index="item.children[0].path">
                  <i :class="item.children[0].iconCls"></i>
                  <span slot="title">{{item.children[0].name}}</span>
                </el-menu-item>
               <!--处理一级菜单结束-->
            </template>
          </el-menu>
      </aside>
          <el-container direction="vertical">
              <div><breadcrumv class="erp-breadcrumv-layout"></breadcrumv></div>
              <el-main class="erp-content-layout">
                <transition name="component-fade" mode="out-in" >
                  <router-view class="erp-layout-min-width"></router-view>
                </transition>
            </el-main>
          </el-container>
        </el-container>
  </el-container>
</template>

<script>
  import breadcrumv from '@components/breadcrumb/breadcrumv';
  export default {
    data() {
      return {
        isCollapse: false,
        menuActive: this.$route.path
      }
    },
    methods: {
      handleSelect(index, indexPath) {
        this.$router.push({
          path: index
        })
      },
      //折叠导航栏
			collapse:function(){
				this.isCollapse=!this.isCollapse;
			},
    },
    components: {
      breadcrumv
    },
    mounted() {
      //console.log(this.$route)
    }
  }
</script>
<style>
  
      .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }
</style>