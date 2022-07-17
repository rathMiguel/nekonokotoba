<template lang="pug">
.place
  .place-main
    .place-map(v-on:click="zoomToggle()" v-if="map")
      i.icon-zoom: font-awesome-icon(:icon="['fas', 'magnifying-glass']")
      picture
        source(:srcset="getSrc(`/images/map/${map}`, 'webp')" type="image/webp")
        source(:srcset="getSrc(`/images/map/${map}`, 'jpg')" type="image/jpeg")
        nuxt-img(:src="`/images/map/${map}`" height=120 width=120 preload decoding="async")
    .place-detail
      picture
        source(:srcset="getSrc(`/images/map/${name}`, 'webp')" type="image/webp")
        source(:srcset="getSrc(`/images/map/${name}`, 'jpg')" type="image/jpeg")
        nuxt-img(:src="`/images/map/${name}`" width=1100 preload decoding="async")
  .place-zoom(v-if="zoom && map")
    i.place-zoom__layer(v-on:click="zoomClose()")
    span.place-zoom__photo
      .place-zoom__close(v-on:click="zoomClose()") 閉じる×
      picture
        source(:srcset="getSrc(`/images/map/${map}`, 'webp')" type="image/webp")
        source(:srcset="getSrc(`/images/map/${map}`, 'jpg')" type="image/jpeg")
        nuxt-img(:src="`/images/map/${map}`" width=500 preload decoding="async")
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true
    },
    map: {
      type: String,
      required: false
    }
  },
  data() {
    return {
      zoom: false
    }
  },
  methods: {
    getSrc (src, format) {
      const imgUrl = this.$img(src, {
        format: format,
        quality: 70
      })
      return imgUrl
    },
    zoomToggle () {
      this.zoom = !this.zoom
    },
    zoomClose () {
      this.zoom = false
    }
  }
}
</script>

<style lang="scss" scoped>
@use '~/assets/scss/settings' as *;
@use '~/assets/scss/mixins' as *;

.place-main{
  position: relative;
}

.place-map{
  position: absolute;
  right: 0;
  top: 0;
  border-left: 1px solid #FFF;
  border-bottom: 1px solid #FFF;
  cursor: pointer;

  img{
    width: 120px;
  }

  .icon-zoom{
    position: absolute;
    left: 0;
    top: 0;
    height: 25px;
    width: 25px;
    background-color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    color: $color-primary;
    background-color: rgba(#fff, 0.6);
    font-size: 13px;
  }
}

.place-detail{
  img{
    width: 100%;
  }
}

.place-zoom{
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100vh;
  z-index: 2000;
  display: flex;
  justify-content: center;
  align-items: center;

  img{
    height: auto;
    position: relative;
    z-index: 2010;
  }

  &__layer{
    display: block;
    position: absolute;
    left: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(#000, 0.5);
    z-index: 1990;
  }

  &__close{
    cursor: pointer;
  }

  &__photo{
    color: #FFF;
    position: relative;
    z-index: 1990;
    text-align: right;
    margin-top: calc(-1em + 5px);
    padding-left: 10px;
    padding-right: 10px;
    img{
      margin-top: 5px;
    }
  }
}
</style>
