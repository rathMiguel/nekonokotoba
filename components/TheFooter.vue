<template lang="pug">
footer#footer
  p: small © Gravity Co., Ltd. & Lee MyoungJin(studio DTDS). All rights reserved.<br>© GungHo Online Entertainment, Inc. All Rights Reserved.<br>当コンテンツの再利用（再転載・配布など）は、禁止しています。
</template>

<style lang="scss">
@use '~/assets/scss/settings' as *;
@use '~/assets/scss/mixins' as *;

#footer{
  margin-top: 60px;
  background-color: $color-secondary;
  padding: 1em;
  @include media(md-lg){
    margin-left: $nav-width;
    text-align: right;
  }

  p{
    margin-bottom: 0;
  }
}
</style>
