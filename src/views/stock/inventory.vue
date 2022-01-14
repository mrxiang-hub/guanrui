<template>
    <div class="app-container">
        <SearchForm ref="searchForm" :form-options="formOptions">
            <template #handleBtn>
                <el-button
                    type="primary"
                    icon="el-icon-search"
                    size="mini"
                    @click="handleSearch"
                >查询
                </el-button>
                <el-button size="mini" @click="handleReset">重置</el-button>
            </template>
        </SearchForm>
        <div class="app-container__body">
            <div class="app-container__body-table">
                <CustomTable :columns="columns" :table-data="tableData">
                    <div slot="header" class="app-container__table-header">
                        <el-button
                            type="primary"
                            icon="el-icon-plus"
                            size="mini"
                        >新增
                        </el-button>
                    </div>
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
import CustomTable from '@/components/customTable';
import SearchForm from '@/components/seachForm';
import TableMixin from '@/mixin/table';

export default {
    name: 'OutPut',
    components: {
        SearchForm,
        CustomTable
    },
    mixins: [TableMixin],
    data() {
        return {
            columns: [
                {
                    prop: 'code',
                    label: '盘点单单号',
                    width: 180,
                    sortable: true
                },
                {
                    prop: 'name',
                    label: '盘点门店',
                    width: ''
                },
                {
                    prop: 'concat',
                    label: '创建人',
                    width: ''
                },
                {
                    prop: 'mobile',
                    label: '盘点人',
                    width: ''
                },
                {
                    prop: 'mobile',
                    label: '创建时间',
                    width: '',
                    sortable: true
                },
                {
                    prop: 'mobile',
                    label: '更新时间',
                    width: '',
                    sortable: true
                },
                {
                    prop: 'mobile',
                    label: '状态',
                    width: '',
                    sortable: true
                },
                {
                    prop: 'handle',
                    label: '操作',
                    width: 220,
                    render: (h, params) => {
                        return h('div', [
                            h('el-button', {
                                props: {
                                    size: 'mini',
                                    icon: 'el-icon-search'
                                },
                                style: {
                                    'padding': '5px',
                                    'font-size': '12px'
                                },
                                on: {
                                    click: () => {

                                    }
                                }
                            }, '查看'),
                            h('el-button', {
                                props: {
                                    size: 'mini',
                                    type: 'warning'
                                },
                                style: {
                                    'padding': '5px',
                                    'font-size': '12px'
                                },
                                on: {
                                    click: () => {

                                    }
                                }
                            }, '实盘'),
                            h('el-button', {
                                props: {
                                    size: 'mini',
                                    type: 'danger',
                                    icon: 'el-icon-delete'
                                },
                                style: {
                                    'padding': '5px',
                                    'font-size': '12px'
                                },
                                on: {
                                    click: () => {
                                        this.$confirm('确定要删除吗?', '删除', {
                                            confirmButtonText: '确定',
                                            cancelButtonText: '取消',
                                            type: 'warning',
                                            center: true
                                        }).then(() => {
                                            this.$message({
                                                type: 'success',
                                                message: '删除成功!'
                                            });
                                        }).catch(() => {
                                            this.$message({
                                                type: 'info',
                                                message: '已取消删除'
                                            });
                                        });
                                    }
                                }
                            }, '删除')
                        ]);
                    }
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
                },
                {
                    label: '门店',
                    prop: 'store',
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
                    label: '开始日期',
                    prop: 'startTime',
                    element: 'el-date-picker',
                    initValue: undefined,
                    placeholder: '请选择开始日期',
                    clearable: true,
                    type: 'date'
                },
                {
                    label: '结束日期',
                    prop: 'endTime',
                    element: 'el-date-picker',
                    initValue: undefined,
                    placeholder: '请选择结束日期',
                    clearable: true,
                    type: 'date'
                },
                {
                    label: '状态',
                    prop: 'status',
                    element: 'el-select',
                    initValue: undefined,
                    placeholder: '请选择',
                    clearable: true,
                    options: [
                        {
                            label: '待审核',
                            value: '1'
                        },
                        {
                            label: '带盘点',
                            value: '2'
                        },
                        {
                            label: '待纠错',
                            value: '3'
                        },
                        {
                            label: '已完成',
                            value: '4'
                        }
                    ]
                }
            ]
        };
    },

    methods: {
        /**
         * 查询
         */
        handleSearch() {

        },
        /**
         * 编辑
         * @param data
         */
        handleEdit(data) {

        },
        /**
         * 删除
         * @param data
         */
        handleDelete(data) {

        },
        /**
         * 分页控制每页多少条
         */
        handleSizeChange() {

        },
        /**
         * 分页控制第几页
         */
        handleCurrentChange() {

        }
    }
};
</script>
<style lang="scss" scoped>

</style>

