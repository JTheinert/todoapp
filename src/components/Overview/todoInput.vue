<template>
  <div>
    <input
      v-focus
      id="1001"

      type="text"
      class="todo-input"
      placeholder="Todo Here!"
      @keyup.enter="addTodo"
    >
  </div>

</template>
<script>
export default {
  directives: {
    focus: {
      inserted: function (el) {
        el.focus()
      }
    }
  },
  computed: {
    todoList () {
      return this.$store.state.todos
    },
    newTodo () {
      return this.$store.state.newTodo
    },
    idForTodo () {
      return this.$store.state.idForTodo
    }
  },
  methods: {
    addTodo () {
      if (this.newTodo.length === 0) {
        return
      }

      this.todoList.push({
        id: this.idForTodo,
        title: this.newTodo,
        editing: false,
        descriptionEditing: false,
        isOpen: false,
        buttonName: 'Details',
        status: "isn't done",
        description: '',
        filter: false,
        filterNr: 1
      });
      // eslint-disable-next-line no-unused-expressions
      (this.newTodo = '')
      // eslint-disable-next-line no-unused-expressions
      this.$store.commit('updateIdForTodo')
      localStorage.setItem('0', 'isnt done')
    }
  }
}
</script>
<style >
.todo-input {
width: 100%;
padding: 10px 250px;
font-size: 20px;
margin-bottom: 16px;
color: #2a9cac;
text-align: center;
}
</style>
