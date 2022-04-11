<template>
  <h2>Cinema List</h2>

        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente tempore harum praesentium ab laboriosam architecto tenetur ducimus accusantium facilis voluptatem.</p>
        <hr>

        <CinemaList 
          v-bind:cinemas="cinemas"
          @remove-cinema="removeCinema"
        />
        <hr>
        <AddCinema 
        @add-cinema="addCinema"
        />

  //some text
</template>

<script>
import CinemaList from '@/components/CinemaList.vue'
import AddCinema from '@/components/AddCinema.vue'
export default {
  name: 'app',
  data() {
    return {
      cinemas: [
        {id: 1, title: 'Константин', director: 'Френсис Лоуренс', genre: 'Хоррор'},
        {id: 2, title: 'Маска', director: 'Чак Рассел', genre: 'Комедия'}
      ]
    }
  },
  methods: {
    removeCinema(id) {
      this.cinemas = this.cinemas.filter(c => c.id !== id)
    },
    addCinema(cinema) {
      this.cinemas.push(cinema)
    }
  },
  components: {
    CinemaList, AddCinema
  } 
}
</script>


