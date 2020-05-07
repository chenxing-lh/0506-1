<template>
  <div
    class="template-aside"
  >
    <el-menu
      class="el-menu-vertical-demo"
      @click.native="handleOpen"
      @open="handleOpen"
      @close="handleClose"
      active-text-color="#ffd04b"
      :collapse="isCollapse"
      :router="true"
    >
      <template v-for="(menuItem, index) in menuData">
        <el-submenu
          v-if="menuItem.children && menuItem.children.length"
          :index="menuItem.path"
          :key="index"
        >
          <template slot="title">
            <svg-icon :icon-class="menuItem.icon"></svg-icon>
            <span>{{ menuItem.name }}</span>
          </template>
          <template v-for="(subItem, subIndex) in menuItem.children">
            <el-submenu
              v-if="subItem.children && subItem.children.length > 0"
               :index="subItem.path"
              :key="subIndex"
            >
              <span slot="title">{{ subItem.name }}</span>
              <el-menu-item
                v-for="(thirdItem, third) in subItem.children"
                :index="thirdItem.path"
                :key="third"
                :disabled="thirdItem.path == '0'"
                >{{ thirdItem.name }}</el-menu-item
              >
            </el-submenu>
            <el-menu-item
              v-else
              :index="subItem.path"
              :key="subIndex"
              :disabled="subItem.path == '0'"
              >{{ subItem.name }}</el-menu-item
            >
          </template>
        </el-submenu>
        <el-menu-item v-else :index="menuItem.path" :key="index" :disabled="menuItem.path == '0'">
          <svg-icon :icon-class="menuItem.icon"></svg-icon>
          <span slot="title">{{ menuItem.name }}</span>
        </el-menu-item>
      </template>
        <div class="collapse" v-if="showCollapse" @click="handleFold">
          <svg-icon v-if="!isCollapse" icon-class="icon_menu_unfold"></svg-icon>
          <svg-icon v-else icon-class="icon_menu_fold"></svg-icon>
        </div>
    </el-menu>
  </div>
</template>

<script>
import apiData from '@/mock.json'  
export default {
  name: 'template-menu',
  data() {
    return {
      isCollapse: false,
      showCollapse: apiData.menuCollapse
    };
  },
  props: {
    menuData: {
      type: Array,
      default: []
    }
  },
  computed: {
  },
  created() {
  },
  watch: {

  },
  methods: {

    handleClose(index) {
      console.log(index);
    },
    handleOpen(){

    },
    handleFold() {
      this.isCollapse = !this.isCollapse;
    },
  },
};
</script>

<style lang="less">
.el-submenu__title,
.el-menu-item {
  color: #2d303b !important;
  height: 48px;
  line-height: 48px;
}
.el-menu-vertical-demo{
    height: 100%;
}
.template-aside {
  position: relative;
  margin: 1px auto 0;
  background-color: #fff;
  border-right: solid 1px #e6e6e6;
  &.isFocus {
    z-index: 1;
    outline: 1px dashed #5d81f9;
  }
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 186px;
  }
  .el-menu--collapse {
    width: 64px;
    text-align: center;
  }
  .el-menu {
    position: static;
    overflow-y: auto;
    border-right: none;
    &.hasFold {
      height: calc(100% - 48px);
    }
    .el-menu-item {
      min-width: auto;
    }
  }
  .collapse {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 48px;
    padding: 0 !important;
    line-height: 48px;
    text-align: center;
    font-size: 20px;
    background-color: #fff;
    .svg-icon {
      cursor: pointer;
          width: 12px;
    height: 12px;
    }
  }
}
</style>
