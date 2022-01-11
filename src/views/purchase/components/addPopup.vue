<template>
    <div class="popup">
        <div class="popup__header">
            <div class="popup__title">新增采购订单</div>
            <span class="el-icon-close popup__close-btn" @click="closePopup" />
        </div>
        <SearchForm ref="searchForm" :form-options="formOptions">
            <template #handleBtn>
                <el-button type="default" size="mini" @click="handleReset">重置</el-button>
            </template>
        </SearchForm>
        <div class="popup__body">
            <CustomTable :columns="columns" :table-data="tableData">
                <div slot="header" class="app-container__table-header">
                    <el-button
                        type="primary"
                        icon="el-icon-circle-check"
                        size="mini"
                    >选择商品
                    </el-button>
                </div>
            </CustomTable>
        </div>
        <div class="popup__bottom">
            <div class="popup__remark">
                <span class="popup__remark-label">备注：</span>
                <el-input v-model="remark" type="textarea" placeholder="备注" resize="none" rows="5" />
            </div>
            <div class="popup__btns">
                <el-button type="primary" icon="el-icon-document-checked" size="small">保存</el-button>
                <el-button icon="el-icon-back" size="small" @click="closePopup">返回</el-button>
            </div>
        </div>
    </div>
</template>

<script>
import SearchForm from '@/components/seachForm';
import CustomTable from '@/components/customTable';
import TableMixin from '@/mixin/table';
export default {
    name: 'addPopup',
    components: {
        SearchForm,
        CustomTable
    },
    mixins: [TableMixin],
    data() {
        return {
            formOptions: [
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
                    label: '制单日期',
                    prop: 'startTime',
                    element: 'el-date-picker',
                    initValue: undefined,
                    placeholder: '选择开始日期',
                    clearable: true,
                    type: 'date'
                },
                {
                    label: '单据金额',
                    prop: 'amount',
                    element: 'el-input',
                    initValue: undefined,
                    placeholder: '请输入单据金额',
                    clearable: true
                }
            ],
            columns: [
                {
                    prop: 'concat',
                    label: '序号',
                    width: ''
                },
                {
                    prop: 'name',
                    label: '点此新增行',
                    width: ''
                },
                {
                    prop: 'concat',
                    label: '商品款号',
                    width: ''
                },
                {
                    prop: 'mobile',
                    label: '自编码',
                    width: ''
                },
                {
                    prop: 'mode',
                    label: '商品名称',
                    width: ''
                },
                {
                    prop: 'mode',
                    label: '采购数量',
                    width: ''
                },
                {
                    prop: 'mode',
                    label: '进价（元）',
                    width: ''
                },
                {
                    prop: 'mode',
                    label: '零售价（元）',
                    width: ''
                },
                {
                    prop: 'mode',
                    label: '会员价（元）',
                    width: ''
                },
                {
                    prop: 'mode',
                    label: '小计（元）',
                    width: ''
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
            remark: ''
        };
    },
    methods: {
        /**
         * 关闭Popup
         */
        closePopup() {
            this.$emit('closePopup');
        }
    }
};
</script>

<style lang="scss" scoped>
.popup {
    height: 100%;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    &__header {
        background: #42b983;
        display: flex;
        flex-direction: row;
        align-content: center;
        justify-content: space-between;
        padding: 10px;
        color: #ffffff;
        font-size: 14px;
    }
    &__title {
        height: auto;
    }
    &__close-btn {
        height: auto;
        cursor: pointer;
        font-size: 16px;
    }
    &__body {
        flex: 1;
        padding: 0 20px;
        box-sizing: border-box;
        overflow: hidden;
    }
    &__bottom {
        padding: 20px;
    }
    &__remark {
        display: flex;
        font-size: 14px;
    }
    &__remark-label {
        width: 50px;
    }
    &__btns {
        display: flex;
        align-content: center;
        justify-content: center;
        margin-top: 20px;
    }

}
</style>
