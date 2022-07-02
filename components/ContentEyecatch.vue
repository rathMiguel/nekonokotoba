<template lang="pug">
  .eyecatch
    img(:src="require(`~/assets/images/${name}`)" alt="")
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true
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
