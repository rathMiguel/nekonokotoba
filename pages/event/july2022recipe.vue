<template lang="pug">
div
  MainHeader(h1='ゲフェンメロンフェスタ2022 レシピ、材料入手先リスト')
  .main-content
    .tab
      .tab-header
        ul.tab-header__list
          li: span.tab-switch(:class="(tabIndex === 1) ? 'active' : ''" v-on:click="tabSwitch(1)") レシピをさがす
          li: span.tab-switch(:class="(tabIndex === 2) ? 'active' : ''" v-on:click="tabSwitch(2)") 材料をさがす
      .tab-main
        .tab-content(v-if="tabIndex === 1")
          client-only(placeholder="Loading...")
            July2022recipe
        .tab-content(v-if="tabIndex === 2")
          client-only(placeholder="Loading...")
            July2022drop
</template>

<script>
import Meta from '~/plugins/meta'

export default {
  mixins: [Meta],
  data() {
    return {
      meta: {
        title: `ゲフェンメロンフェスタ2022 レシピをさがす - ${process.env.BASETITLE}`,
        description: 'ゲフェンメロンフェスタ2022で作成できるレシピ、材料入手先を掲載しています',
        type: 'website',
        url: `${process.env.BASEURL}/event/july2022recipe/`,
        image: `${process.env.BASEURL}/ogp.png`
      },
      tabIndex: 1
    }
  },
  methods: {
    tabSwitch: function(num) {
      this.tabIndex = num
    }
  },
}
</script>

<style lang="scss" scoped>
@use '~/assets/scss/settings' as *;
@use '~/assets/scss/mixins' as *;

.tab{
  margin-top: 1.5em;
  margin-bottom: 1.5em;
}

.tab-header{
  &__list{
    display: flex;
    list-style-type: none;
    margin: 0;
    padding: 0;
    margin-left: -1px;
    margin-right: -1px;
    li{
      margin-left: 1px;
      margin-right: 1px;
      @include media(sm-md){
        width: 100%;
      }
    }
    .tab-switch{
      display: inline-flex;
      justify-content: center;
      align-items: center;
      background-color: #fff;
      height: 60px;
      background-color: $color-minor;
      cursor: pointer;
      position: relative;
      width: 100%;
      @include media(lg){
        min-width: 300px;
      }

      &.active{
        background-color: #fff;
        &::before{
          content: "";
          display: block;
          width: 100%;
          height: 5px;
          background-color: $color-secondary;
          position: absolute;
          top: 0;
          left: 0;
        }
      }
    }
  }
}

.tab-content{
  &:not(:first-child){
    display: none;
  }
}

.tab-main{
  background-color: #fff;
  padding: 30px;
  @include media(sm){
    padding: 15px;
  }
}

</style>
