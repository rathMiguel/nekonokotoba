<template lang="pug">
div
  .main-header
    h1 LoveLoveWedding大作戦2022 討伐リスト
  .main-content
    //- pre {{ $data }}
    //- pre {{ $store.getters['june2022/filteredTasks'] }}
    .controllers
      .controller__buttons
        button(v-on:click="resetTask()").button.button-primary 全てのチェックを外す
      .controller__search
        input(type="text" placeholder="キーワードで絞り込み" v-model="filterQuery.label" v-on:keyup="handleChangeQuery").input-full
    .table-wrap
      table.table
        thead
          tr
            th ToDo
            th 討伐対象
            th 報酬Exp
            th 報酬Bポイント
            th Lv
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
import { mapGetters } from 'vuex';

export default {
  data() {
    return {
      filterQuery: {
        label: ''
      }
    }
  },
  computed: {
    ...mapGetters('todo', [
      'filteredTasks'
    ]),
  },
  mounted() {
    this.$store.dispatch('june2022/setFilterQuery', this.filterQuery)
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
  }
}
</script>

<style lang="scss" scoped>
@use '~/assets/scss/settings' as *;
@use '~/assets/scss/mixins' as *;

@use '~/assets/scss/buttons' as button;
@use '~/assets/scss/form' as form;

.main-header{
  margin-bottom: 40px;
  line-height: 1.5;
  h1{
    @include media(sm){
      font-size: 1.6em;
    }
    @include media(md){
      font-size: 1.8em;
    }
  }
}

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
      color: lighten($color-default, 30%);
    }
    &.check-false{
      color: darken($color-caution, 40%);
    }
  }
}
</style>
