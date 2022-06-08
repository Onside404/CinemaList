<template>      
    <div class="container">
        <div class="text">
            <img :src="r.posterUrlPreview" alt="">
            <p>Название: {{r.nameRu}}</p>
            <p>Год выпуска: {{r.year}}</p>
            <p>Продолжительность: {{r.filmLength}}</p>
            <strong class="number">{{index + 1}}</strong>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        r: {
            type: Object,
            required: true
        },
        index: Number
    }
}
</script>

<style scoped>
    .container {
        margin: 1rem;
        padding: 2rem;
        border: 2px solid;
        width: 20rem;
        height: 32rem;
        background: #EB9464;
    }    
    .text {
        text-align: center;
    }
    img {
        width: 260px;
        height: 380px;
        border: solid white 2px;
    }
</style>