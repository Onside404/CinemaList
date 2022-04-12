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
      films: [
        {
      
        }
      ]
    }
  },
  mounted() {
        fetch('https://kinopoiskapiunofficial.tech/api/v2.2/films/top?type=TOP_250_BEST_FILMS&page=1', {
        method: 'GET',
        headers: {
            'X-API-KEY': 'f9645a1b-fce4-41af-830f-f6c5d5269406',
            'Content-Type': 'application/json',
        },
    })
        .then(res => res.json())
        .then(json => {
          this.films = json
        })
        .catch(err => console.log(err))
  },
  components: {
    RecommendCinema
  }
}
</script>
