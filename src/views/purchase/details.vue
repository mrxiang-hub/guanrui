<template>
    <div class="app-container">
        <SearchForm :form-options="formOptions">
            <template #handleBtn>
                <el-button
                    type="primary"
                    icon="el-icon-search"
                    size="mini"
                >查询
                </el-button>
                <el-button type="default" size="mini">重置</el-button>
            </template>
        </SearchForm>
        <div class="app-container__body">
            <div class="app-container__body-table">
                <CustomTable :columns="columns" :table-data="tableData">
                    <div slot="header" class="app-container__table-header">
                        <el-button
                            type="primary"
                            icon="el-icon-down"
                            size="mini"
                        >导出
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

export default {
    name: 'details',
    components: {
        SearchForm,
        CustomTable
    },
    data() {
        return {
            columns: [
                {
                    prop: 'code',
                    label: '单据编号',
                    width: 180,
                    sortable: true
                },
                {
                    prop: 'name',
                    label: '采购门店',
                    width: 180,
                    sortable: true
                },
                {
                    prop: 'concat',
                    label: '商品款号',
                    width: 180,
                    sortable: true
                },
                {
                    prop: 'mobile',
                    label: '自编码',
                    width: 180,
                    sortable: true
                },
                {
                    prop: 'mode',
                    label: '商品条码',
                    width: 180,
                    sortable: true
                },
                {
                    prop: 'mode',
                    label: '商品名称',
                    width: 180,
                    sortable: true
                },
                {
                    prop: 'mode',
                    label: '颜色',
                    width: 180,
                    sortable: true
                },
                {
                    prop: 'mode',
                    label: '尺码',
                    width: 180,
                    sortable: true
                },
                {
                    prop: 'mode',
                    label: '商品品牌',
                    width: 180
                },
                {
                    prop: 'mode',
                    label: '商品类别',
                    width: 180,
                    sortable: true
                },
                {
                    prop: 'mode',
                    label: '供应商',
                    width: 180,
                    sortable: true
                },
                {
                    prop: 'mode',
                    label: '采购数量',
                    width: 180,
                    sortable: true
                },
                {
                    prop: 'mode',
                    label: '单价',
                    width: 180,
                    sortable: true
                },
                {
                    prop: 'mode',
                    label: '采购金额',
                    width: 180,
                    sortable: true
                },
                {
                    prop: 'mode',
                    label: '单据类型',
                    width: 180,
                    sortable: true
                },
                {
                    prop: 'mode',
                    label: '业务员',
                    width: 180,
                    sortable: true
                },
                {
                    prop: 'mode',
                    label: '单据日期',
                    width: 180,
                    fixed: 'right'
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
                    prop: 'keyWord',
                    element: 'el-date-picker',
                    initValue: undefined,
                    placeholder: '选择开始日期',
                    clearable: true,
                    type: 'date'
                },
                {
                    label: '结束日期',
                    prop: 'keyWord',
                    element: 'el-date-picker',
                    initValue: undefined,
                    placeholder: '选择结束日期',
                    clearable: true,
                    type: 'date'
                }
            ]
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
                this.$emit('onSearch', this.formData);
            });
        },
        // 导出
        onExport() {
            this.onValidate(() => {
                this.$emit('onExport', this.formData);
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
        }
    }
};
</script>
<style lang="scss" scoped>

</style>

