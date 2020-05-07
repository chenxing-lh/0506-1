<template>
  <div>
    <config-text
      :size="12"
      :weight="false"
      :italic="false"
      :underline="false"
      color="#000"
      vertical="left"
      inner-text="这是文本"
      :url_type="0"
      :page_new_window="false"
      :href_new_window="false"
      class="text_1"
    ></config-text>
    <config-button
      :radius="1"
      :plain="false"
      bg-color="#5D81F9"
      :size="12"
      :weight="false"
      :italic="false"
      :underline="false"
      color="#fff"
      vertical="center"
      inner-text="按钮"
      :url_type="0"
      :page_new_window="false"
      :href_new_window="false"
      class="button_2"
    ></config-button>
    <config-title
      :size="14"
      :weight="false"
      :italic="false"
      :underline="false"
      title-style="title-null"
      color="#000"
      vertical="left"
      inner-text="标题"
      :url_type="0"
      :page_new_window="false"
      :href_new_window="false"
    ></config-title>
    <config-icon
      icon="Icon_exclusiveemotion-line"
      :icon-size="34"
      icon-color="#606266"
      class="icon_5"
    ></config-icon>
    <config-icon
      icon="Icon_exclusiveemotion-line"
      :icon-size="34"
      icon-color="#606266"
      class="icon_9"
    ></config-icon>
    <config-icon
      icon="Icon_exclusiveemotion-line"
      :icon-size="34"
      icon-color="#606266"
      class="icon_8"
    ></config-icon>
    <config-icon
      icon="Icon_exclusiveemotion-line"
      :icon-size="34"
      icon-color="#606266"
      class="icon_7"
    ></config-icon>
    <config-icon
      icon="Icon_exclusiveemotion-line"
      :icon-size="34"
      icon-color="#606266"
      class="icon_6"
    ></config-icon>
    <config-image
      url="https://serverless-platform.oss-cn-shenzhen.aliyuncs.com/temp/02ac5f9401faa498520d87a7c8411e43.png"
      init-url="https://serverless-platform.oss-cn-shenzhen.aliyuncs.com/temp/02ac5f9401faa498520d87a7c8411e43.png"
      :init-height="200"
      :init-width="200"
      :height="200"
      :width="200"
      class="image_4"
    ></config-image>
    <config-image
      url="https://serverless-platform.oss-cn-shenzhen.aliyuncs.com/temp/02ac5f9401faa498520d87a7c8411e43.png"
      init-url="https://serverless-platform.oss-cn-shenzhen.aliyuncs.com/temp/02ac5f9401faa498520d87a7c8411e43.png"
      :init-height="200"
      :init-width="200"
      :height="200"
      :width="200"
      class="image_10"
    ></config-image>
    <el-row :gutter="0" type="flex" justify="center" align="top">
      <el-col :span="12">
        <config-image
          url="https://serverless-platform.oss-cn-shenzhen.aliyuncs.com/temp/02ac5f9401faa498520d87a7c8411e43.png"
          init-url="https://serverless-platform.oss-cn-shenzhen.aliyuncs.com/temp/02ac5f9401faa498520d87a7c8411e43.png"
          :init-height="200"
          :init-width="200"
          :height="200"
          :width="200"
          class="image_12"
        ></config-image>
      </el-col>
      <el-col :span="12">
        <config-image
          url="https://serverless-platform.oss-cn-shenzhen.aliyuncs.com/temp/02ac5f9401faa498520d87a7c8411e43.png"
          init-url="https://serverless-platform.oss-cn-shenzhen.aliyuncs.com/temp/02ac5f9401faa498520d87a7c8411e43.png"
          :init-height="200"
          :init-width="200"
          :height="200"
          :width="200"
          class="image_11"
        ></config-image>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  components: {},
  data: function() {
    return {
      pageName: "基础组件"
    }
  },
  mounted: function() {},
  watch: {},
  methods: {},
  destroyed: function() {}
}
</script>
<style lang="less" scoped="scoped">
.text_1 {
  display: inline-block;
  vertical-align: top;
}
.button_2 {
  display: inline-block;
  vertical-align: top;
}
.icon_5 {
  display: inline-block;
  vertical-align: top;
}
.icon_9 {
  display: inline-block;
  vertical-align: top;
}
.icon_8 {
  display: inline-block;
  vertical-align: top;
}
.icon_7 {
  display: inline-block;
  vertical-align: top;
}
.icon_6 {
  display: inline-block;
  vertical-align: top;
}
.image_4 {
  display: inline-block;
  vertical-align: top;
}
.image_10 {
  display: inline-block;
  vertical-align: top;
}
.image_12 {
  display: inline-block;
  vertical-align: top;
}
.image_11 {
  display: inline-block;
  vertical-align: top;
}
</style>
