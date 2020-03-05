<template>
  <div>

    <!-- THIS IS THE TODO ITEM -->
    <div v-show="todo.isOpen">
      <div class="todo-item-middle">
        <div
          v-if="!todo.editing"
          class="todo-item-lbel"
          @dblclick="editTodo(todo)"
        >

          <item-title/>
        </div>
        <!-- THIS TRIGGERS THE EDIT METHODS -->
        <input
          v-focus
          v-if="todo.editing"
          v-model="todo.title"
          class="todo-item-edit"
          type="text"
          @keyup.enter="doneEdit(todo)"
          @blur="doneEdit(todo)"
          @keyup.escape="cancelEdit(todo)"
        >

        <div v-show="todo.isOpen">
          <p class="todo-description-edit">Item NR. {{ todo.id }}</p>

          <!-- THIS IS THE INPUT FIELD FOR THE EDIT -->
          <input
            v-focus
            v-model="todo.description"
            class="todo-description-edit"
            type="text"
            placeholder="Edit Description"
            @keyup.enter="doneEditDescription(todo)"
            @blur="doneEditDescription(todo)"
            @keyup.escape="cancelEditDescription(todo)"
          >
          <todo-selection/>

          <!-- With Opened Detils -->
          <div
            v-show="todo.isOpen"
            class="details-item-right">
            <!-- THIS IS THE DELETE BUTTON IN DETILS-->

            <delete-button/>
            <close-button/>
            <!-- THIS IS THE CLOSE BUTTON IN DETILS-->

          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import statusItem from './Overview/statusItem'
import itemTitle from './Overview/itemTitle'
import deleteButton from './Overview/DeleteButton'
import closeButton from './Details/detailsClose'
import todoSelection from './Details/chooseStatus'

export default {
  name: 'Details',
  components: { itemTitle, todoSelection, statusItem, deleteButton, closeButton },

  directives: {
    focus: {
      inserted: function (el) {
        el.focus()
      }
    }
  },

  props: {

  },
  data () {
    return {
      todo: this.$store.state.todos[this.$route.params.id]
    }
  },
  computed: {
    todos () {
      return this.$store.state.todos
    },
    enbaleall () {
      return this.$store.state.enableall
    },
    filteredNr () {
      return this.$store.state.filteredNr
    }
  },
  methods: {

    editTodo (todo) {
      todo.editing = true
      this.beforeEditCache = todo.title
    },
    editDescription (todo) {
      todo.descriptionEditing = true
      this.beforeEditDescriptionCache = todo.description
    },
    doneEdit (todo) {
      if (todo.title.trim().length === 0) {
        todo.title = this.beforeEditCache
      }
      todo.editing = false
    },
    doneEditDescription (todo) {
      if (todo.description.trim().length === 0) {
        todo.description = this.beforeEditDescriptionCache
      }
      todo.descriptionEditing = false
    },
    cncelEdit (todo) {
      todo.title = this.beforeEditCache
      todo.editing = false
    },
    cncelEditDescription (todo) {
      todo.description = this.beforeEditDescriptionCache
      todo.descriptionEditing = false
    },

    cancelDelete () {
      this.enableall = !this.enableall
    },
    openModal (index, todo) {
      // eslint-disable-next-line no-unused-expressions
      this.$router.push('delete')
      this.$store.commit('updateNummer', {
        nummer: todo.id
      })
    },
    openModlDetails (index, todo) {
      this.$store.commit('updateIsOpen', {
        id: todo.id,
        isOpen: todo.isOpen
      })
      // eslint-disable-next-line no-unused-expressions
      // eslint-disable-next-line func-call-spacing
      this.$router.push('/delete')(todo.isOpen = !todo.isOpen)

      todo.buttonName = todo.isOpen ? 'Close' : 'Details'
      this.nummer = index
    }

  }
}
</script>

<style>
.todo-item {
margin-bottom: 3px;
display: inline-block;
align-items: center;
justify-content: space-between;
animation-duration: 0.3s;
color: #29cc;
border: 1px solid lavenderblush;
}

.details-item-right {
display: flex;
text-align: center;
margin-right: 10px;
margin-bottom: 5px;
justify-content: space-between;
}

.status-item {
display: block;
align-items: left;
border: 1px;
font-size: 20px;
text-align: center;
}
.todo-item-label {
padding: 10px;
border: 1px solid white;
margin-left: 0px;
font-size: 35px;
font-style: italic;
font-weight: 800;
text-align: center;
}

.todo-item-edit {
font-size: 35px;
color: #29cc;
margin-left: auto;
width: 100%;
padding: 10px;
border: 1px solid #ccc;
font-family: "Rockwell Extr Bold", "Rockwell Bold", monospace;
text-align: center;
justify-content: center;
font-weight: 800;
}
.todo-description-edit {
font-size: 20px;
font-style: italic;
font-family: "Rockwell Extr Bold", "Rockwell Bold", monospace;
color: #29cc;
margin-left: 5px;
width: 400px;
padding: 5px;
display: block;
align-items: center;
border-radius: 5px;
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
</style>
