<template lang="pug">
div
  MainHeader(h1="過去のシーズンイベント一覧")
  ContentEyecatch(name="transport.jpg")
  .main-content
    article.article-blog
      p 期間限定イベントの情報をまとめています
      ul
        //- li
          nuxt-link(to="/event/july2022/") ゲフェンメロンフェスタ　優品
          ul
            li: nuxt-link(to="/event/july2022/daily/") 納品 / 迷子探し
            li: nuxt-link(to="/event/july2022/hunt/") 討伐リスト
            li: nuxt-link(to="/event/july2022/recipe/") レシピ / 材料リスト
            li: nuxt-link(to="/event/july2022/story/") ストーリークエスト
        li: nuxt-link(to="/event/june2022/") LoveLoveWedding大作戦2022
</template>

<script>
import Meta from '~/plugins/meta'

export default {
  mixins: [Meta],
  data() {
    return {
      meta: {
        title: `過去のシーズンイベント一覧 - ${process.env.BASETITLE}`,
        description: '過去に開催されたのシーズンイベント一覧です',
        type: 'website',
        url: `${process.env.BASEURL}/event/transport/`,
        image: `${process.env.BASEURL}/ogp.png`
      }
    }
  }
}
</script>
