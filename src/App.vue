<template>
    <div>
        <div id="app" v-if="portfolio">
            <router-view />
        </div>
        <div class="loader" v-else>
            <Loader/>
        </div>
    </div>
</template>

<script>
import Loader from './components/Loader.vue';

export default {
    components: {
        Loader
    },
    data() {
        return {
            portfolio: false
        };
    },
    mounted() {
        setTimeout(() => {
            this.portfolio = true;
        }, 2500);
    }
};
</script>

