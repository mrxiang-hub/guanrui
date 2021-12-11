<template>
    <div class="app-container">
        <el-card class="box-card">
            <div slot="header" class="clearfix">
                <el-button style="float: left;" type="success" size="mini" icon="el-icon-edit">设置企业信息</el-button>
            </div>
            <div class="app-container__item">
                <div class="app-container__item-label">
                    企业编号
                </div>
                <div class="app-container__item-value">
                    73
                </div>
            </div>
            <div class="app-container__item">
                <div class="app-container__item-label">
                    企业名称
                </div>
                <div class="app-container__item-value">
                    管锐技术测试总部
                </div>
            </div>
            <div class="app-container__item">
                <div class="app-container__item-label">
                    企业类型
                </div>
                <div class="app-container__item-value">
                    连锁
                </div>
            </div>
            <div class="app-container__item">
                <div class="app-container__item-label">
                    行业类型
                </div>
                <div class="app-container__item-value">
                    服装
                </div>
            </div>
            <div class="app-container__item">
                <div class="app-container__item-label">
                    联系人
                </div>
                <div class="app-container__item-value">
                    小明
                </div>
            </div>
            <div class="app-container__item">
                <div class="app-container__item-label">
                    联系电话
                </div>
                <div class="app-container__item-value">
                    1234567890
                </div>
            </div>
            <div class="app-container__item">
                <div class="app-container__item-label">
                    地址
                </div>
                <div class="app-container__item-value">
                    上海市浦东新区
                </div>
            </div>
            <div class="app-container__item">
                <div class="app-container__item-label">
                    代理商
                </div>
                <div class="app-container__item-value">
                    上海管锐信息技术有限公司
                </div>
            </div>
        </el-card>
    </div>
</template>

<script>
export default {
    name: "info",
    data() {
        return {}
    }
}
</script>

<style lang="scss" scoped>
.app-container {
    &__item {
        display: flex;
        justify-content: flex-start;
        align-content: center;
        border-bottom: 1px solid #F2F6FC;
        padding: 20px;
        font-size: 14px;
    }

    &__item-label {
        color: #909399;
        width: 400px;
    }

    &__item-value {
        color: #303133;
    }
}
</style>
