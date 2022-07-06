<template lang="pug">
.todo-wrap
  .controllers
    .controller__buttons
      button(v-on:click="resetTask()").button.button-primary 全てのチェックを外す
    .controller__search
      input(type="text" placeholder="キーワードで絞り込み" v-model="filterQuery.label" v-on:keyup="changeQuery()").input-full
  .table-wrap
    //- pre {{ $store.state.june2022.sort }}
    table.table
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

.controllers{
  margin-top: 1.5em;
  & > * {
    margin-bottom: 15px;
  }

  .controller{
    &__buttons{
      text-align: right;
    }
  }
}

.table-wrap{
  width: 100%;
  overflow: auto;
}

.table{
  width: 100%;
  margin-top: 1.5em;
  margin-bottom: 1.5em;
  font-size: 14px;
  line-height: 1.5;
  @include media(sm-md){
    width: 800px;
  }
  tr{
    background-color: #fff;
    &:nth-child(even){
      background-color: #EEE;
    }
  }
  th, td{
    padding: 13px 10px;
  }

  thead{
    tr{
      background-color: $color-primary;
      color: #FFF;
    }
    th, td{
      white-space: nowrap;
    }
  }

  tbody{
    tr{
      cursor: pointer;
    }
  }

  .sortable{
    cursor: pointer;
    position: relative;
    padding-right: 1.5em;
  }

  .sortable-up,
  .sortable-down{
    position: absolute;
    right: 0.5em;
    color: $color-secondary;
    &.nonactive{
      opacity: 0.3;
    }
  }

  .sortable-up{
    bottom: calc(50% - 2px);
  }
  .sortable-down{
    top: calc(50% - 2px);
  }

  .centered{
    text-align: center;
  }

  .nowrap{
    white-space: nowrap;
  }

  .is-ended{
    background-color: $color-caution !important;
  }

  .icon-check{
    font-size: 1.2em;
    &.check-true{
      color: $color-default;
    }
    &.check-false{
      color: darken($color-caution, 40%);
    }
  }
}
</style>