<template lang="pug">
  .eyecatch
    picture
      source(:srcset="getSrc(`/images/eyecatch/${name}`, 'webp')" type="image/webp")
      source(:srcset="getSrc(`/images/eyecatch/${name}`, 'jpg')" type="image/jpeg")
      nuxt-img(:src="`/images/eyecatch/${name}`" height=250)
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true
    }
  },
  methods: {
    getSrc(src, format) {
      const imgUrl = this.$img(src, {
        format: format,
        quality: 70
      })
      return imgUrl
    }
  }
}
</script>

<style lang="scss" scoped>
@use '~/assets/scss/settings' as *;
@use '~/assets/scss/mixins' as *;

.eyecatch{
  margin-bottom: 1.8em;
  img{
    width: 100%;
    height: 250px;
    object-fit: cover;
    @include media(sm){
      height: 150px;
    }
  }
}

</style>
