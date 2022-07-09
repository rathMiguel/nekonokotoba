<template lang="pug">
.todo-wrap
  .controllers
    .controller__buttons
      button(v-on:click="resetTask()").button.button-primary 全てのチェックを外す
    .controller__search
      input(type="text" placeholder="キーワードで絞り込み" v-model="filterQuery.label" v-on:keyup="changeQuery()").input-full
  .table-wrap
    //- pre {{ $store.state.june2022.sort }}
    table.table.todo.striped
      thead
        tr
          template(v-for="value in tabaleHeadings")
            th(v-on:click="sortQuery(value.label)" v-if="value.sortable").sortable {{ value.title }}
              font-awesome-icon(:icon="['fas', 'caret-up']" :class="{'nonactive' : sort.target === value.label && sort.asc === 1}").icon.sortable-up
              font-awesome-icon(:icon="['fas', 'caret-down']" :class="{'nonactive' : sort.target === value.label && sort.asc === -1}").icon.sortable-down
            th(v-else v-text="value.title")
      tbody
        template(v-for="value in $store.getters['june2022/filteredTasks']")
          tr(:class="(value.todo === true) ? 'is-ended' : ''" v-on:click="doneTask(value)")
            td.centered
              font-awesome-icon(:icon="['far', 'square']" v-if="value.todo === false").icon-check.check-true
              font-awesome-icon(:icon="['far', 'square-check']" v-if="value.todo === true").icon.icon-check.check-false
            td {{ value.label }}
            td {{ value.baseexp | addComma }}
            td {{ value.point | addComma }}
            td.centered {{ value.lv }}
            td {{ value.map }}
</template>

<script>
export default {
  data() {
    return {
      tabaleHeadings: [
        {
          label: 'todo',
          title: 'ToDo',
          sortable: true
        },
        {
          label: 'label',
          title: '討伐対象',
          sortable: false
        },
        {
          label: 'baseexp',
          title: '報酬Exp',
          sortable: true
        },
        {
          label: 'point',
          title: '報酬Bポイント',
          sortable: true
        },
        {
          label: 'lv',
          title: 'Lv',
          sortable: true
        },
        {
          label: 'map',
          title: '生息MAP',
          sortable: false
        }
      ],
      sort: {
        target: '',
        asc: 0
      },
      filterQuery: {
        label: ''
      }
    }
  },
  mounted() {
    this.$store.dispatch('june2022/filterQueryAction', this.filterQuery)
    this.$store.dispatch('june2022/sortQueryAction', this.sort)
  },
  methods: {
    doneTask (value) {
      this.$store.dispatch('june2022/doneTodoAction', value.id)
    },
    resetTask () {
      this.$store.dispatch('june2022/resetTodoAction')
    },
    changeQuery () {
      this.$store.dispatch('june2022/filterQueryAction', this.filterQuery)
    },
    sortQuery (value) {
      switch (this.sort.asc) {
        case 0:
          this.sort.asc = 1
          break
        case 1:
          this.sort.asc = -1
          break
        case -1:
          this.sort.asc = 0
          break
        default:
          this.sort.asc = 0
          break
      }
      
      if(this.sort.target !== value) this.sort.asc = 1
      this.sort.target = value
      this.$store.dispatch('june2022/sortQueryAction', this.sort)
    }
  }
}
</script>

<style lang="scss" scoped>
@use '~/assets/scss/settings' as *;
@use '~/assets/scss/mixins' as *;

@use '~/assets/scss/table';
@use '~/assets/scss/controllers';
</style>