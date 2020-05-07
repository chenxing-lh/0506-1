<template>
  <div>
    <el-row :gutter="0" type="flex" justify="center" align="top">
      <el-col :span="12"></el-col>
      <el-col :span="12"></el-col>
    </el-row>
    <el-row :gutter="0" type="flex" justify="center" align="top">
      <el-col :span="8"></el-col>
      <el-col :span="8"></el-col>
      <el-col :span="8"></el-col>
    </el-row>
    <form-container
      :inline="false"
      position="left"
      primary-text="提交"
      :have-second="true"
      second-text="重置"
    >
      <form-input
        :in-container="true"
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
      <form-input
        :in-container="true"
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
        :rules="formInputRules_1"
      ></form-input>
      <form-input
        :in-container="true"
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
        :rules="formInputRules_2"
      ></form-input>
      <form-input
        :in-container="true"
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
        :rules="formInputRules_3"
      ></form-input>
      <form-input
        :in-container="true"
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
        :rules="formInputRules_4"
      ></form-input>
      <form-input
        :in-container="true"
        type="number"
        placeholder="请输入"
        label="数字框"
        :is-label-visible="true"
        :status="0"
        :step="1"
        :min="2"
        :max="30"
        :require="false"
        :is-show-min="false"
        :is-show-max="false"
        :is-show-customer="false"
        :rules="formInputRules_5"
      ></form-input>
      <form-input
        :in-container="true"
        type="number"
        placeholder="请输入"
        label="数字框"
        :is-label-visible="true"
        :status="0"
        :step="1"
        :min="2"
        :max="30"
        :require="false"
        :is-show-min="false"
        :is-show-max="false"
        :is-show-customer="false"
        :rules="formInputRules_6"
      ></form-input>
      <form-input
        :in-container="true"
        type="number"
        placeholder="请输入"
        label="数字框"
        :is-label-visible="true"
        :status="0"
        :step="1"
        :min="2"
        :max="30"
        :require="false"
        :is-show-min="false"
        :is-show-max="false"
        :is-show-customer="false"
        :rules="formInputRules_7"
      ></form-input>
      <form-input
        :in-container="true"
        type="number"
        placeholder="请输入"
        label="数字框"
        :is-label-visible="true"
        :status="0"
        :step="1"
        :min="2"
        :max="30"
        :require="false"
        :is-show-min="false"
        :is-show-max="false"
        :is-show-customer="false"
        :rules="formInputRules_8"
      ></form-input>
      <form-input
        :in-container="true"
        type="number"
        placeholder="请输入"
        label="数字框"
        :is-label-visible="true"
        :status="0"
        :step="1"
        :min="2"
        :max="30"
        :require="false"
        :is-show-min="false"
        :is-show-max="false"
        :is-show-customer="false"
        :rules="formInputRules_9"
      ></form-input>
      <form-input
        :in-container="true"
        type="number"
        placeholder="请输入"
        label="数字框"
        :is-label-visible="true"
        :status="0"
        :step="1"
        :min="2"
        :max="30"
        :require="false"
        :is-show-min="false"
        :is-show-max="false"
        :is-show-customer="false"
        :rules="formInputRules_10"
      ></form-input>
      <form-input
        :in-container="true"
        type="number"
        placeholder="请输入"
        label="数字框"
        :is-label-visible="true"
        :status="0"
        :step="1"
        :min="2"
        :max="30"
        :require="false"
        :is-show-min="false"
        :is-show-max="false"
        :is-show-customer="false"
        :rules="formInputRules_11"
      ></form-input>
      <form-input
        :in-container="true"
        type="number"
        placeholder="请输入"
        label="数字框"
        :is-label-visible="true"
        :status="0"
        :step="1"
        :min="2"
        :max="30"
        :require="false"
        :is-show-min="false"
        :is-show-max="false"
        :is-show-customer="false"
        :rules="formInputRules_12"
      ></form-input>
      <submit-item
        :inline="false"
        position="left"
        primary-text="提交"
        :have-second="true"
        second-text="重置"
        :query="submitItemQuery"
        :body="submitItemBody"
        :headers="submitItemHeaders"
      ></submit-item>
    </form-container>
    <config-group
      group-name="分组名称"
      :is-show-name="true"
      :is-collapsible="true"
      :is-show-icon="true"
      icon-color="#5D81F9"
      :is-show-divider="true"
    ></config-group>
  </div>
</template>
<script>
export default {
  components: {},
  data: function() {
    return {
      pageName: "布局组件",
      formInputRules: [
        {
          required: false,
          message: "",
          trigger: []
        }
      ],
      formInputRules_1: [
        {
          required: false,
          message: "",
          trigger: []
        }
      ],
      formInputRules_2: [
        {
          required: false,
          message: "",
          trigger: []
        }
      ],
      formInputRules_3: [
        {
          required: false,
          message: "",
          trigger: []
        }
      ],
      formInputRules_4: [
        {
          required: false,
          message: "",
          trigger: []
        }
      ],
      formInputRules_5: [
        {
          required: false,
          message: "",
          trigger: []
        }
      ],
      formInputRules_6: [
        {
          required: false,
          message: "",
          trigger: []
        }
      ],
      formInputRules_7: [
        {
          required: false,
          message: "",
          trigger: []
        }
      ],
      formInputRules_8: [
        {
          required: false,
          message: "",
          trigger: []
        }
      ],
      formInputRules_9: [
        {
          required: false,
          message: "",
          trigger: []
        }
      ],
      formInputRules_10: [
        {
          required: false,
          message: "",
          trigger: []
        }
      ],
      formInputRules_11: [
        {
          required: false,
          message: "",
          trigger: []
        }
      ],
      formInputRules_12: [
        {
          required: false,
          message: "",
          trigger: []
        }
      ],
      submitItemQuery: {},
      submitItemBody: {},
      submitItemHeaders: {}
    }
  },
  mounted: function() {},
  watch: {},
  methods: {},
  destroyed: function() {}
}
</script>
<style lang="less" scoped="scoped"></style>
