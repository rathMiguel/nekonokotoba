<template lang="pug">
.todo-wrap
  .controllers
    .controller__buttons
      button(v-on:click="resetTask()").button.button-primary 全てのチェックを外す
    .controller__search
      input(type="text" placeholder="キーワードで絞り込み" v-model="filterQuery.label" v-on:keyup="handleChangeQuery").input-full
  .table-wrap
    table.table
      thead
        tr
          th(v-on:click="sortQuery('todo')").sortable ToDo
            font-awesome-icon(:icon="['fas', 'angle-up']" :class="{'nonactive' : sort.target === 'todo' && sort.asc !== -1}").icon.sortable-up
            font-awesome-icon(:icon="['fas', 'angle-down']" :class="{'nonactive' : sort.target === 'todo' && sort.asc !== 1}").icon.sortable-down
          th 討伐対象
          th(v-on:click="sortQuery('baseexp')").sortable 報酬Exp
            font-awesome-icon(:icon="['fas', 'angle-up']" :class="{'nonactive' : sort.target === 'baseexp' && sort.asc !== -1}").icon.sortable-up
            font-awesome-icon(:icon="['fas', 'angle-down']" :class="{'nonactive' : sort.target === 'baseexp' && sort.asc !== 1}").icon.sortable-down
          th(v-on:click="sortQuery('point')").sortable 報酬Bポイント
            font-awesome-icon(:icon="['fas', 'angle-up']" :class="{'nonactive' : sort.target === 'point' && sort.asc !== -1}").icon.sortable-up
            font-awesome-icon(:icon="['fas', 'angle-down']" :class="{'nonactive' : sort.target === 'point' && sort.asc !== 1}").icon.sortable-down
          th(v-on:click="sortQuery('lv')").sortable Lv
            font-awesome-icon(:icon="['fas', 'angle-up']" :class="{'nonactive' : sort.target === 'lv' && sort.asc !== -1}").icon.sortable-up
            font-awesome-icon(:icon="['fas', 'angle-down']" :class="{'nonactive' : sort.target === 'lv' && sort.asc !== 1}").icon.sortable-down
          th 生息MAP
      tbody
        template(v-for="value, index in $store.getters['june2022/filteredTasks']")
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
import { mapGetters } from 'vuex'

export default {
  data() {
    return {
      sort: {
        target: '',
        asc: 1
      },
      filterQuery: {
        label: ''
      }
    }
  },
  computed: {
    ...mapGetters('todo', [
      'filteredTasks'
    ])
  },
  mounted() {
    this.$store.dispatch('june2022/setFilterQueryAction', this.filterQuery)
    this.$store.dispatch('june2022/sortQueryAction', this.sort)
  },
  methods: {
    doneTask (value) {
      this.$store.dispatch('june2022/todoCheckAction', value.id)
    },
    resetTask () {
      this.$store.dispatch('june2022/resetTodosAction')
    },
    handleChangeQuery () {
      this.$store.dispatch('june2022/setFilterQueryAction', this.filterQuery)
    },
    sortQuery (value) {
      this.sort.target =  value
      if(this.sort.asc === 1 && this.sort.target === value) {
        this.sort.asc = -1
      } else {
        this.sort.asc = 1
      }
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
    opacity: 0.85;
    &.nonactive{
      opacity: 0.3;
    }
  }

  .sortable-up{
    bottom: calc(50% - 1px);
  }
  .sortable-down{
    top: calc(50% - 1px);
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