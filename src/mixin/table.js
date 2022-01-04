export default {
    data() {
        return {};
    },
    methods: {
        /**
         * 点击重置按钮
         */
        handleReset() {
            this.$refs['searchForm'].resetForm();
        }
    }
};
