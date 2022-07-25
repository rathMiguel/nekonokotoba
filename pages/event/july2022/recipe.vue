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
@use '~/assets/scss/tab';
</style>