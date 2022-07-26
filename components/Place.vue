<template lang="pug">
.place
  .place-wrap
    .place-main
      .place-map(v-on:click="zoomToggle('map')" v-if="map")
        i.icon-zoom: font-awesome-icon(:icon="['fas', 'magnifying-glass']")
        picture
          source(:srcset="getSrc(`/images/map/${map}`, 'webp')" type="image/webp" height=120 width=120)
          source(:srcset="getSrc(`/images/map/${map}`, 'jpg')" type="image/jpeg" height=120 width=120)
          nuxt-img(:src="`/images/map/${map}`" height=120 width=120 preload decoding="async")
      .place-detail(v-on:click="zoomToggle('detail')")
        picture
          source(:srcset="getSrc(`/images/map/${name}`, 'webp')" type="image/webp")
          source(:srcset="getSrc(`/images/map/${name}`, 'jpg')" type="image/jpeg")
          nuxt-img(:src="`/images/map/${name}`" width=1000 height=800 preload decoding="async")
    .place-zoom(v-if="zoom.map || zoom.detail")
      i.place-zoom__layer(v-on:click="zoomClose()")
      span.place-zoom__photo
        .place-zoom__close(v-on:click="zoomClose()") 閉じる×
        picture(v-if="zoom.detail")
          source(:srcset="getSrc(`/images/map/${name}`, 'webp')" type="image/webp")
          source(:srcset="getSrc(`/images/map/${name}`, 'jpg')" type="image/jpeg")
          nuxt-img(:src="`/images/map/${name}`" width=800 height=600 preload decoding="async")
        picture(v-if="zoom.map")
          source(:srcset="getSrc(`/images/map/${map}`, 'webp')" type="image/webp")
          source(:srcset="getSrc(`/images/map/${map}`, 'jpg')" type="image/jpeg")
          nuxt-img(:src="`/images/map/${map}`" width=500 height=500 preload decoding="async")
  .place-caption
    slot
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
      zoom: {
        map: false,
        detail: false
      }
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
    zoomToggle (target) {
      this.zoom[target] = !this.zoom[target]
    },
    zoomClose () {
      this.zoom['detail']  = false
      this.zoom['map']  = false
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
  z-index: 5;
  border-left: 1px solid #FFF;
  border-bottom: 1px solid #FFF;
  cursor: pointer;
  max-width: 150px;
  width: 25%;

  img{
    max-width: 150px;
    width: 100%;
    transition: filter ease 0.5s;
    &:hover{
      filter: brightness(1.5);
    }
  }

  .icon-zoom{
    position: absolute;
    right: 0;
    top: 0;
    z-index: 10;
    height: 1.5em;
    width: 1.5em;
    background-color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    color: $color-primary;
    background-color: rgba(#fff, 0.6);
    font-size: 0.82em;
  }
}

.place-detail{
  img{
    width: 100%;
    cursor: pointer;
    transition: filter ease 0.5s;
    &:hover{
      filter: brightness(1.1);
    }
  }
}

.place-caption{
  margin-top: 8px;
  font-size: 0.9em;
  line-height: 1.5;
  p:last-child{
    margin-bottom: 0;
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
