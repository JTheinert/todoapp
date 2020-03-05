<template>
  <div class="dialog-item">
    <h1 class="delete-text">
      Are you sure you want to delete this Todo ?
    </h1>
    <button
      class="btn-style-yes"
      @click="removeTodo(nummer)">
      Yes
    </button>
    <button
      class="btn-style"
      @click="cancelDelete()">no</button>
  </div>
</template>

<script>
/* eslint-disable no-console */

export default {
  name: 'Delete',
  components: {},

  computed: {
    todos () {
      return this.$store.state.todos
    },
    nummer () {
      return this.$store.state.nummer
    }
  },
  methods: {
    removeTodo (nummer) {
      console.log(nummer)
      this.$store.state.todos.splice(nummer, 1)
      this.$router.push('/home')
    },
    removeTodoDetail (index) {
      this.todos.splice(index, 1)
    },
    editTodo (todo) {
      todo.editing = true
      this.beforeEditCache = todo.title
    },

    cancelDelete () {
      this.dialog = !this.dialog
      this.$router.push('/home')
    },
    openModal (index) {
      this.dialog = !this.dialog
      this.nummer = index
    },
    openModalDetails (index, todo) {
      this.dialog = !this.dialog
      todo.isOpen = !todo.isOpen
      todo.buttonName = todo.isOpen ? 'Close' : 'Details'
      this.nummer = index
    }
  }
}
</script>

<style>
.dialog-item {
display: block;
font-size: 30px;
text-align: center;
margin-top: 50px;
}
.delete-text {
display: block;
font-size: 30px;
border: 3px solid #2a9cac;
text-align: center;
border-radius: 10px;
background-color: #2a9cac;
color: white;
}

.btn-style {
background-color: #2a9cac;
font-size: 30px;
border-radius: 10px;
padding: 15px;
margin: 10px;
width: 150px;
height: 100%;
color: white;
}
.btn-style-yes {
background-color: red;
font-size: 30px;
border-radius: 10px;
padding: 15px;
margin: 10px;
width: 150px;
height: 100%;
color: white;
}

.delete-button {
background-color: red;
font-size: 20px;
border-radius: 10px;
text-align: center;
color: white;
}

.details-delete-button {
background-color: red;
font-size: 20px;
border-radius: 10px;
text-align: center;
color: white;
margin-left: 10px;
}

.done {
color: green;
}
.progress {
color: darkgoldenrod;
}

.image {
margin: 5px;
height: 40px;
}
.filter {
display: flex;
margin-left: 10px;
margin-right: 10px;
color: #2a9cac;
justify-content: space-around;
margin-bottom: 10px;
}
.teaser-text {
display: flex;
font-size: 15px;
text-align: left;
justify-content: left;
}
</style>
