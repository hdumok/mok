<template>
    <div>
        <head-bar></head-bar>
        <side-bar></side-bar>
        <router-view></router-view>
    </div>
</template>

<script>
    import HeadBar from 'components/headbar.vue'
    import SideBar from 'components/sidebar.vue'
    export default {
        data () {
            return {};
        },
        components: {
            HeadBar,
            SideBar
        },
        methods: {
            signin: function () {
                this.$route.router.go('/index')
            }
        }
    }
</script>
