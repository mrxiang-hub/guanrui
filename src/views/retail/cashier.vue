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
                <el-button size="mini">重置</el-button>
            </template>
        </SearchForm>
        <div class="app-container__body">
            <div class="app-container__body-table">
                <CustomTable :columns="columns" :table-data="tableData">
                    <div slot="header" class="app-container__table-header">
                        <el-button
                            type="primary"
                            size="mini"
                            icon="el-icon-setting"
                        >列设置
                        </el-button>
                        <el-button
                            type="primary"
                            size="mini"
                            icon="el-icon-upload2"
                        >导出
                        </el-button>
                    </div>
                    <template #handle="slotProps">
                        <el-button
                            class="handle-table-btn"
                            icon="el-icon-search"
                            size="mini"
                            @click="handleView(slotProps.row)"
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
import CustomTable from '@/components/customTable';
import SearchForm from '@/components/seachForm';

export default {
    name: 'Cashier',
    components: {
        SearchForm,
        CustomTable
    },
    data() {
        return {
            columns: [
                {
                    prop: 'code',
                    label: '门店名称',
                    width: 180,
                    sortable: true,
                    fixed: 'left'
                },
                {
                    prop: 'name',
                    label: '现金（实收）',
                    width: 180,
                    sortable: true
                },
                {
                    prop: 'mobile',
                    label: '会员充值',
                    width: 180,
                    sortable: true
                },
                {
                    prop: 'mobile',
                    label: '微信',
                    width: 180,
                    sortable: true
                },
                {
                    prop: 'mobile',
                    label: '支付宝',
                    width: 180,
                    sortable: true
                },
                {
                    prop: 'mobile',
                    label: '银行卡',
                    width: 180,
                    sortable: true
                },
                {
                    prop: 'mobile',
                    label: '会员卡',
                    width: 180,
                    sortable: true
                },
                {
                    prop: 'mobile',
                    label: '优惠券',
                    width: 180,
                    sortable: true
                },
                {
                    prop: 'mobile',
                    label: '会员积分',
                    width: 180,
                    sortable: true
                },
                {
                    prop: 'mobile',
                    label: '总数量',
                    width: 180,
                    sortable: true
                },
                {
                    prop: 'mobile',
                    label: '销售额',
                    width: 180,
                    sortable: true
                },
                {
                    prop: 'mobile',
                    label: '营业额',
                    width: 180,
                    sortable: true
                },
                {
                    prop: 'mobile',
                    label: '退款',
                    width: 180,
                    sortable: true
                },
                {
                    prop: 'mobile',
                    label: '退款（现金）',
                    width: 180,
                    sortable: true
                },
                {
                    prop: 'mobile',
                    label: '退款（会员卡）',
                    width: 180,
                    sortable: true
                },
                {
                    prop: 'mobile',
                    label: '退款（优惠券）',
                    width: 180,
                    sortable: true
                },
                {
                    prop: 'mobile',
                    label: '退款（会员积分）',
                    width: 180,
                    sortable: true
                },
                {
                    prop: 'mobile',
                    label: '交班时间',
                    width: 180,
                    sortable: true
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
                    label: '门店',
                    prop: 'store',
                    element: 'el-select',
                    initValue: undefined,
                    placeholder: '请选择门店',
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
        },
        handleView(data) {
            console.log(data, 111);
        }
    }
};
</script>
<style lang="scss" scoped>

</style>

