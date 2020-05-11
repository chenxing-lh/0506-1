<template>
  <div>
    <el-row :gutter="0" type="flex" justify="center" align="top" v-roles="''">
      <el-col :span="12" v-roles="''">
        <config-icon
          icon="Icon_exclusiveemotion-line"
          :icon-size="34"
          icon-color="#606266"
          v-roles="''"
          class="icon_5"
        ></config-icon>
      </el-col>
      <el-col :span="12" v-roles="''">
        <config-icon
          icon="Icon_exclusiveemotion-line"
          :icon-size="34"
          icon-color="#606266"
          v-roles="''"
          class="icon_5"
        ></config-icon>
      </el-col>
    </el-row>
    <config-group
      group-name="分组名称"
      :is-show-name="true"
      :is-collapsible="true"
      :is-show-icon="true"
      icon-color="#5D81F9"
      :is-show-divider="true"
      v-roles="''"
    >
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
        v-roles="''"
        class="text_4"
      ></config-text>
    </config-group>
    <form-input
      type="text"
      placeholder="请输入"
      label="单行文本"
      :is-label-visible="true"
      :status="0"
      :min="2"
      :max="30"
      :require="false"
      :is-show-min="false"
      :is-show-max="false"
      :is-show-customer="false"
      :rules="formInputRules"
      v-roles="''"
    ></form-input>
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
      v-roles="''"
      class="button_4"
    ></config-button>
  </div>
</template>
<script>
export default {
  components: {},
  data: function() {
    return {
      pageName: "首页",
      formInputRules: [
        {
          required: false,
          message: "",
          trigger: []
        }
      ]
    }
  },
  mounted: function() {},
  watch: {},
  methods: {},
  destroyed: function() {}
}
</script>
<style lang="less" scoped="scoped">
.icon_5 {
  display: inline-block;
  vertical-align: top;
}
.icon_5 {
  display: inline-block;
  vertical-align: top;
}
.text_4 {
  display: inline-block;
  vertical-align: top;
}
.button_4 {
  display: inline-block;
  vertical-align: top;
}
</style>
