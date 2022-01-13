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
                            @click="handleAdd"
                        >新增会员
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
        <CustomDialog :title="dialogTitle" :show="isShowDialog" @close="closeDialog">
            <el-form ref="ruleForm" :model="ruleForm" :rules="rules" label-position="left" label-width="100px" inline>
                <el-form-item label="会员姓名" prop="name">
                    <el-input v-model="ruleForm.name" placeholder="会员姓名" size="small" clearable />
                </el-form-item>
                <el-form-item label="会员等级" prop="level">
                    <el-select v-model="ruleForm.level" prop="level" size="small" clearable placeholder="请选择会员等级">
                        <el-option label="黄金会员" value="1" />
                        <el-option label="白银会员" value="2" />
                        <el-option label="青铜会员" value="3" />
                    </el-select>
                </el-form-item>
                <el-form-item label="联系电话" prop="phone">
                    <el-input v-model="ruleForm.phone" placeholder="联系电话" size="small" clearable />
                </el-form-item>
                <el-form-item label="会员状态" prop="level">
                    <el-select v-model="ruleForm.status" prop="status" size="small" clearable placeholder="请选择会员状态">
                        <el-option label="正常" value="1" />
                        <el-option label="锁定" value="2" />
                    </el-select>
                </el-form-item>
                <el-form-item label="卡密码" prop="pwd">
                    <el-input v-model="ruleForm.pwd" placeholder="会员卡密码" size="small" clearable />
                </el-form-item>
                <el-form-item label="会员积分" prop="integral">
                    <el-input v-model="ruleForm.integral" placeholder="当前积分" size="small" clearable />
                </el-form-item>
                <el-form-item label="卡余额" prop="balance">
                    <el-input v-model="ruleForm.balance" placeholder="当前余额" size="small" clearable />
                </el-form-item>
                <el-form-item label="会员生日" prop="birthday">
                    <el-date-picker v-model="ruleForm.birthday" placeholder="选择生日" size="small" clearable />
                </el-form-item>
                <el-form-item label="性别" prop="gender">
                    <el-select v-model="ruleForm.gender" prop="status" size="small" clearable placeholder="请选择性别">
                        <el-option label="男" value="1" />
                        <el-option label="女" value="2" />
                    </el-select>
                </el-form-item>
                <el-form-item label="备注" prop="remark">
                    <el-input v-model="ruleForm.remark" placeholder="备注" size="small" clearable />
                </el-form-item>
            </el-form>
            <template #footer>
                <el-button type="primary" size="medium" @click="handleSubmit" :loading="isLoading">确定</el-button>
                <el-button size="medium" @click="closeDialog">取消</el-button>
                <el-button size="medium" @click="resetForm">重置</el-button>
            </template>
        </CustomDialog>
    </div>
</template>

<script>
import CustomTable from '@/components/customTable';
import SearchForm from '@/components/seachForm';
import CustomDialog from '@/components/customDialog/customDialog';
import TableMixin from '@/mixin/table';

export default {
    name: 'Doc',
    components: {
        SearchForm,
        CustomTable,
        CustomDialog
    },
    mixins: [TableMixin],
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
                    fixed: 'right',
                    render: (h, params) => {
                        return h('div', [
                            h('el-button', {
                                props: {
                                    size: 'mini',
                                    type: 'primary',
                                    icon: 'el-icon-edit'
                                },
                                style: {
                                    'padding': '5px',
                                    'font-size': '12px'
                                },
                                on: {
                                    click: () => {
                                        this.dialogTitle = '编辑会员';
                                        this.isShowDialog = true;
                                    }
                                }
                            }, '编辑'),
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
                }
            ],
            dialogTitle: '新增会员',
            isShowDialog: false,
            ruleForm: {
                name: '',
                level: '',
                phone: '',
                status: '',
                pwd: '',
                integral: '',
                balance: '',
                birthday: '',
                gender: '',
                remark: ''
            },
            rules: {
                name: [
                    { required: true, message: '请输入会员姓名', trigger: 'change' }
                ],
                level: [
                    { required: true, message: '请选择会员等级', trigger: 'change' }
                ],
                phone: [
                    { required: true, message: '请输入会员手机号', trigger: 'change' }
                ],
                status: [
                    { required: true, message: '请选择会员状态', trigger: 'change' }
                ],
                pwd: [
                    { required: true, message: '请输入会员卡密码', trigger: 'change' }
                ],
                integral: [
                    { required: true, message: '请输入会员卡积分', trigger: 'change' }
                ],
                balance: [
                    { required: true, message: '请输入会员余额', trigger: 'change' }
                ],
                birthday: [
                    { required: true, message: '请选择会员生日', trigger: 'change' }
                ],
                gender: [
                    { required: true, message: '请选择性别', trigger: 'change' }
                ],
                remark: [
                    { required: true, message: '请输入备注', trigger: 'change' }
                ]
            },
            isLoading: false
        };
    },

    methods: {
        /**
         * 搜索
         */
        handleSearch() {

        },
        /**
         * 新增会员
         */
        handleAdd() {
            this.dialogTitle = '新增会员';
            this.isShowDialog = true;
        },
        /**
         * 关闭弹窗
         */
        closeDialog() {
            this.isShowDialog = false;
            this.resetForm();
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

        },
        /**
         * 提交表单
         */
        handleSubmit() {
            this.$refs['ruleForm'].validate((validator) => {
                if (validator) {
                    this.isLoading = true;
                    setTimeout(() => {
                        this.isLoading = false;
                        this.closeDialog();
                    }, 1000);
                } else {
                    return false;
                }
            });
        },
        /**
         * 重置表单
         */
        resetForm() {
            this.ruleForm = Object.assign(this.ruleForm, this.$options.data().ruleForm);
            this.$refs['ruleForm'].resetFields();
        }
    }
};
</script>
<style lang="scss" scoped>

</style>

