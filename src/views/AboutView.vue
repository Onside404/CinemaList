<template>
  <div>
    <h2>Recommendations</h2>
    <h3>Here you can watch recommended films</h3>
    <hr>
    <RecommendCinema 
      :films="films"
    />
  </div>
</template>

<script>
import RecommendCinema from "@/components/RecommendCinema.vue"
export default {
  data() {
    return {
      films: []
    }
  },
  mounted() {
        const key = process.env.VUE_APP_FILMS
        fetch('https://kinopoiskapiunofficial.tech/api/v2.2/films/top?type=TOP_250_BEST_FILMS&page=1', {
        headers: {
            'X-API-KEY': `${key}`,
            'Content-Type': 'application/json',
        },
    })
        .then(res => res.json())
        .then(json => {
          this.films = json.films
        })
  },
  components: {
    RecommendCinema
  }
}
</script>
