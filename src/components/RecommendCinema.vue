<template>
    <div>
        <ul>
            <RecommendItem 
                v-for="(r, n) in films" :key="r"
                :number="n"
                :r="r"
            />
        </ul>
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
    ul {
        list-style: none;
        margin: 0;
        padding: 0;
    }

</style>