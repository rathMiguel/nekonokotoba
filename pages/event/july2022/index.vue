<template lang="pug">
div
  MainHeader(h1='ゲフェンメロンフェスタ優品 イベント情報')
  ContentEyecatch(name="july2022.png")
  .main-content
    h2 特設サイト
    p: a(href="https://ragnarokonline.gungho.jp/special/melon-fes2022/" target="_blank") ゲフェン・メロンフェスタ ～深淵からの贈り物 優品～ | ラグナロクオンライン公式サイト
    h2 会場への行き方
    h2 デイリークエスト
    h3 討伐クエスト
    nuxt-link(to="/event/july2022/hunt/") 討伐リスト
    h3 納品/探索
    nuxt-link(to="/event/july2022/daily/") 納品、探索クエスト
    h2 レシピ/材料一覧
    nuxt-link(to="/event/july2022/recipe/") レシピ・材料一覧
</template>

<script>
import Meta from '~/plugins/meta'

export default {
  mixins: [ Meta ],
  data() {
    return {
      meta: {
        title: `ゲフェンメロンフェスタ優品 イベントまとめ - ${process.env.BASETITLE}`,
        description: '',
        type: 'website',
        url: `${process.env.BASEURL}/`,
        image: `${process.env.BASEURL}/ogp.png`
      }
    }
  }
}
</script>
