<template lang="pug">
div
  .main-header
    h1 LoveLoveWedding大作戦2022 討伐リスト
  .main-content
    //- pre {{ $store.getters['june2022/getToDos'] }}
    //- pre {{ $store.getters['june2022/doneTodos'] }}
    .controllers
      button(v-on:click="resetTask()").button.button-primary 全てのチェックを外す
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
          template(v-for="value, index in $store.getters['june2022/getToDos']")
            tr(:class="(value.todo === true) ? 'is-ended' : ''" v-on:click="doneTask(value)")
              td.centered
                input(type="checkbox" v-model="value.todo")
              td {{ value.label }}
              td {{ value.baseexp | addComma }}
              td {{ value.point | addComma }}
              td.centered {{ value.lv }}
              td {{ value.map }}
</template>

<script>
export default {
  computed: {
    getGettersValue () {
      return this.$store.getters('june2022/getToDos')
    }
  },
  methods: {
    doneTask (value) {
      this.$store.dispatch('june2022/todoCheckAction', value.id)
    },
    resetTask () {
      this.$store.dispatch('june2022/resetTodosAction')
    }
  }
}
</script>

<style lang="scss" scoped>
@use '~/assets/scss/settings' as *;
@use '~/assets/scss/mixins' as *;

@use '~/assets/scss/buttons' as button;

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
  thead{
    background-color: $color-primary;
    color: #FFF;
    th, td{
      white-space: nowrap;
    }
  }
  tr{
    &:nth-child(even){
      background-color: #EEE;
    }
  }
  th, td{
    padding: 13px 10px;
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
}
</style>
