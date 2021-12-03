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
                            icon="el-icon-plus"
                            size="mini"
                        >新增会员
                        </el-button>
                    </div>
                    <template #handle="slotProps">
                        <el-button
                            class="handle-table-btn"
                            type="primary"
                            icon="el-icon-edit"
                            size="mini"
                            @click="handleEidt(slotProps.row)"
                        >编辑
                        </el-button>
                        <el-button
                            class="handle-table-btn"
                            type="danger"
                            icon="el-icon-delete"
                            size="mini"
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
import CustomTable from '@/components/customTable';
import SearchForm from '@/components/seachForm';

export default {
    name: 'doc',
    components: {
        SearchForm,
        CustomTable
    },
    data() {
        return {
            columns: [
                {
                    prop: 'code',
                    label: '会员卡号',
                    width: 180,
                    sortable: true
                },
                {
                    prop: 'name',
                    label: '会员姓名',
                    width: 180
                },
                {
                    prop: 'concat',
                    label: '自编码',
                    width: 180
                },
                {
                    prop: 'mobile',
                    label: '开卡门店',
                    width: 180
                },
                {
                    prop: 'mobile',
                    label: '会员等级',
                    width: 180,
                    sortable: true
                },
                {
                    prop: 'mobile',
                    label: '电话',
                    width: 180,
                    sortable: true
                },
                {
                    prop: 'mobile',
                    label: '性别',
                    width: 180,
                    sortable: true
                },
                {
                    prop: 'mobile',
                    label: '生日',
                    width: 180,
                    sortable: true
                },
                {
                    prop: 'mobile',
                    label: '消费总额',
                    width: 180,
                    sortable: true
                },
                {
                    prop: 'mobile',
                    label: '当前余额',
                    width: 180,
                    sortable: true
                },
                {
                    prop: 'mobile',
                    label: '当前积分',
                    width: 180,
                    sortable: true
                },
                {
                    prop: 'mobile',
                    label: '状态',
                    width: 180,
                    sortable: true
                },
                {
                    prop: 'mobile',
                    label: '创建人',
                    width: 180,
                    sortable: true
                },
                {
                    prop: 'mobile',
                    label: '修改人',
                    width: 180,
                    sortable: true
                },
                {
                    prop: 'handle',
                    label: '操作',
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
                    prop: 'keyWords',
                    element: 'el-input',
                    initValue: undefined,
                    placeholder: '会员姓名/手机号/会员卡号',
                    clearable: true
                },
                {
                    label: '开卡门店',
                    prop: 'store',
                    element: 'el-select',
                    initValue: undefined,
                    placeholder: '门店选择',
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
                    prop: 'store',
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
                            value: '2'
                        }
                    ]
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

