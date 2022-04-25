<template>      
    <div class="row">
        <div class="text">
            <strong>{{index + 1}}</strong>
            <p>Название: {{r.nameRu}}</p>

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
    .row {
        display: inline-block;
        margin: 2rem;
        padding: 2rem;
        border: 2px solid;
        width: 20rem;
        height: 15rem;
        background: #EB9464;
    }
    .text {
        text-align: left;
    }
    p {
        text-align: center;
    }

</style>