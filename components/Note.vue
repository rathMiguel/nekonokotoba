<template lang="pug">
.note(:class="type")
  slot
</template>

<script>
export default {
  props: {
    type: {
      type: String,
    }
  }
}
</script>

<style lang="scss" scoped>
@use '~/assets/scss/settings' as *;
@use '~/assets/scss/mixins' as *;

.note{
  padding: 17px 30px;
  margin-top: 1em;
  margin-bottom: 1em;
  background-color: #fff;
  border: 1px solid #EDEDED;
  border-left: 5px solid $color-secondary;
  
  @include media(sm){
    padding: 15px;
  }

  h3{
    font-weight: 700;
    margin-bottom: 10px;
  }

  p{
    margin-bottom: 0;
  }

  &.secondary{
    border-left: 5px solid $color-caution;
  }

  &.memo{
    border: 1px solid $color-secondary;
    position: relative;
    &::before{
      font-family: $en;
      color: $color-secondary;
      content: "NOTE";
      position: absolute;
      top: -1em;
      left: 1em;
      background-color: inherit;
      padding-left: 0.5em;
      padding-right: 0.5em;
      font-size: 1.2em;
    }
  }
}
</style>
