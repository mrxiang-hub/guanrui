<template>
    <div class="order-popup">
        <div class="order-popup__header">
            <div class="order-popup__title">新增采购订单</div>
            <span class="el-icon-close order-popup__close-btn" />
        </div>
        <div class="app-container">
            <SearchForm ref="searchForm" :form-options="formOptions">
                <template #handleBtn>
                    <el-button type="default" size="mini" @click="handleReset">重置</el-button>
                </template>
            </SearchForm>
            <div class="app-container__body">
                <div class="app-container__body-table">
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
            </div>
        </div>
    </div>
</template>

<script>
import SearchForm from '@/components/seachForm';
import CustomTable from '@/components/customTable';
import TableMixin from '@/mixin/table';
export default {
    name: 'OrderPopup',
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
                            value: 1
                        },
                        {
                            label: '管锐技术测试分店',
                            value: 2
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
                    prop: 'number',
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
            ]
        };
    }
};
</script>

<style lang="scss" scoped>
.order-popup {
    &__header {
        background: #42b983;
        display: flex;
        flex-direction: row;
        align-content: center;
        justify-content: space-between;
        padding: 20px;
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
}
</style>
