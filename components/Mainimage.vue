<template lang="pug">
section.mainimage
  .mainimage__gallery
    .gallery-block(v-for="name in gallery")
      picture
        source(:srcset="getSrc(`/images/top/${name}`, 'webp')" type="image/webp" height=300 width=300)
        source(:srcset="getSrc(`/images/top/${name}`, 'jpg')" type="image/jpeg" height=300 width=300)
        nuxt-img(:src="`/images/top/${name}`" height=300 width=300 preload decoding="async")
  .mainimage__logo
    h1: img(src="/images/logo_top.svg" alt="猫のことば　研究所" width=400 height=135)
    .mainimage-subtitle
      p ラグナロクオンラインをゆるく研究。
</template>

<script>
export default {
  data() {
    return {
      gallery: [
        'screenBreidablik030.jpg',
        'screenBreidablik008.jpg',
        'screenBreidablik007.jpg',
        'screenBreidablik005.jpg',
        'screenBreidablik041.jpg',
        'screenBreidablik017.jpg',
        'screenMimir003.jpg',
        'screenBreidablik046.jpg',
      ]
    }
  },
  methods: {
    getSrc(src, format) {
      const imgUrl = this.$img(src, {
        format: format,
        quality: 60,
        width: 300,
        height: 300
      })
      return imgUrl
    }
  }
}
</script>

<style lang="scss" scoped>
@use '~/assets/scss/settings' as *;
@use '~/assets/scss/mixins' as *;

//
// mainimage
//

.mainimage{
  position: relative;
  margin: -$content-gap;
  margin-bottom: $content-gap;
  display: flex;
  align-items: center;
  overflow: hidden;
  max-height: 450px;
  
  @include media(sm){
    margin: -$content-gap-sm;
    margin-top: 0;
    margin-bottom: $content-gap-sm;
    max-height: 187px;
  }

  &__gallery{
    display: flex;
    flex-wrap: wrap;
    position: relative;
    top: 0;
    &::before{
      content: "";
      display: block;
      position: absolute;
      z-index: -5;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      background-color: rgba($color-primary, 1);
      mix-blend-mode: multiply;
    }
    & > * {
      width: 25%;
    }

    picture{
      width: 100%;
      opacity: 0.2;
      filter: saturate(10%);
      transition: opacity ease-in 0.5s;
      img{
        width: 100%;
        object-fit: cover;
        aspect-ratio: 1 / 1;
      }
    }
  }

  &__logo{
    position: absolute;
    z-index: 10;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #FFF;
    h1{
      margin-left: -20px;
      @include media(md-lg){
        margin-left: -60px;
      }
    }
    img{
      width: 400px;
      @include media(sm){
        width: 200px;
      }
    }
  }
}

.mainimage-subtitle{
  position: relative;
  margin-top: 10px;
  @include media(md-lg){
    font-size: 1.2em;
  }
  &::before{
    display: block;
    content: "";
    height: 4px;
    width: 40px;
    background-color: #fff;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 1em;
    margin-top: 0em;
  }
  
  p{
    margin-bottom: 0;
  }
}
</style>