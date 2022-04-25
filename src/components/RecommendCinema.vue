<template>
    <div>
        <ul>
            <RecommendItem 
                v-for="(r, i) in films" :key="r"
                :r="r"
                :index="i"
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