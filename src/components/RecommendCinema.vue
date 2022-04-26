<template>
    <div class="row">
            <RecommendItem 
                v-for="(r, i) in films" :key="r"
                :r="r"
                :index="i"
            />
    </div>
</template>

<script>
import RecommendItem from "@/components/RecommendItem.vue"
export default {
    props: ['films'],
    components: {
        RecommendItem
    }
}
</script>

<style scoped>
    .row {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
    }

</style>