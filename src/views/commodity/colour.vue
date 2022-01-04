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
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="pagination.currentPage"
            :page-sizes="[5, 10, 15, 20]"
            :page-size="pagination.pageSize"
            layout="total, sizes, prev, pager, next, jumper"
            :total="pagination.total"
        >
        </el-pagination>
        <CustomDialog :title="dialogTitle" :show="isShowDialog" @close="closeDialog">
            <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-position="left" label-width="100px">
                <el-form-item label="颜色编码" prop="code">
                    <el-input placeholder="请输入颜色编码" v-model="ruleForm.code" size="small"></el-input>
                </el-form-item>
                <el-form-item label="颜色名称" prop="name">
                    <el-input placeholder="请输入颜色名称" v-model="ruleForm.name" size="small"></el-input>
                </el-form-item>
            </el-form>
            <template #footer>
                <el-button type="primary" size="medium" @click="handleSubmit">确定</el-button>
                <el-button size="medium" @click="closeDialog">取消</el-button>
                <el-button size="medium" @click="resetForm">重置</el-button>
            </template>
        </CustomDialog>
    </div>
</template>

<script>
import CustomTable from '@/components/customTable';
import SearchForm from '@/components/seachForm';
import TableMixin from '@/mixin/table';
import CustomDialog from '@/components/customDialog/customDialog';

export default {
    name: 'colour',
    mixins: [TableMixin],
    components: {
        SearchForm,
        CustomTable,
        CustomDialog
    },
    data() {
        return {
            columns: [
                {
                    prop: 'code',
                    label: '颜色编码',
                    width: '',
                    sortable: true
                },
                {
                    prop: 'name',
                    label: '颜色名称',
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
                    placeholder: '颜色编码/颜色名称',
                    clearable: true
                }
            ],
            dialogTitle: '新增颜色',
            isShowDialog: false,
            ruleForm: {
                code: '',
                name: ''
            },
            rules: {
                code: [
                    { required: true, message: '请输入颜色编码', trigger: 'change' }
                ],
                name: [
                    { required: true, message: '请输入颜色名称', trigger: 'change' }
                ]
            }
        };
    },

    methods: {
        /**
         * 新增
         */
        handleAdd() {
            this.dialogTitle = '新增颜色';
            this.isShowDialog = true;
        },
        /**
         * 编辑
         * @param data
         */
        handleEdit(data) {
            this.dialogTitle = '编辑颜色';
            this.isShowDialog = true;
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
            this.$refs['ruleForm'].validate((valid) => {
                if (valid) {
                    this.isLoading = true;
                    setTimeout(() => {
                        this.closeDialog();
                        this.isLoading = false;
                    }, 1000);
                } else {
                    return false;
                }
            });
        }
    }
};
</script>
<style lang="scss" scoped>

</style>

