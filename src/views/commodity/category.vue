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
                <el-button
                    size="mini"
                    @click="handleReset"
                >重置
                </el-button>
            </template>
        </SearchForm>
        <div class="app-container__body">
            <div class="app-container__body-tree">
                <el-tree
                    :data="treeData"
                    :props="defaultProps"
                    @node-click="handleNodeClick"
                />
            </div>
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
            :current-page="pagination.currentPage"
            :page-sizes="[5, 10, 15, 20]"
            :page-size="pagination.pageSize"
            layout="total, sizes, prev, pager, next, jumper"
            :total="pagination.total"
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
        />
        <CustomDialog :title="dialogTitle" :show="isShowDialog" @close="closeDialog">
            <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" label-position="left">
                <el-form-item label="父类名称" prop="parentTypeName">
                    <el-input placeholder="父类名称" size="small" v-model="ruleForm.parentTypeName"></el-input>
                </el-form-item>
                <el-form-item label="分类编码" prop="typeCode">
                    <el-input placeholder="分类编码" size="small" v-model="ruleForm.typeCode"></el-input>
                </el-form-item>
                <el-form-item label="分类名称" prop="typeName">
                    <el-input placeholder="分类名称" size="small" v-model="ruleForm.typeName"></el-input>
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
    name: 'category',
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
                    label: '类别编码',
                    width: '',
                    sortable: true
                },
                {
                    prop: 'name',
                    label: '类别名称',
                    width: ''
                },
                {
                    prop: 'concat',
                    label: '上级类别编码',
                    width: ''
                },
                {
                    prop: 'mobile',
                    label: '上级类别名称',
                    width: ''
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
                    placeholder: '类别编码/类别名称',
                    clearable: true
                }
            ],
            treeData: [
                {
                    label: '男装'
                },
                {
                    label: '女装'
                },
                {
                    label: '鞋子'
                },
                {
                    label: '童装',
                    children: [
                        {
                            label: '男童'
                        }
                    ]
                },
                {
                    label: '裤子'
                }
            ],
            defaultProps: {
                children: 'children',
                label: 'label',
                disabled: 'disabled',
                isLeaf: 'isLeaf'
            },
            dialogTitle: '新增类别',
            isShowDialog: false,
            ruleForm: {
                parentTypeName: '',
                typeCode: '',
                typeName: ''
            },
            rules: {
                parentTypeName: [
                    { required: true, message: '请输入父类名称', trigger: 'change' }
                ],
                typeCode: [
                    { required: true, message: '请输入分类编码', trigger: 'change' }
                ],
                typeName: [
                    { required: true, message: '请输入分类名称', trigger: 'change' }
                ]
            },
            isLoading: false
        };
    },

    methods: {
        /**
         * 编辑
         * @param data
         */
        handleEdit(data) {
            this.dialogTitle = '编辑分类';
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

        },
        /**
         * 新增
         */
        handleAdd() {
            this.dialogTitle = '新增类别';
            this.isShowDialog = true;
        },
        /**
         * 关闭弹窗
         */
        closeDialog() {
            this.isShowDialog = false;
            this.ruleForm = Object.assign(this.ruleForm, this.$options.data().ruleForm);
            this.$refs['ruleForm'].resetFields();
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
        },
        /**
         * 点击树形控件节点
         * @param data
         */
        handleNodeClick(data) {
        }
    }
};
</script>
<style lang="scss" scoped>
.app-container {
    &__body {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: flex-start;
    }

    &__body-tree {
        width: 200px;
        height: 100%;
        border: 1px solid #e4e7ed;
        border-radius: 8px;
        margin-right: 20px;
        padding-top: 20px;
    }

    &__body-table {
        height: 100%;
        flex: 1;
    }
}
</style>

