<template lang="pug">
.wrap
  .controllers
    .controller__search
      input(type="text" placeholder="アイテム名で絞り込み" v-model="filterQuery.label" v-on:keyup="changeQuery()").input-full
  .post-block(v-for="item in $store.getters['july2022recipe/getFilteredItems']")
    h3.title-bordered {{ item.title }}
    Note(v-if="item.title === 'メロン系武器'")
      h3 note:
      p 作成したいメロン武器と同じ系統の武器が必要になります。
      p 例：メロンメイスを作成する場合→ディーヴァメイス or ミラージュメイス or アビスメイス
    .table-wrap
      table.table.striped
        thead
          tr
            th 材料アイテム
            th 個数
            th メモ
        tbody
          tr(v-for="material in $store.getters['july2022recipe/getFilterdMaterials'](item.item_id)" :class="colorPriority[material.pattern]")
            td {{ material.item }}
            td {{ material.amount }}
            td {{ material.memo }}
  </template>

<script>
export default {
  data() {
    return {
      filterQuery: {
        label: ''
      },
      colorPriority: {
        '0': 'bg-common',
        '1': 'bg-primary',
        '2': 'bg-secondary',
        '3': 'bg-third'
      }
    }
  },
  mounted() {
    this.$store.dispatch('july2022recipe/filterQueryAction', this.filterQuery)
  },
  methods: {
    changeQuery () {
      this.$store.dispatch('july2022recipe/filterQueryAction', this.filterQuery)
    }
  }
}
</script>

<style lang="scss" scoped>
@use '~/assets/scss/settings' as *;
@use '~/assets/scss/mixins' as *;

@use '~/assets/scss/controllers';
@use '~/assets/scss/table';

.table{
  thead{
    th{
      &:nth-child(1){
        @include media(lg){
          width: 40%;
        }
      }
      &:nth-child(2){
        @include media(lg){
          width: 20%;
        }
      }
      &:nth-child(3){
        @include media(lg){
          width: 40%;
        }
      }
    }
  }

  tr{
    &.bg-primary{
      background-color: #E3F2FD;
      &:nth-child(even){
        background-color: lighten(#E3F2FD, 3);
      }
    }
    &.bg-secondary{
      background-color: #FFF2AD;
      &:nth-child(even){
        background-color: lighten(#FFF2AD, 5);
      }
    }
    &.bg-third{
      background-color: #DCEDC8;
      &:nth-child(even){
        background-color: lighten(#DCEDC8, 3);
      }
    }
    
  }
}

.title-bordered{
  border-bottom: 1px solid  $color-primary;
  padding-bottom: 4px;
}

</style>
