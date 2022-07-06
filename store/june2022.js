const itemData = require(`~/assets/data/june2022`)

export const state = () => ({
  todos: itemData,
  sort: {
    target: '',
    asc: 0
  },
  filterQuery: {
    label: ''
  }
})

export const mutations = {
  doneTodo (state, payload) {
    const result = state.todos.findIndex((value) => value.id === payload)
    state.todos[result].todo = state.todos[result].todo ? false : true
  },
  resetTodo (state) {
    state.todos.forEach(element => {
      element.todo = false
    })
  },
  filterQuery(state, query) {
    state.filterQuery = { ...query }
  },
  sortQuery (state, query) {
    state.sort = { ...query }
  }
}

export const actions = {
  doneTodoAction (context, payload) {
    context.commit('doneTodo', payload)
  },
  resetTodoAction (context) {
    context.commit('resetTodo')
  },
  filterQueryAction (context, payload) {
    context.commit('filterQuery', payload)
  },
  sortQueryAction (context, payload) {
    context.commit('sortQuery', payload)
  }
}

export const getters = {
  filteredTasks (state) {
    let data = state.todos
    
    if (state.filterQuery.label !== '') {
      data = data.filter((row) => {
        return row['label'].indexOf(state.filterQuery.label) !== -1 ||
        row['map'].indexOf(state.filterQuery.label) !== -1
      })
    }
    
    if(state.sort.asc !== 0){
      const dataSorted = data.slice().sort((first, second) => {
        if (first[state.sort.target] > second[state.sort.target]){
          return state.sort.asc
        } else if (first[state.sort.target] < second[state.sort.target]){
          return state.sort.asc * -1
        } else {
          return 0
        }
      })
      return dataSorted
    }

    return data
  }
}
