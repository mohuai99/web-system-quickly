export default {
    mounted() {
        this.$bindResize()
    },
    methods: {
        $bindResize(dom) {
            this._handleResize = (e) => {
                if (this.onResize) this.onResize()
            }
            dom.addEventListener('resize', this._handleResize)
        },
        $unBindResize(dom) {
            if (this._handleResize) dom.removeEventListener('resize', this._handleResize)
        }
    },
    beforeDestroy() {
        this.$unBindResize()
    }
}
