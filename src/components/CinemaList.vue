<template>
    <div>
        <ul>
            <CinemaItem 
                v-for="(cinema, i) in cinemas" :key="cinema"
                v-bind:cinema="cinema"
                v-bind:index="i"
                v-on:remove-cinema="removeCinema"
            />
        </ul>
    </div>
</template>

<script>
import CinemaItem from '@/components/CinemaItem.vue'

export default {
    props:['cinemas'],
    components: {
        CinemaItem
    },
    methods: {
        removeCinema(id) {
            this.$emit('remove-cinema', id)
        }
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
