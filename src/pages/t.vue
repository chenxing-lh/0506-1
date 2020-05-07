<template>
  <div>
    <ve-histogram
      :data="veHistogramData"
      :grid="veHistogramGrid"
      :legend="veHistogramLegend"
      height="300px"
    ></ve-histogram>
    <ve-line
      :data="veLineData"
      :grid="veLineGrid"
      :legend="veLineLegend"
      height="300px"
    ></ve-line>
    <ve-pie
      :data="vePieData"
      :grid="vePieGrid"
      :settings="vePieSettings"
      :legend="vePieLegend"
      height="300px"
    ></ve-pie>
    <ve-gauge
      :data="veGaugeData"
      :grid="veGaugeGrid"
      :legend="veGaugeLegend"
      height="300px"
    ></ve-gauge>
    <ve-ring
      :data="veRingData"
      :grid="veRingGrid"
      :legend="veRingLegend"
      height="320px"
    ></ve-ring>
    <ve-bar
      :data="veBarData"
      :grid="veBarGrid"
      :legend="veBarLegend"
      height="300px"
    ></ve-bar>
  </div>
</template>
<script>
export default {
  components: {},
  data: function() {
    return {
      pageName: "图表组件",
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
      veLineData: {
        columns: ["日期", "访问用户", "下单用户", "下单率"],
        rows: [
          {
            日期: "1/1",
            访问用户: 1393,
            下单用户: 1093,
            下单率: 0.32
          },
          {
            日期: "1/2",
            访问用户: 3530,
            下单用户: 3230,
            下单率: 0.26
          },
          {
            日期: "1/3",
            访问用户: 2923,
            下单用户: 2623,
            下单率: 0.76
          },
          {
            日期: "1/4",
            访问用户: 1723,
            下单用户: 1423,
            下单率: 0.49
          },
          {
            日期: "1/5",
            访问用户: 3792,
            下单用户: 3492,
            下单率: 0.323
          },
          {
            日期: "1/6",
            访问用户: 4593,
            下单用户: 4293,
            下单率: 0.78
          }
        ]
      },
      veLineGrid: {
        top: 35,
        bottom: 10
      },
      veLineLegend: {
        top: 5
      },
      vePieData: {
        columns: ["日期", "访问用户"],
        rows: [
          {
            日期: "1/1",
            访问用户: 1393
          },
          {
            日期: "1/2",
            访问用户: 3530
          },
          {
            日期: "1/3",
            访问用户: 2923
          },
          {
            日期: "1/4",
            访问用户: 1723
          },
          {
            日期: "1/5",
            访问用户: 3792
          },
          {
            日期: "1/6",
            访问用户: 4593
          }
        ]
      },
      vePieGrid: {
        top: 35,
        bottom: 10
      },
      vePieSettings: {
        offsetY: 180
      },
      vePieLegend: {
        top: 5
      },
      veGaugeData: {
        columns: ["type", "a", "b", "value"],
        rows: [
          {
            type: "速度",
            value: 80,
            a: 1,
            b: 2
          }
        ]
      },
      veGaugeGrid: {
        top: 35,
        bottom: 10
      },
      veGaugeLegend: {
        top: 5
      },
      veRingData: {
        columns: ["日期", "访问用户"],
        rows: [
          {
            日期: "1/1",
            访问用户: 1393
          },
          {
            日期: "1/2",
            访问用户: 3530
          },
          {
            日期: "1/3",
            访问用户: 2923
          },
          {
            日期: "1/4",
            访问用户: 1723
          },
          {
            日期: "1/5",
            访问用户: 3792
          },
          {
            日期: "1/6",
            访问用户: 4593
          }
        ]
      },
      veRingGrid: {
        top: 35,
        bottom: 10
      },
      veRingLegend: {
        top: 5
      },
      veBarData: {
        columns: ["日期", "访问用户", "下单用户", "下单率"],
        rows: [
          {
            日期: "1/1",
            访问用户: 1393,
            下单用户: 1093,
            下单率: 0.32
          },
          {
            日期: "1/2",
            访问用户: 3530,
            下单用户: 3230,
            下单率: 0.26
          },
          {
            日期: "1/3",
            访问用户: 2923,
            下单用户: 2623,
            下单率: 0.76
          },
          {
            日期: "1/4",
            访问用户: 1723,
            下单用户: 1423,
            下单率: 0.49
          },
          {
            日期: "1/5",
            访问用户: 3792,
            下单用户: 3492,
            下单率: 0.323
          },
          {
            日期: "1/6",
            访问用户: 4593,
            下单用户: 4293,
            下单率: 0.78
          }
        ]
      },
      veBarGrid: {
        top: 35,
        bottom: 10
      },
      veBarLegend: {
        top: 5
      }
    }
  },
  mounted: function() {},
  watch: {},
  methods: {},
  destroyed: function() {}
}
</script>
<style lang="less" scoped="scoped"></style>
