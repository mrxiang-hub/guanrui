<template>
    <div class="app-container">
        <el-form ref="applyForm" class="apply-form" :model="applyForm" label-width="80px">
            <el-form-item label="活动名称">
                <el-input v-model="applyForm.code" />
            </el-form-item>
            <el-form-item label="盘点门店">
                <el-select v-model="applyForm.store" placeholder="门店选择">
                    <el-option label="管锐技术测试总部" value="1" />
                    <el-option label="管锐技术测试分店" value="2" />
                </el-select>
            </el-form-item>
            <el-form-item label="盘点范围">
                <el-select v-model="applyForm.range" placeholder="盘点范围">
                    <el-option label="全场盘点" value="1" />
                    <el-option label="单品盘点" value="2" />
                    <el-option label="类别盘点" value="3" />
                    <el-option label="品牌盘点" value="4" />
                </el-select>
            </el-form-item>
            <el-form-item label="备注">
                <el-input v-model="applyForm.note" type="textarea" placeholder="备注" />
            </el-form-item>
            <el-form-item>
                <el-button type="primary" size="small" icon="el-icon-plus">新增</el-button>
                <el-button type="primary" size="small" icon="el-icon-save">保存</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>

export default {
    data() {
        return {
            applyForm: {
                code: '',
                store: '',
                range: '',
                note: ''
            }
        };
    },
    methods: {}
};
</script>
<style lang="scss" scoped>
.app-container {
    height: 100%;

    .table-pagination {
        margin-top: 30px;
    }

    .apply-form {
        width: 60%;
    }
}
</style>

