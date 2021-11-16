<template>
  <div class="app-container">
    <SearchForm :formOptions="formOptions">
      <template #handleBtn>
        <el-button type="primary" icon="el-icon-search" size="mini"
          >查询</el-button
        >
        <el-button size="mini">重置</el-button>
      </template>
    </SearchForm>
    <div class="app-container__body">
      <div class="app-container__body-table">
        <CustomTable :columns="columns" :tableData="tableData">
          <template #handle="slotProps">
             <el-button class="handle-table-btn" icon="el-icon-search" size="mini"
             @click="handleView(slotProps.row)"
          >查看</el-button>
          </template>
        </CustomTable>
      </div>
    </div>
    <el-pagination
      class="table-pagination"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="pagination.currentPage"
      :page-sizes="[5, 10, 15, 20]"
      :page-size="pagination.pageSize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="pagination.total"
    >
    </el-pagination>
  </div>
</template>

<script>
import CustomTable from "@/components/customTable";
import SearchForm from "@/components/seachForm";

export default {
  components: {
    SearchForm,
    CustomTable,
  },
  data() {
    return {
      columns: [
        {
          prop: "code",
          label: "商品款号",
          width: "",
          sortable: true,
        },
        {
          prop: "name",
          label: "商品条码",
          width: "",
            sortable: true,
        },
        {
          prop: "mobile",
          label: "商品名称",
          width: "",
            sortable: true,
        },
        {
          prop: "mobile",
          label: "分类",
          width: "",
          sortable: true,
        },
            {
          prop: "mobile",
          label: "系统库存",
          width: "",
          sortable: true,
        },
            {
          prop: "mobile",
          label: "盘点数量",
          width: "",
          sortable: true,
        },
            {
          prop: "mobile",
          label: "盈亏数量",
          width: "",
          sortable: true,
        },
            {
          prop: "mobile",
          label: "差异原因",
          width: "",
          sortable: true,
        },
            {
          prop: "mobile",
          label: "库存成本价",
          width: "",
          sortable: true,
        },
            {
          prop: "mobile",
          label: "库存成本金额",
          width: "",
          sortable: true,
        },
            {
          prop: "mobile",
          label: "盘点成本金额",
          width: "",
          sortable: true,
        },
            {
          prop: "mobile",
          label: "差异金额（成本）",
          width: "",
          sortable: true,
        },
            {
          prop: "mobile",
          label: "盘点售价金额",
          width: "",
          sortable: true,
        },
              {
          prop: "mobile",
          label: "盘点售价金额",
          width: "",
          sortable: true,
        },
        {
          prop: "handle",
          label: "操作",
          width: 180
        }
      ],
      tableData: [
        {
          code: "001",
          name: "郑州批发城",
          concat: "小郑",
          mobile: "1355454623",
          mode: "购销",
          province: "河南",
          city: "郑州",
          address: "河南省郑州市中原区",
          salesman: "小明",
          phone: "13183117895",
          createTime: "1636727628063",
          updateTime: "1636727628063",
        },
        {
          code: "002",
          name: "郑州批发城",
          concat: "小郑",
          mobile: "1355454623",
          mode: "购销",
          province: "河南",
          city: "郑州",
          address: "河南省郑州市中原区",
          salesman: "小明",
          phone: "13183117895",
          createTime: "1636727628063",
          updateTime: "1636727628063",
        },
        {
          code: "003",
          name: "郑州批发城",
          concat: "小郑",
          mobile: "1355454623",
          mode: "购销",
          province: "河南",
          city: "郑州",
          address: "河南省郑州市中原区",
          salesman: "小明",
          phone: "13183117895",
          createTime: "1636727628063",
          updateTime: "1636727628063",
        },
        {
          code: "004",
          name: "郑州批发城",
          concat: "小郑",
          mobile: "1355454623",
          mode: "购销",
          province: "河南",
          city: "郑州",
          address: "河南省郑州市中原区",
          salesman: "小明",
          phone: "13183117895",
          createTime: "1636727628063",
          updateTime: "1636727628063",
        },
        {
          code: "005",
          name: "郑州批发城",
          concat: "小郑",
          mobile: "1355454623",
          mode: "购销",
          province: "河南",
          city: "郑州",
          address: "河南省郑州市中原区",
          salesman: "小明",
          phone: "13183117895",
          createTime: "1636727628063",
          updateTime: "1636727628063",
        },
      ],
      pagination: {
        currentPage: 1,
        pageSize: 10,
        total: 20,
      },
      formOptions: [
        {
          label: "盘点方式",
          prop: "method",
          element: "el-radio-group",
          initValue: 1,
          radios:[
            {
              label: '商品明细',
              value: '1'
            },
             {
              label: '类别汇总',
              value: '2'
            },
             {
              label: '供应商汇总',
              value: '3'
            },
             {
              label: '门店汇总',
              value: '4'
            },
             {
              label: '品牌',
              value: '5'
            }
          ]
        },
        {
           label: "商品款号",
          prop: "store",
          element: "el-input",
          initValue: undefined,
          placeholder: "商品款号",
          clearable: true,
        },
        {
          label: "盘点门店",
          prop: "store",
          element: "el-select",
          initValue: undefined,
          placeholder: "门店选择",
          clearable: true,
          options: [
            {
              label: '管锐技术测试总部',
              value: '1'
            },
            {
              label: '管锐技术测试分店',
              value: '2'
            }
          ]
        },
         {
           label: "供应商",
          prop: "store",
          element: "el-input",
          initValue: undefined,
          placeholder: "请选择供应商",
          clearable: true,
        },
        {
           label: "类别",
          prop: "store",
          element: "el-input",
          initValue: undefined,
          placeholder: "请选择商品类别",
          clearable: true,
        },
        {
          label: "品牌",
          prop: "store",
          element: "el-select",
          initValue: undefined,
          placeholder: "请选择品牌",
          clearable: true,
          options: [
            {
              label: '默认',
              value: '1'
            },
            {
              label: '西梅',
              value: '2'
            }
          ]
        },
         {
          label: "开始日期",
          prop: "startTime",
          element: "el-date-picker",
          initValue: undefined,
          placeholder: "请选择开始日期",
          clearable: true,
          type: 'date'
        },
        {
          label: "结束日期",
          prop: "endTime",
          element: "el-date-picker",
          initValue: undefined,
          placeholder: "请选择结束日期",
          clearable: true,
          type: 'date'
        }
      ]
    }
  },

  methods: {
    /**
     * 编辑
     * @param data
     */
    handleEdit(data) {
      console.log(data, 11111);
    },
    /**
     * 删除
     * @param data
     */
    handleDelete(data) {
      console.log(data, 222222);
    },
    /**
     * 分页控制每页多少条
     */
    handleSizeChange() {
      console.log(11111);
    },
    /**
     * 分页控制第几页
     */
    handleCurrentChange() {
      console.log(2222);
    },
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
    // 搜索
    onSearch() {
      this.onValidate(() => {
        this.$emit("onSearch", this.formData);
      });
    },
    // 导出
    onExport() {
      this.onValidate(() => {
        this.$emit("onExport", this.formData);
      });
    },
    onReset() {
      this.$refs.formRef.resetFields();
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
    handleView(data) {
      console.log(data, 111)
    }
  },
};
</script>
<style lang="scss" scoped>
.app-container {
  height: 100%;

  .handle-table-btn {
    padding: 4px;
    font-size: 12px;
  }

  .table-pagination {
    margin-top: 30px;
  }
    ::v-deep .page-custom-table__header{
      display: none;
  }
  &__body {
    height: calc(100% - 200px);
  }
  &__body-table {
    height: 100%;
  }
}
</style>

