<template>
  <div>
    <el-row :gutter="0" type="flex" justify="center" align="top">
      <el-col :span="12"></el-col>
      <el-col :span="12"></el-col>
    </el-row>
    <config-group
      group-name="分组名称"
      :is-show-name="true"
      :is-collapsible="true"
      :is-show-icon="true"
      icon-color="#5D81F9"
      :is-show-divider="true"
    ></config-group>
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
    ></form-input>
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
<style lang="less" scoped="scoped"></style>
