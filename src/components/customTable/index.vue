<template>
  <div class="page-custom-table">
    <div class="page-custom-table__header">
      <slot name="header"></slot>
    </div>
    <el-table
      class="page-custom-table__body"
      height="100%"
      :data="tableData"
      border
      :header-cell-style="{ background: '#eef1f6', color: '#606266' }"
    >
      <el-table-column
        v-for="(item, index) in columns"
        :key="index"
        :prop="item.prop"
        :label="item.label"
        :width="item.width"
        :sortable="item.sortable"
      >
        <template slot-scope="scope">
          <slot
            name="handle"
            :row="scope.row"
            :column="scope.column"
            :$index="scope.$index"
            v-if="item.prop === 'handle'"
          ></slot>
          <span
            :title="scope.row[item.prop]"
            v-else
            class="page-custom-table__val"
            >{{ scope.row[item.prop] }}</span
          >
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
      default: () => [],
    },
    tableData: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      row: {},
    };
  },
};
</script>

<style lang="scss" scoped>
.page-custom-table {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  &__header {
    width: 100%;
    border: 1px solid #ebeef5;
    border-bottom: none;
    padding: 10px;
  }
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
