<template lang="pug">
.note
  slot
</template>

<style lang="scss" scoped>
@use '~/assets/scss/settings' as *;
@use '~/assets/scss/mixins' as *;

.note{
  padding: 17px 30px;
  margin-top: 1em;
  margin-bottom: 1em;
  background-color: #fff;
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
}
</style>
