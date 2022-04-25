<template>
    <div>
        <li>
            <strong>{{index + 1}}</strong>
            <div>
            <p>Название: {{cinema.title}}</p>
            <p>Режиссер: {{cinema.director}}</p>
            <p>Жанр: {{cinema.genre}}</p>
            </div>
            <button class="rm" 
                v-on:click="$emit('remove-cinema', cinema.id)"            
            >&times;</button>
        </li>
    </div>
</template>

<script>
export default {
    props: {
        cinema: {
            type: Object,
            required: true
        },
        index: Number
    }
}
</script>

<style scoped>
    li {
        border: 1px solid;
        display: flex;
        justify-content: space-between;
        padding: .5rem 2rem;
        margin: 1rem;
    }

    .rm{
        background:#A9A6A5;
        color: #000;
        height: 25px;
        border: 50%;
        font-weight: bold;
    }
    p {
        justify-content: center;
    }
</style>