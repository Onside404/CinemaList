<template>
    <section>
          <div>
            <h4>Create</h4>
          </div>    
    </section>

    <form @submit.prevent="onSubmit">
            <div>
              <input
                id="name"
                type="text"
                v-model="title"
              >
              <label for="name"></label>
              <span>Enter movie name</span>
            </div>
            <div>
              <input 
                id="name"
                type="text"
                v-model="director"
                >
              <label for="name"></label>
              <span>Enter director`s name</span>
            </div>
            <div>
              <input 
                id="name"
                type="text"
                v-model="genre"
                >
              <label for="name"></label>
              <span>Enter movie genre</span>
            </div>
            <button type="submit">
              Create
            </button>
          </form>
</template>

<script>
export default {
    data() {
        return {
            title: '',
            director: '',
            genre: ''
        }
    },
    methods: {
        onSubmit() {
            if (this.title.trim()) {
                const newCinema = {
                    id: Date.now(),
                    title: this.title,
                    director: this.director,
                    genre: this.genre
                }

                this.$emit('add-cinema', newCinema)
                this.title = ''
                this.director = ''
                this.genre = ''
            }
        }
    }
}
</script>

 <style scoped>
    form {
        display: flex;
        justify-content: center;
    }
    input {
        margin: 5px;
    }
    span {
      margin: 10px;
      padding: 5px;
    }
    button {
      margin: 10px;
      color: silver;
    }
 </style>