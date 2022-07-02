<template lang="pug">
.main-header
  h1(v-text="h1")
  slot
</template>

<script>
export default {
  props: {
    h1: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
@use '~/assets/scss/settings' as *;
@use '~/assets/scss/mixins' as *;

.main-header{
  margin-bottom: 40px;
  line-height: 1.5;
  h1{
    @include media(sm){
      font-size: 1.6em;
    }
    @include media(md){
      font-size: 1.8em;
    }
  }
}
</style>
