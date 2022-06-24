<template lang="pug"></template>

<script>
import Meta from '~/plugins/meta'

export default {
  mixins: [Meta],
  data() {
    return {
      meta: {
        title: `${process.env.BASETITLE}`,
        description: 'ラグナロクオンライン内で集めたデータやちょっと便利かもしれないツール等を公開しています。',
        type: 'website',
        url: `${process.env.BASEURL}/event/june2022/`,
        image: `${process.env.BASEURL}/ogp.jpg`
      },
      filterQuery: {
        label: ''
      }
    }
  }
}
</script>
