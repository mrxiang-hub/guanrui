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
    name: 'ModifyPrice',
    mixins: [TableMixin],
    components: {
        SearchForm,
        CustomTable
    },
    data() {
        return {
            columns: [
                {
                    prop: 'code',
                    label: '商品款号',
                    width: '',
                    sortable: true
                },
                {
                    prop: 'name',
                    label: '商品名称',
                    width: ''
                },
                {
                    prop: 'concat',
                    label: '自编码',
                    width: ''
                },
                {
                    prop: 'mobile',
                    label: '供应商',
                    width: ''
                },
                {
                    prop: 'mobile',
                    label: '商品类别',
                    width: ''
                },
                {
                    prop: 'mobile',
                    label: '品牌',
                    width: ''
                },
                {
                    prop: 'mobile',
                    label: '调价门店',
                    width: ''
                },
                {
                    prop: 'mobile',
                    label: '原进价',
                    width: '',
                    sortable: true
                },
                {
                    prop: 'mobile',
                    label: '现进价',
                    width: '',
                    sortable: true
                },
                {
                    prop: 'mobile',
                    label: '原售价',
                    width: '',
                    sortable: true
                },
                {
                    prop: 'mobile',
                    label: '现售价',
                    width: '',
                    sortable: true
                },
                {
                    prop: 'mobile',
                    label: '现会员价',
                    width: '',
                    sortable: true
                },
                {
                    prop: 'mobile',
                    label: '生效时间',
                    width: '',
                    sortable: true
                },
                {
                    prop: 'mobile',
                    label: '原会员价',
                    width: '',
                    sortable: true
                },
                {
                    prop: 'mobile',
                    label: '单据编号',
                    width: '',
                    render: (h, params) => {
                        console.log(params);
                        return h('span', {
                            style: {
                                color: '#00a2ff',
                                cursor: 'pointer'
                            },
                            attrs: {
                                title: params.row.mobile
                            },
                            on: {
                                click: () => {

                                }
                            }
                        }, params.row.mobile);
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
                    placeholder: '商品款号/自编码/单据编号',
                    clearable: true
                },
                {
                    label: '调价门店',
                    prop: 'store',
                    element: 'el-select',
                    initValue: '1',
                    placeholder: '门店选择',
                    clearable: true,
                    options: [
                        { label: '管瑞技术测试总部', value: '1' },
                        { label: '管瑞技术测试分店', value: '2' }
                    ]
                },
                {
                    label: '供应商',
                    prop: 'keyWord',
                    element: 'el-input',
                    initValue: undefined,
                    placeholder: '请选择供应商',
                    clearable: true
                },
                {
                    label: '商品类别',
                    prop: 'keyWord',
                    element: 'el-input',
                    initValue: undefined,
                    placeholder: '请选择商品类别',
                    clearable: true
                },
                {
                    label: '开始日期',
                    prop: 'startTime',
                    element: 'el-date-picker',
                    initValue: '',
                    placeholder: '选择开始日期',
                    clearable: true,
                    type: 'date'
                },
                {
                    label: '结束日期',
                    prop: 'endTime',
                    element: 'el-date-picker',
                    initValue: '',
                    placeholder: '选择结束日期',
                    clearable: true,
                    type: 'date'
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

