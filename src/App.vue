<template>
    <div>
        <router-view v-if="!loading" />
        <component :is="currentLoader" v-else />
    </div>
</template>

<script>
import Loader from './components/Loader.vue';
import Loader2 from './components/Loader2.vue';
import Loader3 from './components/Loader3.vue';

export default {
    data() {
        return {
            loading: false,
            currentLoader: null
        };
    },
    watch: {
        $route(to, from) {
            this.handleRouteChange(to, from);
        }
    },
    methods: {
        async handleRouteChange(to, from) {
            this.loading = true;
            if (to.name === 'contacts') {
                this.currentLoader = Loader2;
            } else if (to.name === 'about') {
                this.currentLoader = Loader2;
            } else if (to.name === 'projects') {
                this.currentLoader = Loader3;
            } else {
                this.currentLoader = Loader;
            }
            await new Promise(resolve => setTimeout(resolve, 1500));

            this.loading = false;
        }
    },
    mounted() {
        this.handleRouteChange(this.$route);
    }
};
</script>

