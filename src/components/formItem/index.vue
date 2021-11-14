/**
* 表单匹配项
*/
<template>
  <div class="form-item">
    <el-input
      v-if="isInput"
      v-model="currentVal"
      v-bind="bindProps"
      size="mini"
      v-on="bindEvents"
    />

    <el-input-number
      v-if="isInputNumber"
      v-model="currentVal"
      v-bind="bindProps"
      size="mini"
      :controls-position="itemOptions['controls-position'] || 'right'"
      v-on="bindEvents"
    />

    <el-select
      v-if="isSelect"
      v-model="currentVal"
      v-bind="bindProps"
      size="mini"
      clearable
      v-on="bindEvents"
    >
      <el-option
        v-for="item in itemOptions.options"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      />
    </el-select>

    <!-- datetimerange/daterange -->
    <el-date-picker
      v-if="isDatePickerDateRange"
      v-model="currentVal"
      v-bind="bindProps"
      value-format="yyyy-MM-dd HH:mm:ss"
      :default-time="['00:00:00', '23:59:59']"
      end-placeholder="结束日期"
      range-separator="至"
      start-placeholder="开始日期"
      :picker-options="pickerOptionsRange"
      clearable
      size="mini"
      :type="itemOptions.type || 'datetimerange'"
      v-on="bindEvents"
    />

    <!-- monthrange -->
    <el-date-picker
      v-if="isDatePickerMonthRange"
      v-model="currentVal"
      v-bind="bindProps"
      value-format="yyyy-MM"
      end-placeholder="结束日期"
      range-separator="至"
      start-placeholder="开始日期"
      :picker-options="pickerOptionsRangeMonth"
      clearable
      size="mini"
      type="monthrange"
      v-on="bindEvents"
    />

    <!-- others -->
    <el-date-picker
      v-if="isDatePickerOthers"
      v-model="currentVal"
      v-bind="bindProps"
      placeholder="请选择日期"
      clearable
      size="mini"
      :type="itemOptions.type"
      v-on="bindEvents"
    />

    <el-cascader
      v-if="isCascader"
      v-model="currentVal"
      v-bind="bindProps"
      clearable
      size="mini"
      v-on="bindEvents"
    />
    <el-radio-group
      v-if="isRadioGroup"
      v-model="currentVal"
      v-bind="bindProps"
      v-on="bindEvents"
    >
      <el-radio
        v-for="item in itemOptions.radios"
        :key="item.value"
        :label="item.value"
      >{{item.label}}</el-radio>
    </el-radio-group>
  </div>
</template>

<script>
import tools from "@/utils/tools";

export default {
  inheritAttrs: false,

  props: {
    value: {
      type: String,
      default: () => "",
    },
    itemOptions: {
      type: Object,
      default() {
        return {};
      },
    },
  },

  data() {
    return {
      pickerOptionsRange: tools.pickerOptionsRange,
      pickerOptionsRangeMonth: tools.pickerOptionsRangeMonth,
    };
  },

  computed: {
    // 双向绑定数据值
    currentVal: {
      get() {
        return this.value;
      },
      set(val) {
        this.$emit("input", val);
      },
    },
    // 绑定属性
    bindProps() {
      const obj = { ...this.itemOptions };
      // 移除冗余属性
      delete obj.label;
      delete obj.prop;
      delete obj.element;
      delete obj.initValue;
      delete obj.rules;
      delete obj.events;
      if (obj.element === "el-select") {
        delete obj.options;
      }
      return obj;
    },
    // 绑定方法
    bindEvents() {
      return this.itemOptions.events || {};
    },
    // el-input
    isInput() {
      return this.itemOptions.element === "el-input";
    },
    // el-input-number
    isInputNumber() {
      return this.itemOptions.element === "el-input-number";
    },
    // el-select
    isSelect() {
      return this.itemOptions.element === "el-select";
    },
    // el-date-picker (type: datetimerange/daterange)
    isDatePickerDateRange() {
      const isDatePicker = this.itemOptions.element === "el-date-picker";
      const isDateRange =
        !this.itemOptions.type ||
        this.itemOptions.type === "datetimerange" ||
        this.itemOptions.type === "daterange";
      return isDatePicker && isDateRange;
    },
    // el-date-picker (type: monthrange)
    isDatePickerMonthRange() {
      const isDatePicker = this.itemOptions.element === "el-date-picker";
      const isMonthRange = this.itemOptions.type === "monthrange";
      return isDatePicker && isMonthRange;
    },
    //  el-date-picker (type: other)
    isDatePickerOthers() {
      const isDatePicker = this.itemOptions.element === "el-date-picker";
      return (
        isDatePicker &&
        !this.isDatePickerDateRange &&
        !this.isDatePickerMonthRange
      );
    },
    // el-cascader
    isCascader() {
      return this.itemOptions.element === "el-cascader";
    },
    // el-radio-group
    isRadioGroup() {
      return this.itemOptions.element === "el-radio-group";
    },
  },

  created() {},

  methods: {},

  components: {},
};
</script>

<style lang="scss" scoped>
</style>

