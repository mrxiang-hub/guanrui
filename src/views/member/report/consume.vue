<template>
    <div class="app-container">
        <el-tabs v-model="tabIndex" @tab-click="handleClick">
            <el-tab-pane label="消费明细" name="detail"></el-tab-pane>
            <el-tab-pane label="会员卡消费汇总" name="memberSummary"></el-tab-pane>
            <el-tab-pane label="消费汇总" name="summary"></el-tab-pane>
        </el-tabs>
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
                <CustomTable :columns="columns" :table-data='tableData'>
                    <div slot="header" class="app-container__table-header">
                        <el-button
                            type="primary"
                            icon="el-icon-upload2"
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
    name: 'consume',
    components: {
        SearchForm,
        CustomTable
    },
    data() {
        return {
            tabIndex: 'detail', // 当前选中tab标签
            columns: [
                {
                    prop: 'code',
                    label: '单号',
                    width: 180,
                    sortable: true,
                    fixed: 'left'
                },
                {
                    prop: 'name',
                    label: '类型',
                    width: 180
                },
                {
                    prop: 'concat',
                    label: '会员卡号',
                    width: 180
                },
                {
                    prop: 'mobile',
                    label: '姓名',
                    width: 180
                },
                {
                    prop: 'mode',
                    label: '手机号',
                    width: 180
                },
                {
                    prop: 'province',
                    label: '会员等级',
                    width: 180
                },
                {
                    prop: 'province',
                    label: '原价（元）',
                    width: 180
                },
                {
                    prop: 'province',
                    label: '售价（元）',
                    width: 180
                },
                {
                    prop: 'province',
                    label: '金额（元）',
                    width: 180
                },
                {
                    prop: 'province',
                    label: '优惠金额（元）',
                    width: 180
                },
                {
                    prop: 'province',
                    label: '商品款号',
                    width: 180
                },
                {
                    prop: 'province',
                    label: '商品名称',
                    width: 180
                },
                {
                    prop: 'province',
                    label: '数量',
                    width: 180
                },
                {
                    prop: 'province',
                    label: '收银员',
                    width: 180
                },
                {
                    prop: 'province',
                    label: '消费日期',
                    width: 180,
                    sortable: true,
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
                    placeholder: '单号/会员姓名/卡号',
                    clearable: true
                },
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
                    label: '会员等级',
                    prop: 'level',
                    element: 'el-select',
                    initValue: undefined,
                    placeholder: '请选择会员等级',
                    clearable: true,
                    options: [
                        {
                            label: '微会员',
                            value: '1'
                        },
                        {
                            label: '普通会员',
                            value: '2'
                        },
                        {
                            label: '白银会员',
                            value: '3'
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
         * 点击顶部tab导航栏
         * @param e
         */
        handleClick(e) {

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

