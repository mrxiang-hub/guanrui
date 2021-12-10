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
                <el-button type="default" size="mini">重置</el-button>
            </template>
        </SearchForm>
        <div class="app-container__body">
            <div class="app-container__body-table">
                <CustomTable :columns="columns" :table-data='tableData'>
                </CustomTable>
            </div>
            <div class="app-container__body-chart" ref="chart"></div>
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
    name: 'orderAmount',
    components: {
        SearchForm,
        CustomTable
    },
    data() {
        return {
            columns: [
                {
                    prop: 'code',
                    label: '时段',
                    sortable: true
                },
                {
                    prop: 'name',
                    label: '客单数'
                },
                {
                    prop: 'concat',
                    label: '客单数占比'
                },
                {
                    prop: 'concat',
                    label: '销售额'
                },
                {
                    prop: 'mode',
                    label: '金额占比'
                },
                {
                    prop: 'province',
                    label: '客单价'
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
                    label: '门店',
                    prop: 'store',
                    element: 'el-select',
                    initValue: undefined,
                    placeholder: '请选择门店',
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
                    label: '开始日期',
                    prop: 'keyWord',
                    element: 'el-date-picker',
                    initValue: undefined,
                    placeholder: '请选择开始日期',
                    clearable: true,
                    type: 'date'
                },
                {
                    label: '结束日期',
                    prop: 'keyWord',
                    element: 'el-date-picker',
                    initValue: undefined,
                    placeholder: '请选择结束日期',
                    clearable: true,
                    type: 'date'
                },
            ]
        };
    },
    created() {
        this.$nextTick(() => {
            this.initChart();
        })
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
        },
        /**
         * 画图表
         */
        initChart() {
            const chart = this.$echarts.init(this.$refs.chart);
            console.log(chart, 111111);
            chart.setOption({
                title: {
                    text: '客单——时段分析',
                    left:'center'
                },
                tooltip: {},
                xAxis: {
                    type: 'category',
                    boundaryGap: false,
                    data: ['1时', '2时', '3时', '4时', '4时', '5时', '6时', '7时', '8时', '9时', '10时', '11时', '12时', '13时', '14时', '15时', '16时', '17时', '18时', '19时', '20时', '21时', '22时', '23时', '24时']
                },
                yAxis: {
                    type: 'value',
                    name: '销售额',
                    axisLine:{
                        show: true
                    }
                },
                series: [
                    {
                        name: '销量',
                        type: 'line',
                        color:'#F56C6C',
                        data: [5, 20, 36, 10, 10, 20, 30, 40, 60, 80, 10, 40, 60, 90, 100, 30, 24, 10, 5, 0, 5, 10, 24, 100, 200]
                    }
                ]
            });
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

    &__body-table {
        height: 100%;
        width: 600px;
    }

    &__body-chart {
        height: 100%;
        flex: 1;
    }
}
</style>

