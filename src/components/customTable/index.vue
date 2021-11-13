<template>
  <div class="page-custom-table">
    <el-table
      height="100%"
      :data="tableData"
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
          <slot name="handle" :row="scope.row" :column="scope.column" :$index="scope.$index" v-if="item.prop==='handle'"></slot>
          <span :title="scope.row[item.prop]" v-else class="page-custom-table__val">{{scope.row[item.prop]}}</span>
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
    }
  },
  data() {
    return {
      row: {}
    }
  }
}
</script>

<style lang="scss" scoped>
  .page-custom-table {
    height: calc(100% - 200px);
    &__val {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }
</style>
