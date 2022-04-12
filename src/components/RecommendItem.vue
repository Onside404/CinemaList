<template>
    <div>
        <li>
            <strong>{{r.filmId}}</strong>
            <div>
            <p>{{r.nameRu}}</p>
            
            </div>            
        </li>
    </div>
</template>

<script>
export default {
    props: {
        r: {
            type: Object,
            required: true
        },
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