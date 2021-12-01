<template>
  <div class="search-form-box">
    <el-form
      class="search-form-box__body"
      :model="formData"
      ref="formRef"
      :inline="true"
      label-position="right"
      label-width="100px"
    >
      <el-form-item
        v-for="(item, index) in formOptions"
        :key="index"
        :prop="item.prop"
        :label="item.label ? item.label + '：' : ''"
        :rules="item.rules"
      >
        <formItem v-model="formData[item.prop]" :itemOptions="item" />
      </el-form-item>
      <!--      操作按钮-->
      <el-form-item>
        <div class="btn-box">
          <slot name="handleBtn"></slot>
        </div>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import formItem from "@/components/formItem";

export default {
  props: {
    /**
     * 表单配置
     * 示例：
     * [{
     *   label: '用户名', // label文字
     *   prop: 'username', // 字段名
     *   element: 'el-input', // 指定elementui组件
     *   initValue: '阿黄', // 字段初始值
     *   placeholder: '请输入用户名', // elementui组件属性
     *   rules: [{ required: true, message: '必填项', trigger: 'blur' }], // elementui组件属性
     *   events: { // elementui组件方法
     *     input (val) {
     *       console.log(val)
     *     },
     *     ...... // 可添加任意elementui组件支持的方法
     *   }
     *   ...... // 可添加任意elementui组件支持的属性
     * }]
     */
    formOptions: {
      type: Array,
      required: true,
      default() {
        return [];
      },
    },
  },

  data() {
    return {
      formData: {},
    };
  },
  created() {
    this.addInitValue();
  },

  methods: {
    // 校验
    onValidate(callback) {
      this.$refs.formRef.validate((valid) => {
        if (valid) {
          callback();
        } else {
          return false;
        }
      });
    },
    // 添加初始值
    addInitValue() {
      const obj = {};
      this.formOptions.forEach((curr) => {
        if (curr.initValue !== undefined) {
          obj[curr.prop] = curr.initValue;
        }
      });
      this.formData = obj;
    },
  },
  components: { formItem },
};
</script>

<style lang="scss" scoped>
@import "@/styles/mixin.scss";
.search-form-box {
  margin-bottom: 20px;
  &__body {
    @include grid-mode(3, 0, 0);
  }
}
.el-form-item {
  margin-bottom: 0;
}
.btn-box {
  display: inline-block;
  margin-left: 100px;
}
</style>

