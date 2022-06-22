<template lang="pug">
div
  .main-header
    h1 LoveLoveWedding大作戦2022 討伐データ
  .main-content
    //- pre {{ $store.getters['june2022/getToDos'] }}
    //- pre {{ $store.getters['june2022/doneTodos'] }}
    .controllers
      button().button.button-primary 全てのチェックを外す
    .table-wrap
      table.table
        thead
          tr
            th ToDo
            th 討伐対象
            th 報酬Exp
            th 報酬Bポイント
        tbody
          template(v-for="value, index in $store.getters['june2022/getToDos']")
            tr(:class="(value.todo === true) ? 'is-ended' : ''" v-on:click="doneTask(index)")
              td.centered
                input(type="checkbox" v-model="value.todo")
                //- pre {{ index }}
              td {{ value.label }}
              td {{ value.baseexp | addComma }}
              td {{ value.point | addComma }}
</template>

<script>
export default {
  computed: {
    getGettersValue () {
      return this.$store.getters('june2022/getMessage')
    }
  },
  methods: {
    doneTask (index) {
      this.$store.dispatch('june2022/todoCheckAction', index)
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
}

.controllers{
  margin-top: 1.5em;
}

.table-wrap{
  @include media(sm){
    width: 100%;
    overflow: auto;
  }
}

.table{
  width: 100%;
  margin-top: 1.5em;
  margin-bottom: 1.5em;
  @include media(sm){
    width: 800px;
  }
  thead{
    background-color: $color-primary;
    color: #FFF;
  }
  tr{
    &:nth-child(even){
      background-color: #EEE;
    }
  }
  th, td{
    padding: 10px;
  }

  tbody{
    tr{
      cursor: pointer;
    }
  }

  .centered{
    text-align: center;
  }

  .is-ended{
    background-color: $color-caution !important;
  }
}
</style>
<template lang="pug">
div
  .main-header
    h1 LoveLoveWedding大作戦2022 討伐データ
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
            //- th メモ
        tbody
          template(v-for="value, index in $store.getters['june2022/getToDos']")
            tr(:class="(value.todo === true) ? 'is-ended' : ''" v-on:click="doneTask(index)")
              td.centered
                input(type="checkbox" v-model="value.todo")
                //- pre {{ index }}
              td {{ value.label }}
              td {{ value.baseexp | addComma }}
              td {{ value.point | addComma }}
              //- td(contenteditable=true)
</template>

<script>
export default {
  computed: {
    getGettersValue () {
      return this.$store.getters('june2022/getMessage')
    }
  },
  methods: {
    doneTask (index) {
      this.$store.dispatch('june2022/todoCheckAction', index)
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
  margin-top: 5px;
  margin-bottom: 40px;
  line-height: 1.5;
  border-bottom: 1px solid #CCC;
  padding-bottom: 10px;
  h1{
    @include media(sm){
      font-size: 1.4em;
    }
  }
}

.controllers{
  margin-top: 1.5em;
}

.table-wrap{
  @include media(sm){
    width: 100%;
    overflow: auto;
  }
}

.table{
  width: 100%;
  margin-top: 1.5em;
  margin-bottom: 1.5em;
  @include media(sm){
    width: 800px;
  }
  thead{
    background-color: $color-primary;
    color: #FFF;
  }
  tr{
    &:nth-child(even){
      background-color: #EEE;
    }
  }
  th, td{
    padding: 10px;
  }

  .centered{
    text-align: center;
  }

  .is-ended{
    background-color: $color-caution !important;
  }
}
</style>
