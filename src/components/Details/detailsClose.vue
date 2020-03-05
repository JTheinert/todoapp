<template>
  <div>
    <button
      :id="index"
      class="close-details-button"
      name="closeButton"
      @click="closeDetails(todo)"
    >
      Close
    </button>
  </div>
</template>

<script>
export default {
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
  computed: {
    todoList () {
      return this.$store.state.todos
    }

  },
  methods: {
    closeDetails (todo) {
      todo.isOpen = false
      this.$store.commit('updateIsOpen', {
        id: todo.id,
        isOpen: todo.isOpen
      })
      this.$router.push({ path: '/' })
    }
  }
}
</script>
<style>
.close-details-button {
background-color: #2a9cac;
font-size: 20px;
border-radius: 10px;
text-align: center;
color: white;
margin-left: 12px;
}
</style>
