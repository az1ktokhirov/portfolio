<template>
    <section class="about">
        <div class="container">
            <Navbar/>
            <AboutContent />
        </div>
    </section>
</template>

<script>
import Navbar from "@/components/Navbar.vue"
import AboutContent from "@/components/AboutContent.vue"
export default {
    components: {
        Navbar,
        AboutContent,
    },
};
</script>
