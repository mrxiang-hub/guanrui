<template>
    <div class="outer-layer">
        <transition  name="fade-transform" mode="out-in">
            <div v-if="!isShowAddPopup && !isShowViewPopup" class="app-container">
                <SearchForm ref="searchForm" :form-options="formOptions">
                    <template #handleBtn>
                        <el-button
                            type="primary"
                            icon="el-icon-search"
                            size="mini"
                            @click="handleSearch"
                        >查询
                        </el-button>
                        <el-button type="default" size="mini" @click="handleReset">重置</el-button>
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
                                    icon="el-icon-s-tools"
                                    size="mini"
                                    @click="handleSetting"
                                >列设置
                                </el-button>
                            </div>
                            <template slot="handle" slot-scope="slotProps">
                                <el-button
                                    icon="el-icon-search"
                                    class="handle-table-btn"
                                    @click="handleView(slotProps.row)"
                                >查看
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
                <CustomDialog title="自定义报表" :show="isShowDialog" @close="closeDialog">
                    <template #footer>
                        <el-button type="primary" size="medium" @click="handleSubmit">确定</el-button>
                        <el-button size="medium" @click="closeDialog">取消</el-button>
                        <el-button size="medium">重置</el-button>
                    </template>
                </CustomDialog>
            </div>
        </transition>
        <transition  name="fade-transform" mode="out-in">
            <AddPopup v-if="isShowAddPopup" @closePopup="closePopup"></AddPopup>
        </transition>
        <transition  name="fade-transform" mode="out-in">
            <ViewPopup v-if="isShowViewPopup" @closePopup="closePopup"></ViewPopup>
        </transition>
    </div>
</template>

<script>
import CustomTable from '@/components/customTable';
import SearchForm from '@/components/seachForm';
import CustomDialog from '@/components/customDialog/customDialog';
import AddPopup from './components/addPopup';
import ViewPopup from './components/viewPopup';
import TableMixin from '@/mixin/table';

export default {
    name: 'Order',
    components: {
        SearchForm,
        CustomTable,
        CustomDialog,
        AddPopup,
        ViewPopup
    },
    mixins: [TableMixin],
    data() {
        return {
            columns: [
                {
                    prop: 'code',
                    label: '采购单号',
                    width: '',
                    sortable: true
                },
                {
                    prop: 'name',
                    label: '供应商名称',
                    width: '',
                    sortable: true
                },
                {
                    prop: 'concat',
                    label: '采购门店',
                    width: '',
                    sortable: true
                },
                {
                    prop: 'mobile',
                    label: '制单人',
                    width: ''
                },
                {
                    prop: 'mode',
                    label: '制单日期',
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
                    placeholder: '供应商编码/名称/联系人',
                    clearable: true
                },
                {
                    label: '门店',
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
                    label: '供应商',
                    prop: 'supplier',
                    element: 'el-input',
                    initValue: undefined,
                    placeholder: '请选择供应商',
                    clearable: true
                },
                {
                    label: '开始日期',
                    prop: 'startTime',
                    element: 'el-date-picker',
                    initValue: undefined,
                    placeholder: '选择开始日期',
                    clearable: true,
                    type: 'date'
                },
                {
                    label: '结束日期',
                    prop: 'endTime',
                    element: 'el-date-picker',
                    initValue: undefined,
                    placeholder: '选择结束日期',
                    clearable: true,
                    type: 'date'
                },
                {
                    label: '单据状态',
                    prop: 'status',
                    element: 'el-radio-group',
                    initValue: '3',
                    radios: [
                        {
                            value: '1',
                            label: '待审核'
                        },
                        {
                            value: '2',
                            label: '已审核'
                        },
                        {
                            value: '3',
                            label: '全部'
                        }
                    ]
                }
            ],
            isShowDialog: false,
            isShowAddPopup: false,
            isShowViewPopup: false
        };
    },

    methods: {
        /**
         * 搜索
         */
        handleSearch() {

        },
        /**
         * 新增
         */
        handleAdd() {
            this.isShowAddPopup = true;
            this.isShowViewPopup = false;
        },
        /**
         * 关闭popup
         */
        closePopup() {
            this.isShowAddPopup = false;
            this.isShowViewPopup = false;
        },
        /**
         * 查看
         * @param data
         */
        handleView(data) {
            this.isShowAddPopup = false;
            this.isShowViewPopup = true;
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
         * 点击列设置按钮
         */
        handleSetting() {
            this.isShowDialog = true;
        },
        /**
         * 关闭弹窗
         */
        closeDialog() {
            this.isShowDialog = false;
        },
        /**
         * 提交
         */
        handleSubmit() {

        }
    }
};
</script>
<style lang="scss" scoped>
    .outer-layer {
        width: 100%;
        height: 100%;
    }
</style>

