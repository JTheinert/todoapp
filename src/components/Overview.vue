<template>
  <div>
    <!-- THIS IS THE NEW TODO INPUT -->
    <navbar/>

    <input
      v-focus
      id="1001"
      v-model="newTodo"
      type="text"
      class="todo-input"
      placeholder="Todo Here!"
      @keyup.enter="addTodo"
    >
    <filterung/>

    <todo-item-middle/>

  </div>
</template>

<script>
import navbar from './Overview/navbar'
import filterung from './Overview/filter'
import todoItemMiddle from './Overview/todoItemMiddle'

export default {
  name: 'Overview',
  components: { navbar, filterung, todoItemMiddle },

  directives: {
    focus: {
      inserted: function (el) {
        el.focus()
      }
    }
  },

  data () {
    return {
      newTodo: ''
    }
  },
  computed: {
    todoList () {
      return this.$store.state.todos
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
        buttonNme: 'Detils',
        sttus: "isn't done",
        description: '',
        filter: false,
        filterNr: 1
      });
      // eslint-disable-next-line no-unused-expressions
      (this.newTodo = '')
      // eslint-disable-next-line no-unused-expressions
      this.$store.commit('updateIdForTodo')
      localStorage.setItem('0', 'isnt done')
    },

    editTodo (todo) {
      todo.editing = true
      this.beforeEditCche = todo.title
    },
    doneEdit (todo) {
      if (todo.title.trim().length === 0) {
        todo.title = this.beforeEditCche
      }
      todo.editing = false
      this.$store.commit('updateTitle', {
        id: todo.id,
        title: todo.title
      })
    },
    cancelEdit (todo) {
      todo.title = this.beforeEditCche
      todo.editing = false
    },

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
.todo-input {
width: 100%;
padding: 10px 250px;
font-size: 20px;
margin-bottom: 16px;
color: #29cc;
text-align: center;
margin: 10px;
border: 2px solid lavenderblush;
}
.todo-item {
margin-bottom: 3px;
display: inline-block;
align-items: center;
justify-content: space-between;
animation-duration: 0.3s;
color: #29cc;
border: 1px solid lavenderblush;
width: 100%;
}

.todo-item-left {
display: flex;
align-items: left;
}

</style>
