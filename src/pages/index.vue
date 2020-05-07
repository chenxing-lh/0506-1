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
    <ve-histogram
      :data="veHistogramData"
      :grid="veHistogramGrid"
      :legend="veHistogramLegend"
      height="300px"
    ></ve-histogram>
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
      veHistogramData: {
        columns: ["日期", "访问用户", "下单用户", "下单率"],
        rows: [
          {
            日期: "1/1",
            访问用户: 1393,
            下单用户: 1093,
            下单率: 32
          },
          {
            日期: "1/2",
            访问用户: 3530,
            下单用户: 3230,
            下单率: 26
          },
          {
            日期: "1/3",
            访问用户: 2923,
            下单用户: 2623,
            下单率: 76
          },
          {
            日期: "1/4",
            访问用户: 1723,
            下单用户: 1423,
            下单率: 49
          },
          {
            日期: "1/5",
            访问用户: 3792,
            下单用户: 3492,
            下单率: 32.3
          },
          {
            日期: "1/6",
            访问用户: 4593,
            下单用户: 4293,
            下单率: 78
          }
        ]
      },
      veHistogramGrid: {
        top: 35,
        bottom: 10
      },
      veHistogramLegend: {
        top: 5
      },
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
