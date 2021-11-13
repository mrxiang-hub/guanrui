<template>
  <div class="app-container">
    <SearchForm :formOptions="formOptions">
      <template #handleBtn>
        <el-button type="primary" icon="el-icon-search" size="mini"
          >查询</el-button
        >
        <el-button type="primary" icon="el-icon-plus" size="mini"
          >新增</el-button
        >
      </template>
    </SearchForm>
    <CustomTable :columns="columns" :tableData="tableData">
      <template slot="handle" slot-scope="slotProps">
        <el-button
          icon="el-icon-search"
          class="handle-table-btn"
          type="default"
          @click="handleEdit(slotProps.row)"
          >查看
        </el-button>
        <el-button
          icon="el-icon-delete-solid"
          class="handle-table-btn"
          type="danger"
          @click="handleDelete(slotProps.row)"
          >删除
        </el-button>
      </template>
    </CustomTable>
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
  name: "PurchasingPriceAdjust",
  components: {
    SearchForm,
    CustomTable,
  },
  data() {
    return {
      columns: [
        {
          prop: "code",
          label: "进价订单编号",
          width: "",
          sortable: true,
        },
        {
          prop: "name",
          label: "调价门店",
          width: "",
        },
        {
          prop: "concat",
          label: "单据状态爱",
          width: "",
        },
        {
          prop: "mobile",
          label: "制单人",
          width: "",
        },
        {
          prop: "mobile",
          label: "创建时间",
          width: "",
          sortable: true,
        },
        {
          prop: "handle",
          label: "操作",
          width: 180,
        },
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
          label: "关键词",
          prop: "keyWord",
          element: "el-input",
          initValue: undefined,
          placeholder: "供应商编码/名称/联系人",
          clearable: true,
        },
        {
          label: "门店",
          prop: "store",
          element: "el-select",
          initValue: "1",
          placeholder: "门店选择",
          clearable: true,
          options: [
            { label: "管瑞技术测试总部", value: "1" },
            { label: "管瑞技术测试分店", value: "2" },
          ],
        },
        {
          label: "开始日期",
          prop: "startTime",
          element: "el-date-picker",
          initValue: "",
          placeholder: "选择开始日期",
          clearable: true,
          type: "date",
        },
        {
          label: "结束日期",
          prop: "endTime",
          element: "el-date-picker",
          initValue: "",
          placeholder: "选择结束日期",
          clearable: true,
          type: "date",
        },
      ],
    };
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
}
</style>

