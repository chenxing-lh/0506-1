<template>
  <div class="template-wrapper" v-loading="loading">
    <div class="template-header">
      <div class="template-logo" @click="onClickLogo(logo)">
        <span v-if="logo.type === 2">{{ logo.text }}</span>
        <img v-else :src="logo.image" alt />
      </div>
      <div class="adminster">
        <el-avatar :size="size" :src="currentUser.avatar"></el-avatar>
        <el-dropdown>
          <div class="avatar-info">
            {{ currentUser.name }}
            <i class="icon iconfont icon_arrow_down"></i>
          </div>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item v-for="(item, index) in users" :key="index">
              <div @click="onClickAvatar(item)">{{ item.name }}</div>
            </el-dropdown-item>
            <el-dropdown-item>
              <div @click="logout">退出登录</div>
            </el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </div>
    <el-container class="template-body">
      <sl-menu :menuData="menuData"></sl-menu>
      <el-main class="drag-area">
        <div class="preview-container">
          <nuxt v-if="!loading && isHavePagePermission" />
        </div>
      </el-main>
    </el-container>
  </div>
</template>
<script>
import Menu from "@/components/menu";
import apiData from "@/mock.json";
import utils from "@/utils";
export default {
  components: {
    SlMenu: Menu,
  },
  data() {
    return {
      logo: apiData.logo,
      size: "medium",
      previewShow: false,
      users: apiData.users,
      menuData: [],
      tmpMenus: [],
      roles: [],
      visibleRoutes: [],
      loading: true,
      isHavePagePermission: true,
    };
  },
  computed: {
    currentUser() {
      return this.users.find((user) => user.selected) || this.users[0];
    },
  },
  mounted() {
    if (this.$store.state._token) {
      this.$store.dispatch("getRoles").then((res) => {
        this.roles = res.map((role) => role.name);
        this.menuData = this.getMenus(apiData.menus, []);
        this.$store.commit("setVisibleRoutes", this.visibleRoutes);
        if (this.visibleRoutes.length <= 0) {
          this.isHavePagePermission = false;
        }
        this.loading = false;
      });
    }
  },
  methods: {
    getMenus(menus, targetMenus) {
      for (const menu of menus) {
        if (
          !menu.roles ||
          !menu.roles.length ||
          this._.intersection(menu.roles, this.roles).length
        ) {
          let children = [];
          if (menu.children.length) {
            children = this.getMenus(menu.children, []);
          }
          targetMenus.push({ ...menu, children });
          this.visibleRoutes.push(menu.path);
          return targetMenus;
        }
      }
      return [];
    },
    onClickLogo(logo) {
      utils.routeTo.call(this, logo);
    },
    onClickAvatar(avatar) {
      utils.routeTo.call(this, avatar);
    },
    logout() {
      this.$store.commit("logout");
    },
  },
};
</script>
<style lang="less" scoped="scoped">
.template-wrapper {
  height: 100%;

  .template-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 60px;
    background: rgba(45, 48, 59, 1);
    color: #fff;

    .template-logo {
      line-height: 100%;
      cursor: pointer;
      font-size: 0;
      width: 186px;
      height: 60px;

      &.isFocus {
        z-index: 1;
        outline: 1px dashed #5d81f9;
      }

      span {
        margin-left: 20px;
        font-size: 30px;
        line-height: 60px;
        display: inline-block;
        height: 60px;
      }

      img {
        width: 100%;
        height: 100%;
      }
    }

    .adminster {
      display: flex;
      align-items: center;
      cursor: pointer;
      height: 100%;
      padding-right: 12px;

      .icon_arrow_down {
        display: inline-block;
        transform: rotate(0deg);
        transition: all 0.5s;
      }

      .icon_arrow_down:hover {
        transform: rotate(180deg);
      }

      &.isFocus {
        z-index: 1;
        outline: 1px dashed #5d81f9;
      }

      .avatar-info {
        padding-left: 5px;
        height: 36px;
        line-height: 36px;
        color: #fff;
        outline: none;

        i {
          margin-left: 20px;
        }
      }

      .el-avatar--medium {
        width: 28px;
        height: 28px;
      }
    }
  }

  .template-body {
    /* flex: 1; */

    .drag-area {
      overflow: auto;
      height: calc(100vh - 50px);
    }
  }
}

.el-dropdown-menu__item {
  a {
    color: #2d303b;
  }
}

.drag-area {
  overflow: auto;
  padding: 0;
}

.preview-container {
  box-sizing: border-box;
  height: 100%;
  background: #fff;
  overflow-y: auto;
  padding: 20px 1px 0;
}
</style>
