<template lang="pug">
.main
  Mainimage
  News
  Social
</template>
  
<script>
import Meta from '~/plugins/meta'

export default {
  mixins: [ Meta ],
  data() {
    return {
      meta: {
        title: `${process.env.BASETITLE}`,
        description: 'ラグナロクオンライン内で集めたデータやちょっと便利かもしれないツール等を公開しています。',
        type: 'website',
        url: `${process.env.BASEURL}/`,
        image: `${process.env.BASEURL}/ogp.png`
      }
    }
  }
}
</script>
