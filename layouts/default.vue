<template lang="pug">
  div
    TheHeader
    main(role="=main")
      nuxt
    TheFooter
</template>

<style lang="scss">
@use '~/assets/scss/settings' as *;
@use '~/assets/scss/mixins' as *;

@use '~/assets/scss/form' as form;

body {
  font-family: $ja_go;
  font-size: $fz-default;
  color: $color-default;
  -webkit-text-size-adjust: 100%;
  -ms-text-size-adjust: 100%;
  font-size: $fz-default;
  line-height: 1.85;
  background-color: #F6F6F6;
  @include media(sm){
    line-height: 1.7;
  }
}

a{
  text-decoration: underline;
  outline: none;
  color: inherit;
  &:hover{
    text-decoration: none;
    opacity: 0.8;
  }
}

p{
  margin-bottom: 1.85em;
  @include media(sm){
    margin-bottom: 1.7em;
  }
}

main{
  display: block;
  padding: 30px;
  margin-left: $nav-width;
  @include media(sm){
    padding: 15px;
    padding-top: 68px;
    margin-left: 0;
  }
}

strong{
  font-weight: 700;
}

div, article, aside, details, figcaption, figure,
footer, header, hgroup, menu, nav, section {
  box-sizing: border-box;
}

img{
  vertical-align: middle;
  -webkit-backface-visibility: hidden;
  image-rendering: -webkit-optimize-contrast;
  image-rendering: pixelated;
  max-width: 100%;
  height: auto;
}

.container{
  max-width: 1140px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 20px;
  padding-right: 20px;
}

.br-lg{
  @include media(sm){
    display: none;
  }
}

.br-sm{
  @include media(md-lg){
    display: none;
  }
}
</style>
