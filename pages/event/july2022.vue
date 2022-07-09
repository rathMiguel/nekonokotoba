<template lang="pug">
div
  MainHeader(h1='ゲフェンメロンフェスタ2022 討伐リスト')
  .main-content
    //- client-only(placeholder="Loading...")
      TodoJuly2022
    client-only(placeholder="Loading...")
      //- July2022drop
      July2022recipe
</template>

<script>
import Meta from '~/plugins/meta'

export default {
  mixins: [Meta],
  data() {
    return {
      meta: {
        title: `ゲフェンメロンフェスタ2022 討伐リスト - ${process.env.BASETITLE}`,
        description: 'TODO機能付きゲフェンメロンフェスタ2022の討伐リストを公開しています。',
        type: 'website',
        url: `${process.env.BASEURL}/event/july2022/`,
        image: `${process.env.BASEURL}/ogp.png`
      }
    }
  }
}
</script>
