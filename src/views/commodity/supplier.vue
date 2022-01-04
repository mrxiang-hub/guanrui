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
                        >新增
                        </el-button>
                        <el-button
                            type="primary"
                            icon="el-icon-upload2"
                            size="mini"
                            @click="handleImport"
                        >导入
                        </el-button>
                        <el-button
                            type="primary"
                            icon="el-icon-download"
                            size="mini"
                            @click="handleExport"
                        >导出
                        </el-button>
                    </div>
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
        <CustomDialog :title="dialogTitle" :show="isShowDialog" @close="closeDialog">
            <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-position="left" label-width="100px" inline>
                <el-form-item label="编号">
                    <el-input v-model="ruleForm.numbers" placeholder="编号" size="small" clearable></el-input>
                </el-form-item>
                <el-form-item label="名称" prop="name">
                    <el-input v-model="ruleForm.name" placeholder="供应商名称" size="small" clearable></el-input>
                </el-form-item>
                <el-form-item label="联系人" prop="contacts">
                    <el-input v-model="ruleForm.contacts" placeholder="联系人" size="small" clearable></el-input>
                </el-form-item>
                <el-form-item label="联系电话">
                    <el-input v-model="ruleForm.mobile" placeholder="联系电话" size="small" clearable></el-input>
                </el-form-item>
                <el-form-item label="经营方式">
                    <el-input v-model="ruleForm.mode" placeholder="请选择经营方式" size="small" clearable></el-input>
                </el-form-item>
                <el-form-item label="业务员姓名">
                    <el-input v-model="ruleForm.salesman" placeholder="业务员姓名" size="small" clearable></el-input>
                </el-form-item>
                <el-form-item label="业务员电话">
                    <el-input v-model="ruleForm.salesmanPhone" placeholder="业务员电话" size="small" clearable></el-input>
                </el-form-item>
                <el-form-item label="省份">
                    <el-input v-model="ruleForm.province" placeholder="请选择省份" size="small" clearable></el-input>
                </el-form-item>
                <el-form-item label="城市">
                    <el-input v-model="ruleForm.city" placeholder="请选择城市" size="small" clearable></el-input>
                </el-form-item>
                <el-form-item label="详细地址">
                    <el-input v-model="ruleForm.address" placeholder="详细地址" size="small" clearable></el-input>
                </el-form-item>
            </el-form>
            <template #footer>
                <el-button @click="handleSubmit" type="primary" size="medium" :loading="isLoading">保存</el-button>
                <el-button @click="closeDialog" size="medium">取消</el-button>
                <el-button @click="resetForm" size="medium">重置</el-button>
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
    name: 'supplier',
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
                    label: '供应商编码',
                    width: ''
                },
                {
                    prop: 'name',
                    label: '供应商名称',
                    width: ''
                },
                {
                    prop: 'concat',
                    label: '联系人',
                    width: ''
                },
                {
                    prop: 'mobile',
                    label: '联系电话',
                    width: '',
                    sortable: true
                },
                {
                    prop: 'mode',
                    label: '经营方式',
                    width: ''
                },
                {
                    prop: 'province',
                    label: '省份',
                    width: ''
                },
                {
                    prop: 'city',
                    label: '城市',
                    width: ''
                },
                {
                    prop: 'address',
                    label: '地址',
                    width: ''
                },
                {
                    prop: 'salesman',
                    label: '业务员',
                    width: ''
                },
                {
                    prop: 'phone',
                    label: '业务员电话',
                    width: ''
                },
                {
                    prop: 'createTime',
                    label: '创建时间',
                    width: '',
                    sortable: true
                },
                {
                    prop: 'updateTime',
                    label: '更新时间',
                    width: '',
                    sortable: true
                },
                {
                    prop: 'handle',
                    label: '操作',
                    width: 180
                }
            ],
            tableData: [
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
                    createTime: '1636727628061',
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
                    createTime: '1636727628062',
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
                    createTime: '1636727628064',
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
                    createTime: '1636727628065',
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
                    createTime: '1636727628066',
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
                    createTime: '1636727628067',
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
                    createTime: '1636727628068',
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
                    createTime: '1636727628069',
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
            ],
            ruleForm: {
                numbers: '', // 编号
                name: '', // 名称
                contacts: '', // 联系人
                mobile: '', // 联系电话
                mode: '', // 经营方式
                salesman: '', // 业务员姓名
                salesmanPhone: '', // 业务员电话
                province: '', // 省份
                city: '', // 城市
                address: '' // 详细地址
            },
            rules: {
                name: [
                    { required: true, message: '请输入供应商名称', trigger: 'change' }
                ],
                contacts: [
                    { required: true, message: '请输入联系人', trigger: 'change' }
                ]
            },
            isShowDialog: false, // 是否显示弹窗
            dialogTitle: '新增供应商', // 弹窗标题
            isLoading: false
        };
    },

    methods: {
        /**
         * 新增
         */
        handleAdd() {
            this.dialogTitle = '新增供应商';
            this.isShowDialog = true;
        },
        /**
         * 导入
         */
        handleImport() {

        },
        /**
         * 导出
         */
        handleExport() {

        },
        /**
         * 编辑
         * @param data
         */
        handleEdit(data) {
            this.dialogTitle = '编辑供应商';
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
         * 重置表单
         */
        resetForm() {
            this.ruleForm = Object.assign(this.ruleForm, this.$options.data().ruleForm);
            this.$refs['ruleForm'].resetFields();
        },
        /**
         * 提交表单
         */
        handleSubmit() {
            this.isLoading = true;
            setTimeout(() => {
                this.closeDialog();
                this.isLoading = false;
            }, 1000);
        },
        /**
         * 删除
         * @param data
         */
        handleDelete(data) {
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
         * 搜索
         */
        handleSearch() {
            this.onValidate(() => {
                this.$emit('onSearch', this.formData);
            });
        }
    }
};
</script>
<style lang="scss" scoped>

</style>

