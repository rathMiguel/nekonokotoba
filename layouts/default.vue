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

@use '~/assets/scss/buttons' as button;
@use '~/assets/scss/form' as form;
@use '~/assets/scss/blog' as blog;

body {
  font-family: $ja_go;
  font-size: $fz-default;
  color: $color-default;
  -webkit-text-size-adjust: 100%;
  -ms-text-size-adjust: 100%;
  font-size: $fz-default;
  line-height: 1.85;
  background-color: #F6F6F6;
  font-weight: 500;
  -webkit-font-smoothing: subpixel-antialiased;
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
  margin-bottom: 1.4em;
}

main{
  display: block;
  padding: $content-gap;
  margin-left: $nav-width;
  @include media(sm){
    padding: $content-gap-sm;
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
