<template>
    <div class="popup">
        <div class="popup__header">
            <div class="popup__title">采购订单详情</div>
            <span class="el-icon-close popup__close-btn" @click="closePopup" />
        </div>
        <div class="popup__form">
            <div class="popup__form-item">
                <span class="popup__form-label">单号</span>
                <span class="popup__form-val">P00027620210615210432</span>
            </div>
            <div>
                <span class="popup__form-label">制单人</span>
                <span class="popup__form-val">明超</span>
            </div>
            <div class="popup__form-item">
                <span class="popup__form-label">制单日期</span>
                <span class="popup__form-val">2022-01-10 17:51:00</span>
            </div>
            <div class="popup__form-item">
                <span class="popup__form-label">门店</span>
                <span class="popup__form-val">管锐技术测试总部</span>
            </div>
            <div class="popup__form-item">
                <span class="popup__form-label">审核人</span>
                <span class="popup__form-val">明超</span>
            </div>
            <div class="popup__form-item">
                <span class="popup__form-label">审核时间</span>
                <span class="popup__form-val">2022-01-10 17:52:00</span>
            </div>
            <div class="popup__form-item">
                <span class="popup__form-label">供应商</span>
                <span class="popup__form-val">上海七浦路</span>
            </div>
            <div class="popup__form-item">
                <span class="popup__form-label">数量</span>
                <span class="popup__form-val">数量</span>
            </div>
            <div class="popup__form-item">
                <span class="popup__form-label">单据金额</span>
                <span class="popup__form-val">24300</span>
            </div>
        </div>
        <div class="popup__body">
            <CustomTable :columns="columns" :table-data="tableData">
            </CustomTable>
        </div>
        <div class="popup__bottom">
            <div class="popup__remark">
                <span class="popup__remark-label">备注：</span>
                这是备注
            </div>
            <div class="popup__btns">
                <el-button type="primary" icon="el-icon-upload2" size="small">导出</el-button>
                <el-button icon="el-icon-back" size="small" @click="closePopup">返回</el-button>
            </div>
        </div>
    </div>
</template>

<script>
import CustomTable from '@/components/customTable';
export default {
    name: 'viewPopup',
    components: {
        CustomTable
    },
    data() {
        return {
            columns: [
                {
                    prop: 'number',
                    label: '序号',
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
@import "@/styles/mixin.scss";
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
    &__form {
        @include grid-mode(3, 0, 20px);
        padding: 20px;
    }
    &__form-item {
        font-size: 14px;
    }
    &__form-label {
        display: inline-block;
        width: 100px;
    }
    &__form-val {
        color: #20a0ff;
    }
}
</style>
