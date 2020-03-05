<template>
  <button
    :id="index"
    class="delete-button"
    @click="openModal(todo)">
    <img
      src="../assets/images2.png"
      class="image" >
  </button>
</template>

<script>
export default{
  props: {
    index: {
      type: Number,
      default: 0

    }
  },
  data () {
    return {
      todo: this.$store.state.todos[this.$route.params.id]
    }
  },
  methods: {
    openModal (todo) {
      // eslint-disable-next-line no-unused-expressions
      this.$router.push('delete')
      this.$store.commit('updateNummer', {
        nummer: todo.id
      })
    }
  }
}
</script>
<style>
.delete-button {
background-color: red;
font-size: 20px;
border-radius: 10px;
text-align: right;
color: white;
}
.image{
margin: 5px;
height: 40px;
}
</style>
