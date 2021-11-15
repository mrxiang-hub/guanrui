<template>
  <div class="app-container">
    <SearchForm :form-options="formOptions">
      <template #handleBtn>
        <el-button
          type="primary"
          icon="el-icon-search"
          size="mini"
        >查询</el-button>
        <el-button type="default" size="mini">重置</el-button>
      </template>
    </SearchForm>
    <div class="app-container__body">
      <div class="app-container__body-table">
        <CustomTable :columns="columns" :table-data="tableData">
          <template slot="header">
            <el-button type="primary" size="mini" icon="el-icon-plus">新增</el-button>
            <el-button type="primary" size="mini" icon="el-icon-s-tools">列设置</el-button>
          </template>
          <template slot="handle" slot-scope="slotProps">
            <el-button
              class="handle-table-btn"
              icon="el-icon-search"
              @click="handleEdit(slotProps.row)"
            >查看
            </el-button>
          </template>
        </CustomTable>
      </div>
    </div>
    <el-pagination
      class="table-pagination"
      :current-page="pagination.currentPage"
      :page-sizes="[5, 10, 15, 20]"
      :page-size="pagination.pageSize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="pagination.total"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
    />
  </div>
</template>

<script>
import CustomTable from '@/components/customTable'
import SearchForm from '@/components/seachForm'

export default {
  name: 'AllotApplyFor',
  components: {
    SearchForm,
    CustomTable
  },
  data() {
    return {
      columns: [
        {
          prop: 'code',
          label: '调拨申请编号',
          sortable: true
        },
        {
          prop: 'name',
          label: '调入门店',
          sortable: true
        },
        {
          prop: 'concat',
          label: '调出门店',
          sortable: true
        },
        {
          prop: 'mobile',
          label: '数量',
          sortable: true
        },
        {
          prop: 'mode',
          label: '单据金额',
          sortable: true
        },
        {
          prop: 'mode',
          label: '状态',
          sortable: true
        },
        {
          prop: 'mode',
          label: '制单人',
          sortable: true
        },
        {
          prop: 'mode',
          label: '修改人',
          sortable: true
        },
        {
          prop: 'mode',
          label: '更新时间'
        },
        {
          prop: 'handle',
          label: '操作'
        }
      ],
      tableData: [
        {
          code: '001',
          name: '郑州批发城',
          concat: '小郑',
          mobile: '1355454623',
          mode: '购销',
          province: '河南',
          city: '郑州',
          address: '河南省郑州市中原区',
          salesman: '小明',
          phone: '13183117895',
          createTime: '1636727628063',
          updateTime: '1636727628063'
        },
        {
          code: '002',
          name: '郑州批发城',
          concat: '小郑',
          mobile: '1355454623',
          mode: '购销',
          province: '河南',
          city: '郑州',
          address: '河南省郑州市中原区',
          salesman: '小明',
          phone: '13183117895',
          createTime: '1636727628063',
          updateTime: '1636727628063'
        },
        {
          code: '003',
          name: '郑州批发城',
          concat: '小郑',
          mobile: '1355454623',
          mode: '购销',
          province: '河南',
          city: '郑州',
          address: '河南省郑州市中原区',
          salesman: '小明',
          phone: '13183117895',
          createTime: '1636727628063',
          updateTime: '1636727628063'
        },
        {
          code: '004',
          name: '郑州批发城',
          concat: '小郑',
          mobile: '1355454623',
          mode: '购销',
          province: '河南',
          city: '郑州',
          address: '河南省郑州市中原区',
          salesman: '小明',
          phone: '13183117895',
          createTime: '1636727628063',
          updateTime: '1636727628063'
        },
        {
          code: '005',
          name: '郑州批发城',
          concat: '小郑',
          mobile: '1355454623',
          mode: '购销',
          province: '河南',
          city: '郑州',
          address: '河南省郑州市中原区',
          salesman: '小明',
          phone: '13183117895',
          createTime: '1636727628063',
          updateTime: '1636727628063'
        }
      ],
      pagination: {
        currentPage: 1,
        pageSize: 10,
        total: 20
      },
      formOptions: [
        {
          label: '关键词',
          prop: 'keyWord',
          element: 'el-input',
          initValue: undefined,
          placeholder: '商品款号',
          clearable: true
        },
        {
          label: '开始日期',
          prop: 'startTime',
          element: 'el-date-picker',
          placeholder: '请选择开始日期',
          type: 'date',
          clearable: true
        },
        {
          label: '结束日期',
          prop: 'startTime',
          element: 'el-date-picker',
          placeholder: '请选择结束日期',
          type: 'date',
          clearable: true
        },
        {
          label: '门店',
          prop: 'keyWord',
          element: 'el-select',
          initValue: undefined,
          placeholder: '门店选择',
          clearable: true,
          options: [
            {
              label: '管锐技术测试总部',
              value: 1
            },
            {
              label: '管锐技术测试分店',
              value: 2
            }
          ]
        },
        {
          label: '状态',
          prop: 'keyWord',
          element: 'el-select',
          initValue: undefined,
          placeholder: '状态选择',
          clearable: true,
          options: [
            {
              label: '待审核',
              vlaue: 1
            },
            {
              label: '已审核',
              vlaue: 2
            },
            {
              label: '已出库',
              vlaue: 3
            },
            {
              label: '已入库',
              vlaue: 4
            }
          ]
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
      console.log(data, 11111)
    },
    /**
     * 删除
     * @param data
     */
    handleDelete(data) {
      console.log(data, 222222)
    },
    /**
     * 分页控制每页多少条
     */
    handleSizeChange() {
      console.log(11111)
    },
    /**
     * 分页控制第几页
     */
    handleCurrentChange() {
      console.log(2222)
    },
    // 校验
    onValidate(callback) {
      this.$refs.formRef.validate((valid) => {
        if (valid) {
          callback()
        } else {
          return false
        }
      })
    },
    // 搜索
    onSearch() {
      this.onValidate(() => {
        this.$emit('onSearch', this.formData)
      })
    },
    // 导出
    onExport() {
      this.onValidate(() => {
        this.$emit('onExport', this.formData)
      })
    },
    onReset() {
      this.$refs.formRef.resetFields()
    },
    // 添加初始值
    addInitValue() {
      const obj = {}
      this.formOptions.forEach((curr) => {
        if (curr.initValue !== undefined) {
          obj[curr.prop] = curr.initValue
        }
      })
      this.formData = obj
    }
  }
}
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
  &__body {
    height: calc(100% - 200px);
  }
  &__body-table {
    height: 100%;
  }
}
</style>

