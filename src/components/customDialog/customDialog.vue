<template>
    <div class="c-custom-dialog">
        <el-dialog
            v-drag
            :visible.sync="show"
            width="60%"
            :show-close="false"
            @close="handleClose"
        >
            <div slot="title" class="c-custom-dialog__header">
                <div class="c-custom-dialog__title">{{ title }}</div>
                <span class="c-custom-dialog__close el-icon-close" @click="handleClose"></span>
            </div>
            <el-scrollbar class="c-custom-dialog__body">
                <slot></slot>
            </el-scrollbar>
            <div class="c-custom-dialog__footer">
                <slot name="footer"></slot>
            </div>
        </el-dialog>
    </div>
</template>

<script>
export default {
    name: 'customDialog',
    props: {
        show: {
            type: Boolean,
            default: () => true
        },
        title: {
            type: String,
            default: () => ''
        },
    },
    data() {
        return {}
    },
    methods: {
        handleClose() {
            this.$emit('close');
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
        height: 60vh;
        overflow-x: hidden;
        padding: 40px 20px;
    }

    &__footer {
        padding: 20px 0;
        text-align: center;
        box-shadow: 0 -2px 12px 0 rgb(0 0 0 / 10%);
    }

    ::v-deep .el-scrollbar__wrap {
        overflow: auto;
        padding: 0 20px;
    }

    ::v-deep .el-dialog__body {
        overflow: hidden;
        padding: 0;
    }
}
</style>
