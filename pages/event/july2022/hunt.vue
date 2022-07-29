<template lang="pug">
div
  MainHeader(h1='ゲフェンメロンフェスタ優品 討伐リスト')
  .main-content
    client-only(placeholder="Loading...")
      TodoJuly2022
</template>

<script>
import Meta from '~/plugins/meta'

export default {
  mixins: [Meta],
  data() {
    return {
      meta: {
        title: `ゲフェンメロンフェスタ優品 討伐リスト - ${process.env.BASETITLE}`,
        description: 'ゲフェンメロンフェスタ優品の討伐リストを公開しています。TODO機能付き。',
        type: 'website',
        url: `${process.env.BASEURL}/event/july2022/hunt/`,
        image: `${process.env.BASEURL}/ogp.png`
      }
    }
  }
}
</script>
