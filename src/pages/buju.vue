<template>
  <div>
    <form-container
      :inline="false"
      position="center"
      :have-second="true"
      second-text="重置"
      v-roles="''"
    >
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
        :rules="formInputRules"
        v-roles="''"
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
        v-roles="''"
      ></form-input>
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
        :select-option="formDateSelectoption"
        :rules="formDateRules"
        v-roles="''"
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
        :options="formDateOptions_1"
        :select-option="formDateSelectoption_1"
        :rules="formDateRules_1"
        v-roles="''"
      ></form-date>
      <form-radio
        :select-value="1"
        :select-option="formRadioSelectoption"
        label="单选框"
        :is-label-visible="true"
        :status="0"
        :require="false"
        :is-show-customer="false"
        :options="formRadioOptions"
        :rules="formRadioRules"
        v-roles="''"
      ></form-radio>
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
        :rules="formInputRules_2"
        v-roles="''"
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
        :rules="formInputRules_3"
        v-roles="''"
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
        :rules="formInputRules_4"
        v-roles="''"
      ></form-input>
      <submit-item
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
        :rules="submitItemRules"
        :inline="false"
        v-roles="''"
      ></submit-item>
      <form-radio
        :select-value="1"
        :select-option="formRadioSelectoption_1"
        label="单选框"
        :is-label-visible="true"
        :status="0"
        :require="false"
        :is-show-customer="false"
        :options="formRadioOptions_1"
        :rules="formRadioRules_1"
        v-roles="''"
      ></form-radio>
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
        v-roles="''"
      ></form-input>
    </form-container>
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
      :rules="formInputRules_6"
      v-roles="''"
    ></form-input>
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
      formDateSelectoption: [
        {
          label: "秒",
          value: "datetimerange"
        },
        {
          label: "日",
          value: "daterange"
        }
      ],
      formDateRules: [
        {
          required: false,
          message: "",
          trigger: []
        }
      ],
      formDateOptions_1: [
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
      submitItemRules: [
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
