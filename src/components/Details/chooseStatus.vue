<template>
  <div
    class="todo-selection">

    <!-- THIS IS THE SELECTION FOR IN PROGRESS -->
    <div class="todo-select">
      <input
        id="1"
        v-model="todo.used"
        type="radio"
        class="todo-selection-progress"
        value="1"
        name="inProgess"
        @click="setFilterProgress(todo)"
      >
      <label for="1">in progress</label>
    </div>
    <div class="todo-select">
      <input
        id="2"
        v-model="todo.used"
        type="radio"
        class="todo-selection-done"
        value="2"
        name="Done"
        @click="setFilterDone(todo)"
      >
      <label for="2">done</label>
    </div>
  </div>

</template>

<script>
export default{
  data () {
    return {
      todo: this.$store.state.todos[this.$route.params.id]
    }
  },
  computed: {
    todos () {
      return this.$store.state.todos
    },
    enableAll () {
      return this.$store.state.enableAll
    },
    filteredNr () {
      return this.$store.state.filteredNr
    }
  },
  methods: {
    setFilterProgress (todo) {
      todo.filterNr = 2
      todo.filter = true
    },
    setFilterDone (todo) {
      todo.filterNr = 3
      todo.filter = true
    }
  }
}

</script>
<style>
.todo-selection-done {
font-size: 20px;
color: #2a9cac;
margin-left: 10px;
padding: 5px;
margin-top: 10px;
margin-bottom: 10px;
font-family: "Rockwell Extra Bold", "Rockwell Bold", monospace;
align-items: center;
display: inline-grid;
}
.todo-selection-progress {
font-size: 20px;
color: #2a9cac;
margin-left: 10px;
padding: 5px;
margin-top: 10px;
margin-bottom: 10px;
font-family: "Rockwell Extra Bold", "Rockwell Bold", monospace;
align-items: center;
display: inline-grid;
}

.todo-select {
font-size: 20px;
color: #2a9cac;
margin-left: 10px;
width: 400px;
padding: 5px;
margin-top: 20px;
margin-bottom: 20px;
font-family: "Rockwell Extra Bold", "Rockwell Bold", monospace;
align-items: center;
display: inline-flex;
}
</style>
