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
            <el-button
              type="primary"
              icon="el-icon-plus"
              size="mini"
            >新增</el-button>
            <el-button
              type="primary"
              icon="el-icon-download"
              size="mini"
            >导入</el-button>
          </template>
          <template slot="handle" slot-scope="slotProps">
            <el-button
              icon="el-icon-edit"
              class="handle-table-btn"
              type="primary"
              @click="handleEdit(slotProps.row)"
            >编辑
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
  name: 'BrandInformation',
  components: {
    SearchForm,
    CustomTable
  },
  data() {
    return {
      columns: [
        {
          prop: 'code',
          label: '品牌编码',
          width: '',
          sortable: true
        },
        {
          prop: 'name',
          label: '品牌名称',
          width: ''
        },
        {
          prop: 'concat',
          label: '创建人',
          width: ''
        },
        {
          prop: 'mobile',
          label: '修改人',
          width: ''
        },
        {
          prop: 'mode',
          label: '创建时间',
          width: ''
        },
        {
          prop: 'province',
          label: '更新时间',
          width: ''
        },
        {
          prop: 'handle',
          label: '操作',
          width: 180
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
          placeholder: '供应商编码/名称/联系人',
          clearable: true
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

