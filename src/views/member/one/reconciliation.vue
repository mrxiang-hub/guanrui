<template>
  <div class="app-container">
    <SearchForm :formOptions="formOptions">
      <template #handleBtn>
        <el-button type="primary" icon="el-icon-search" size="mini"
          >查询</el-button>
        <el-button size="mini">重置</el-button>
      </template>
    </SearchForm>
    <div class="app-container__body">
      <div class="app-container__body-table">
        <CustomTable :columns="columns" :tableData="tableData">
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
  name: "InventoryAdjustmentOrder",
  components: {
    SearchForm,
    CustomTable,
  },
  data() {
    return {
      columns: [
        {
          prop: "code",
          label: "单号",
    
          sortable: true,
        },
        {
          prop: "name",
          label: "类型",

        },
        {
          prop: "concat",
          label: "自编码",
    
        },
        {
          prop: "mobile",
          label: "操作门店",
          
        },
        {
          prop: "mobile",
          label: "操作前金额",
     
          sortable: true,
        },
        {
          prop: "mobile",
          label: "操作金额",
       
          sortable: true,
        },
        {
          prop: "mobile",
          label: "余额",
        
             sortable: true,
        },
        {
          prop: "mobile",
          label: "创建时间",
            
             sortable: true,
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
          label: "查询类型",
          prop: "type",
          element: "el-radio-group",
          initValue:'3',
          radios:[
              {
                  label: '余额对账',
                  value: '1'
              },
               {
                  label: '积分对账',
                  value: '2'
              },
               {
                  label: '历史消费',
                  value: '3'
              },
               {
                  label: '购买统计',
                  value: '4'
              }
              
          ]
        },
        {
          label: "选择会员",
          prop: "keyWords",
          element: "el-input",
          initValue: undefined,
          placeholder: "请选择会员",
          clearable: true,
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
          placeholder: "请选择开始日期",
          clearable: true,
          type: 'date'
        },       
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

