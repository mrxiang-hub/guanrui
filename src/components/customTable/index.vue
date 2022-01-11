<template>
    <div class="c-custom-table">
        <slot name="header" />
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
                    <slot
                        v-if="item.prop === 'handle'"
                        name="handle"
                        :row="scope.row"
                        :column="scope.column"
                        :$index="scope.$index"
                    />
                    <span
                        v-else
                        :class="{'c-custom-table__primary-val': item.primary}"
                        :title="scope.row[item.prop]"
                        class="c-custom-table__val"
                        :row="scope.row"
                        :column="scope.column"
                        @click="clickText(scope.row)"
                    >{{ scope.row[item.prop] }}</span>
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
export default {
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

        },
        /**
         * 点击表格中的蓝色文字
         * @param data
         */
        clickText(data) {
            this.$emit('clickText', data);
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
    &__primary-val {
        color: #20a0ff;
        cursor: pointer;
    }
}
</style>
