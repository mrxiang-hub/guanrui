<template>
    <div class="c-custom-table">
        <slot name="header"/>
        <el-table
            ref="multipleTable"
            class="c-custom-table__body"
            height="100%"
            :data="tableData"
            border
            :header-cell-style="{ background: '#eef1f6', color: '#606266' }"
            @selection-change="handleSelectionChange"
        >
            <el-table-column
                v-if="selection"
                type="selection"
                width="55"
            />
            <el-table-column
                v-for="(item, index) in columns"
                :key="index"
                :prop="item.prop"
                :label="item.label"
                :width="item.width"
                :sortable="item.sortable"
                :fixed="item.fixed"
            >
                <template slot-scope="scope">
                    <ex-slot
                        v-if="item.render"
                        :render="item.render"
                        :row="scope.row"
                        :index="scope.$index"
                        :column="scope.column"
                    />
                    <span
                        v-else
                        :title="scope.row[item.prop]"
                        class="c-custom-table__val"
                    >{{ scope.row[item.prop] }}</span>
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
export default {
    components: {
        'ex-slot': {
            functional: true,
            props: {
                row: {
                    type: Object,
                    default: {}
                },
                index: Number,
                column: {
                    type: Object,
                    default: {}
                },
                render: Function
            },
            render: (h, data) => {
                const params = {
                    row: data.props.row,
                    index: data.props.index,
                    column: data.props.column
                };
                return data.props.render(h, params);
            }
        }
    },
    props: {
        columns: {
            type: Array,
            default: () => []
        },
        tableData: {
            type: Array,
            default: () => []
        },
        selection: {
            type: Boolean,
            default: () => false
        }
    },
    data() {
        return {
            row: {}
        };
    },
    methods: {
        /**
         * 获取选中的值
         */
        getSelection() {
            const arr = this.$refs['multipleTable'].selection;
            return arr;
        },
        /**
         * 被选中的值发生变化
         */
        handleSelectionChange() {

        }
    }
};
</script>

<style lang="scss" scoped>
.c-custom-table {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;

    &__body {
        flex: 1;
    }

    &__val {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
}
</style>
