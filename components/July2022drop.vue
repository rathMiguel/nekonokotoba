<template lang="pug">
.wrap
  .controllers
    .controller__search
      input(type="text" placeholder="アイテム名で絞り込み" v-model="filterQuery.label" v-on:keyup="changeQuery()").input-full
  .post-block(v-for="item in $store.getters['july2022drop/getFilteredItems']")
    h3.title-bordered {{ item.title }}
    .table-wrap
      table.table.fixed.striped
        thead
          tr
            th ドロップするモンスター
            th メモ
        tbody
          tr(v-for="mob in $store.getters['july2022drop/getFilterdMobs'](item.item_id)")
            td {{ mob.mob }}
            td {{ mob.memo }}
  </template>

<script>
export default {
  data() {
    return {
      filterQuery: {
        label: ''
      }
    }
  },
  mounted() {
    this.$store.dispatch('july2022drop/filterQueryAction', this.filterQuery)
  },
  methods: {
    changeQuery () {
      this.$store.dispatch('july2022drop/filterQueryAction', this.filterQuery)
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
  &.fixed{
    table-layout: fixed;
  }
}

.title-bordered{
  border-bottom: 1px solid  $color-primary;
  padding-bottom: 4px;
}

</style>