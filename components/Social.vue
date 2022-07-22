<template lang="pug">
.pr-social
  a(href="https://twitter.com/jukka_tan" target="_blank")
    nuxt-img(src="/images/social/emo_twitter.png" quality=70 width=27 height=24).emo-twitter
    nuxt-img(src="/images/social/chara_jukka.png" quality=70 width=48 height=80).character-jukka
</template>

<style lang="scss" scoped>
@use '~/assets/scss/settings' as *;
@use '~/assets/scss/mixins' as *;

.pr-social{
  position: relative;
  bottom: 0;
  margin-top: 50px;
  margin-bottom: -130px;
  @include media(sm){
    margin-bottom: -100px;
  }
  a{
    display: inline-block;
    &:hover{
      opacity: inherit;
      .emo-twitter{
        opacity: 1;
      }
    }
  }
}

.emo-twitter{
  position: absolute;
  left: -20px;
  top: -16px;
  opacity: 0;
}
</style>