<template>
    <div class="c-custom-dialog">
        <el-dialog
            :visible.sync="dialogVisible"
            width="60%"
            :show-close="false"
            :before-close="handleClose">
            <div slot="title" class="c-custom-dialog__header">
                <div class="c-custom-dialog__title">提示</div>
                <span class="c-custom-dialog__close el-icon-close"></span>
            </div>
            <el-scrollbar class="c-custom-dialog__body">
                <slot></slot>
            </el-scrollbar>
            <slot name="footer"></slot>
        </el-dialog>
    </div>
</template>

<script>
export default {
    name: "custom-dialog",
    props: {
        dialogVisible: {
            type: Boolean,
            default: () => true
        }
    },
    data() {
        return {}
    },
    methods: {
        handleClose() {

        }
    }
}
</script>

<style lang="scss" scoped>
.c-custom-dialog {
    &__header {
        display: flex;
        justify-content: space-between;
        padding: 20px;
        cursor: move;
    }

    &__title {
        font-size: 14px;
    }

    &__close {
        cursor: pointer;
    }
    &__body {
        min-height: 400px;
        max-height: 500px;
        overflow: auto;
    }
    ::v-deep .el-scrollbar__wrap {
        overflow: auto;
    }
}
</style>
