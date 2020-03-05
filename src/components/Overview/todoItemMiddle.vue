<template>
  <div>

    <div
      v-for="(todo, index) in todoList"
      v-show="filteredNr == 1 || todo.filterNr == filteredNr"
      :key="index"
      :id="todo.id"
      class="todo-item"
    >
      <div
        class="todo-item-middle"
        @click="showDetails(todo)">
        <div class="todo-title">
          {{ todo.title }}
        </div>
        <div
          v-if="!todo.editing"
          clss="todo-item-label">
          <status-item />
          <teaser-text />
        </div>
        <div
          v-show="!todo.isOpen"
          class="todo-item-right">
          <edit-text />
          <delete-button />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import DeleteButton from './DeleteButton'
import editText from './editText'
import teaserText from './teaserText'
import statusItem from './statusItem'
import itemTitle from './itemTitle'

export default {
  components: {
    editText,
    DeleteButton,
    teaserText,
    statusItem,
    itemTitle
  },
  props: {
    index: {
      type: Number,
      default: 0
    }
  },
  computed: {
    todoList () {
      return this.$store.state.todos
    },
    filteredNr () {
      return this.$store.state.filteredNr
    },
    idForTodo () {
      return this.$store.state.idForTodo
    },
    nummer () {
      return this.$store.state.nummer
    },
    getTodoById () {
      return this.$store.getters.getTodoById
    }
  },
  methods: {
    showDetails (todo) {
      todo.isOpen = true
      this.$store.commit('updateIsOpen', {
        id: todo.id,
        isOpen: todo.isOpen
      })
      this.$store.commit('updateNummer', {
        nummer: todo.id
      })
      this.$router.push({ path: `/details/${todo.id}` })
    }
  }
}
</script>
<style>
.todo-title {
padding: 10px;
border: 1px solid white;
margin-left: 0px;
font-size: 35px;
font-style: itlic;
font-weight: 800;
text-align: left;
}
.todo-item-middle {
display: block;
align-items: center;
width: 100%;
}

.todo-item-right {
display: flex;
text-align: right;
margin-right: 10px;
justify-content: left;
margin-bottom: 5px;
justify-content: flex-end;
}
</style>
