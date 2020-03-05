/* eslint-disable no-console */
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  mutations: {
    updateIsOpen (state, { id, isOpen }) {
      const todo = state.todos.find(obj => obj.id === id)
      todo.isOpen = isOpen
    },
    updateFilteredNr () {
      // eslint-disable-next-line no-use-before-define
      const filteredNr = filteredNr
    },

    set (newTodo) {
      return newTodo
    },
    updateNummer (state, { nummer }) {
      state.nummer = nummer
    },
    updateIdForTodo (state) {
      state.idForTodo++
    }
  },
  methods: {
    mounted () {
      // eslint-disable-next-line no-console
      console.log('App mounted!')
      if (localStorage.getItem('todos')) { this.todos = JSON.parse(localStorage.getItem('todos')) }
    },
    watch: {
      todos: {
        handler () {
          console.log('Todos changed!')
          localStorage.setItem('todos', JSON.stringify(this.todos))
        },
        deep: true
      }
    }
  },
  state: {
    filteredNr: 1,
    modalShow: false,
    newTodo: '',
    idForTodo: 1,
    beforeEditCache: '',
    beforeEditDescriptionCache: '',
    placeholder: 'Edit Description',
    dialog: false,
    nummer: 0,
    todos: [
      {
        id: 0,
        title: 'cool',
        editing: false,
        descriptionEditing: false,
        isOpen: false,
        status: "isn't done",
        description: '',
        filter: false,
        filterNr: 1,
        used: 3
      }
    ]
  },

  getters: {
    doneTodos: state => {
      return state.todos.filter(todo => todo.done)
    },
    doneTodosCount: (getters) => {
      return getters.doneTodos.length
    },
    getTodoById: state => id => {
      return state.todos.find(todo => todo.id === id)
    },
    getName: () => 'rajesh'
  }
})
