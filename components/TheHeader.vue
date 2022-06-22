<template lang="pug">
header#header
  i.navbar(v-on:click="navToggle"): img(src="~/assets/images/cat.svg" width=20)
  i.nav-layer(v-on:click="navToggle" :class="(isActive === true) ? 'is-active' : ''")
  .header-fixed(:class="(isActive === true) ? 'is-active' : ''")
    .header-logo: nuxt-link(to="/"): img(src="~/assets/images/logo.svg" alt="" width=150)
    TheNav
</template>

<script>
export default {
  data () {
    return {
      isActive: false
    }
  },
  methods: {
    navToggle () {
      this.isActive = !this.isActive
    }
  }
}
</script>

<style lang="scss" scoped>
@use '~/assets/scss/settings' as *;
@use '~/assets/scss/mixins' as *;

.navbar{
  position: fixed;
  z-index: 1010;
  top: 15px;
  left: 15px;
  background-color: $color-primary;
  height: 44px;
  width: 44px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100%;
  cursor: pointer;
  border: 1px solid #FFF;
  @include media(md-lg){
    display: none;
  }
}

.nav-layer{
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(#000, 10%);
  display: none;
  &.is-active{
    display: block;
  }
}

.header-fixed{
  position: fixed;
  left: 0;
  top: 0;
  z-index: 1000;
  height: 100vh;
  width: $nav-width;
  background-color: $color-primary;
  color: #FFF;
  @include media(sm){
    left: -100%;
    padding-top: 75px;
  }
  &.is-active{
    left: 0;
  }
}

.header-logo{
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
  @include media(sm){
    display: none;
  }
}
</style>
