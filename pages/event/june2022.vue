<template lang="pug">
div
  MainHeader(h1='LoveLoveWedding大作戦2022 討伐リスト')
  .main-content
    client-only(placeholder="Loading...")
      TodoJune2022
</template>

<script>
import Meta from '~/plugins/meta'

export default {
  mixins: [Meta],
  data() {
    return {
      meta: {
        title: `LoveLoveWedding大作戦2022 討伐リスト - ${process.env.BASETITLE}`,
        description: 'TODO機能付きLoveLoveWedding大作戦2022の討伐リストを公開しています。',
        type: 'website',
        url: `${process.env.BASEURL}/event/june2022/`,
        image: `${process.env.BASEURL}/ogp.png`
      }
    }
  }
}
</script>
