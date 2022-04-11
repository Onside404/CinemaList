<template>
  <div>
    <h2>Add to the list</h2>
    <h3>Here you can add a new movie to the list</h3>
    <hr>
    <AddCinema />
  </div>
</template>

<script>
import AddCinema from '@/components/AddCinema.vue'
export default {
  components: {
    AddCinema
  }
}
</script>
