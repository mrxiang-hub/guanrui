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
                            icon="el-icon-refresh-left"
                            size="mini"
                        >一键同步
                        </el-button>
                        <el-button
                            type="primary"
                            icon="el-icon-refresh-left"
                            size="mini"
                        >同步
                        </el-button>
                        <el-button
                            type="primary"
                            icon="el-icon-printer"
                            size="mini"
                        >条码打印
                        </el-button>
                        <el-button
                            type="primary"
                            icon="el-icon-upload2"
                            size="mini"
                        >导入
                        </el-button>
                        <el-button
                            type="primary"
                            icon="el-icon-s-tools"
                            size="mini"
                        >列设置
                        </el-button>
                        <el-button
                            type="primary"
                            icon="el-icon-download"
                            size="mini"
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
            <el-form ref="ruleForm" :model="ruleForm" :rules="rules" label-width="100px" label-position="left" inline>
                <el-form-item label="商品款号">
                    <el-input placeholder="请输入商品款号" size="small" />
                </el-form-item>
                <el-form-item label="供应商">
                    <el-input placeholder="请选择供应商" size="small" />
                </el-form-item>
                <el-form-item label="商品名称">
                    <el-input placeholder="请输入商品名称" size="small" />
                </el-form-item>
                <el-form-item label="商品类型">
                    <el-input placeholder="请选择商品类型" size="small" />
                </el-form-item>
                <el-form-item label="自编码">
                    <el-input placeholder="请输入自编码" size="small" />
                </el-form-item>
                <el-form-item label="商品品牌">
                    <el-input placeholder="请选择商品品牌" size="small" />
                </el-form-item>
                <el-form-item label="执行标准">
                    <el-input placeholder="请输入执行标准" size="small" />
                </el-form-item>
                <el-form-item label="商品状态">
                    <el-input placeholder="请选择商品状态" size="small" />
                </el-form-item>
                <el-form-item label="安全标准">
                    <el-input placeholder="请输入安全标准" size="small" />
                </el-form-item>
                <el-form-item label="季节">
                    <el-input placeholder="请选择季节" size="small" />
                </el-form-item>
                <el-form-item label="库存上限">
                    <el-input placeholder="请输入库存上限" size="small" />
                </el-form-item>
                <el-form-item label="单位">
                    <el-input placeholder="请选择单位" size="small" />
                </el-form-item>
                <el-form-item label="库存下限">
                    <el-input placeholder="请输入库存下限" size="small" />
                </el-form-item>
                <el-form-item label="创建人">
                    <el-input placeholder="请输入创建人" size="small" />
                </el-form-item>
                <el-form-item label="材料">
                    <el-input placeholder="请输入材料" size="small" />
                </el-form-item>
                <el-form-item label="年份">
                    <el-input placeholder="请选择年份" size="small" />
                </el-form-item>
                <el-form-item label="进货价">
                    <el-input placeholder="请输入进货价" size="small" />
                </el-form-item>
                <el-form-item label="性别">
                    <el-input placeholder="请选择性别" size="small" />
                </el-form-item>
                <el-form-item label="零售价">
                    <el-input placeholder="请输入零售价" size="small" />
                </el-form-item>
                <el-form-item label="会员价">
                    <el-input placeholder="请输入会员价" size="small" />
                </el-form-item>
                <el-form-item label="状态">
                    <el-switch />
                </el-form-item>
                <el-form-item label="会员折扣">
                    <el-switch />
                </el-form-item>
                <el-form-item label="颜色尺码">
                    <el-switch />
                </el-form-item>
                <el-form-item label="商品图片">
                    <el-upload
                        action="#"
                        list-type="picture-card"
                        :auto-upload="false"
                    >
                        <i slot="default" class="el-icon-plus" />
                        <div slot="file" slot-scope="{file}">
                            <img
                                class="el-upload-list__item-thumbnail"
                                :src="file.url"
                                alt=""
                            >
                            <!--                            <span class="el-upload-list__item-actions">-->
                            <!--                                <span-->
                            <!--                                    class="el-upload-list__item-preview"-->
                            <!--                                    @click="handlePictureCardPreview(file)"-->
                            <!--                                >-->
                            <!--                                    <i class="el-icon-zoom-in" />-->
                            <!--                                </span>-->
                            <!--                                <span-->
                            <!--                                    v-if="!disabled"-->
                            <!--                                    class="el-upload-list__item-delete"-->
                            <!--                                    @click="handleDownload(file)"-->
                            <!--                                >-->
                            <!--                                    <i class="el-icon-download" />-->
                            <!--                                </span>-->
                            <!--                                <span-->
                            <!--                                    v-if="!disabled"-->
                            <!--                                    class="el-upload-list__item-delete"-->
                            <!--                                    @click="handleRemove(file)"-->
                            <!--                                >-->
                            <!--                                    <i class="el-icon-delete" />-->
                            <!--                                </span>-->
                            <!--                            </span>-->
                        </div>
                    </el-upload>
                </el-form-item>
                <el-form-item label="备注">
                    <el-input placeholder="请输入备注" />
                </el-form-item>
            </el-form>
            <template #footer>
                <el-button size="medium" type="primary" @click="handleSubmit">确定</el-button>
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
                    label: '商品款号',
                    width: '',
                    sortable: true
                },
                {
                    prop: 'name',
                    label: '尺寸名称',
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
                    placeholder: '商品款号/商品名称/自编码',
                    clearable: true
                },
                {
                    label: '供应商',
                    prop: 'supplier',
                    element: 'el-select',
                    initValue: undefined,
                    placeholder: '供应商选择',
                    clearable: true,
                    options: [
                        {
                            label: '上海',
                            value: '1'
                        },
                        {
                            label: '河南',
                            value: '2'
                        },
                        {
                            label: '杭州',
                            value: '3'
                        }
                    ]
                },
                {
                    label: '商品类别',
                    prop: 'type',
                    element: 'el-select',
                    initValue: undefined,
                    placeholder: '商品分类选择',
                    clearable: true,
                    options: [
                        {
                            label: '男装',
                            value: '1'
                        },
                        {
                            label: '女装',
                            value: '2'
                        },
                        {
                            label: '童装',
                            value: '3'
                        }
                    ]
                }
            ],
            dialogTitle: '新增商品',
            isShowDialog: false,
            ruleForm: {},
            rules: {}
        };
    },

    methods: {
        /**
         * 搜索
         */
        handleSearch() {

        },
        /**
         * 编辑
         * @param data
         */
        handleEdit(data) {
            this.dialogTitle = '编辑商品';
            this.isShowDialog = true;
        },
        /**
         * 新增
         */
        handleAdd() {
            this.dialogTitle = '新增商品';
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
         * 关闭弹窗
         */
        closeDialog() {
            this.isShowDialog = false;
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

