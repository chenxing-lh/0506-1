<template>
  <div>
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
      :rules="formInputRules_1"
    ></form-input>
    <form-input
      type="textarea"
      placeholder="请输入"
      label="多行文本"
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
      type="textarea"
      placeholder="请输入"
      label="多行文本"
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
      :rules="formInputRules_4"
    ></form-input>
    <form-radio
      :select-value="1"
      :select-option="formRadioSelectoption"
      label="单选框"
      :is-label-visible="true"
      :status="3"
      :require="false"
      :is-show-customer="false"
      :options="formRadioOptions"
      :rules="formRadioRules"
      v-if="false"
    ></form-radio>
    <form-radio
      :select-value="1"
      :select-option="formRadioSelectoption_1"
      label="单选框"
      :is-label-visible="true"
      :status="2"
      :require="false"
      :is-show-customer="false"
      :options="formRadioOptions_1"
      :rules="formRadioRules_1"
    ></form-radio>
    <form-radio
      :select-value="1"
      :select-option="formRadioSelectoption_2"
      label="单选框"
      :is-label-visible="true"
      :status="0"
      :require="false"
      :is-show-customer="false"
      :options="formRadioOptions_2"
      :rules="formRadioRules_2"
    ></form-radio>
    <form-radio
      :select-value="1"
      :select-option="formRadioSelectoption_3"
      label="单选框"
      :is-label-visible="true"
      :status="1"
      :require="false"
      :is-show-customer="false"
      :options="formRadioOptions_3"
      :rules="formRadioRules_3"
    ></form-radio>
    <form-radio
      :select-value="1"
      :select-option="formRadioSelectoption_4"
      label="单选框"
      :is-label-visible="true"
      :status="0"
      :require="false"
      :is-show-customer="false"
      :options="formRadioOptions_4"
      :rules="formRadioRules_4"
    ></form-radio>
    <form-check
      label="多选框"
      :is-label-visible="true"
      :options="formCheckOptions"
      :max="10"
      :min="1"
      :default-value="formCheckDefaultvalue"
      :value="formCheckValue"
      :status="0"
      :select-value="1"
      :select-option="formCheckSelectoption"
      :require="false"
      :is-show-min="false"
      :is-show-max="false"
      :is-show-customer="false"
      :rules="formCheckRules"
    ></form-check>
    <form-select
      placeholder="请选择"
      label="下拉多选"
      :is-label-visible="true"
      :default-value="formSelectDefaultvalue"
      :select-value="1"
      :select-option="formSelectSelectoption"
      :options="formSelectOptions"
      :status="0"
      :require="false"
      :is-show-max="false"
      :is-show-customer="false"
      :limit="0"
      :rules="formSelectRules"
    ></form-select>
    <form-date
      type="dateAll"
      placeholder="请输入"
      label="日期"
      :is-label-visible="true"
      :status="0"
      :default-all="false"
      :require="false"
      :default-time="0"
      :is-show-customer="false"
      unit-all="datetime"
      :select-option="formDateSelectoption"
      :rules="formDateRules"
    ></form-date>
    <form-date
      type="datePart"
      placeholder="请输入"
      label="日期区间"
      :is-label-visible="true"
      :status="0"
      unit-part="datetimerange"
      :default-part="false"
      :require="false"
      :default-end-time="0"
      :default-start-time="0"
      :is-show-customer="false"
      :options="formDateOptions"
      :select-option="formDateSelectoption_1"
      :rules="formDateRules_1"
    ></form-date>
  </div>
</template>
<script>
export default {
  components: {},
  data: function() {
    return {
      pageName: "表单组件",
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
      formRadioSelectoption: [
        {
          label: "静态数据",
          value: 1
        }
      ],
      formRadioOptions: [
        {
          label: "姓名",
          value: "1"
        },
        {
          label: "年龄",
          value: "2"
        },
        {
          label: "班级",
          value: "3"
        },
        {
          label: "性别",
          value: "4"
        }
      ],
      formRadioRules: [
        {
          required: false,
          message: "",
          trigger: []
        }
      ],
      formRadioSelectoption_1: [
        {
          label: "静态数据",
          value: 1
        }
      ],
      formRadioOptions_1: [
        {
          label: "姓名",
          value: "1"
        },
        {
          label: "年龄",
          value: "2"
        },
        {
          label: "班级",
          value: "3"
        },
        {
          label: "性别",
          value: "4"
        }
      ],
      formRadioRules_1: [
        {
          required: false,
          message: "",
          trigger: []
        }
      ],
      formRadioSelectoption_2: [
        {
          label: "静态数据",
          value: 1
        }
      ],
      formRadioOptions_2: [
        {
          label: "姓名",
          value: "1"
        },
        {
          label: "年龄",
          value: "2"
        },
        {
          label: "班级",
          value: "3"
        },
        {
          label: "性别",
          value: "4"
        }
      ],
      formRadioRules_2: [
        {
          required: false,
          message: "",
          trigger: []
        }
      ],
      formRadioSelectoption_3: [
        {
          label: "静态数据",
          value: 1
        }
      ],
      formRadioOptions_3: [
        {
          label: "姓名",
          value: "1"
        },
        {
          label: "年龄",
          value: "2"
        },
        {
          label: "班级",
          value: "3"
        },
        {
          label: "性别",
          value: "4"
        }
      ],
      formRadioRules_3: [
        {
          required: false,
          message: "",
          trigger: []
        }
      ],
      formRadioSelectoption_4: [
        {
          label: "静态数据",
          value: 1
        }
      ],
      formRadioOptions_4: [
        {
          label: "姓名",
          value: "1"
        },
        {
          label: "年龄",
          value: "2"
        },
        {
          label: "班级",
          value: "3"
        },
        {
          label: "性别",
          value: "4"
        }
      ],
      formRadioRules_4: [
        {
          required: false,
          message: "",
          trigger: []
        }
      ],
      formCheckOptions: [
        {
          label: "上海",
          value: 1
        },
        {
          label: "北京",
          value: 2
        },
        {
          label: "广州",
          value: 3
        },
        {
          label: "深圳",
          value: 4
        }
      ],
      formCheckDefaultvalue: [],
      formCheckValue: [],
      formCheckSelectoption: [
        {
          label: "静态数据",
          value: 1
        }
      ],
      formCheckRules: [
        {
          required: false,
          message: "",
          trigger: []
        }
      ],
      formSelectDefaultvalue: [],
      formSelectSelectoption: [
        {
          label: "静态数据",
          value: 1
        }
      ],
      formSelectOptions: [
        {
          label: "姓名",
          value: 1
        },
        {
          label: "年龄",
          value: 2
        },
        {
          label: "班级",
          value: 3
        },
        {
          label: "性别",
          value: 4
        }
      ],
      formSelectRules: [
        {
          required: false,
          message: "",
          trigger: []
        }
      ],
      formDateSelectoption: [
        {
          label: "秒",
          value: "datetime"
        },
        {
          label: "日",
          value: "date"
        },
        {
          label: "月",
          value: "month"
        },
        {
          label: "年",
          value: "year"
        }
      ],
      formDateRules: [
        {
          required: false,
          message: "",
          trigger: []
        }
      ],
      formDateOptions: [
        {
          label: "秒",
          value: "datetimerange"
        },
        {
          label: "日",
          value: "daterange"
        }
      ],
      formDateSelectoption_1: [
        {
          label: "秒",
          value: "datetimerange"
        },
        {
          label: "日",
          value: "daterange"
        }
      ],
      formDateRules_1: [
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
