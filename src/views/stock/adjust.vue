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
                        <el-button
                            type="primary"
                            icon="el-icon-s-tools"
                            size="mini"
                        >列设置
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
    name: 'InventoryAdjustmentOrder',
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
                    label: '调整单单号',
                    width: '',
                    sortable: true,
                    render: (h, params) => {
                        return h('span', {
                            style: {
                                color: '#00a2ff',
                                cursor: 'pointer'
                            }
                        }, params.row.code);
                    }
                },
                {
                    prop: 'name',
                    label: '门店名称',
                    width: ''
                },
                {
                    prop: 'concat',
                    label: '调整方式',
                    width: ''
                },
                {
                    prop: 'mobile',
                    label: '单据状态',
                    width: '',
                    render: (h, params) => {
                        return h('span', {
                            style: {
                                color: '#00a2ff',
                                cursor: 'pointer'
                            }
                        }, params.row.mobile);
                    }
                },
                {
                    prop: 'mobile',
                    label: '数量',
                    width: '',
                    sortable: true
                },
                {
                    prop: 'mobile',
                    label: '单据金额',
                    width: '',
                    sortable: true
                },
                {
                    prop: 'mobile',
                    label: '制单人',
                    width: ''
                },
                {
                    prop: 'mobile',
                    label: '修改人',
                    width: ''
                },
                {
                    prop: 'mobile',
                    label: '调整日期',
                    width: '',
                    sortable: true
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
                    prop: 'handle',
                    label: '操作',
                    width: 180,
                    render: (h, params) => {
                        return h('div', [
                            h('el-button', {
                                props: {
                                    icon: 'el-icon-search',
                                    size: 'mini'
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
                                    icon: 'el-icon-delete',
                                    size: 'mini',
                                    type: 'danger'
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
                    label: '调整方式',
                    prop: 'store',
                    element: 'el-select',
                    initValue: undefined,
                    placeholder: '调整方式',
                    clearable: true,
                    options: [
                        {
                            label: '调入',
                            value: 1
                        },
                        {
                            label: '调出',
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
                    label: '单据状态',
                    prop: 'status',
                    element: 'el-select',
                    clearable: true,
                    placeholder: '请选择单据状态',
                    options: [
                        {
                            label: '待审核',
                            value: 1
                        },
                        {
                            label: '已审核',
                            value: 2
                        }
                    ]
                }
            ]
        };
    },

    methods: {
        /**
         * 搜索
         */
        handleSearch() {

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

