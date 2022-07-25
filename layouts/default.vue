<template lang="pug">
  div
    TheHeader
    main(role="=main")
      nuxt
    TheFooter
</template>

<style lang="scss">
@use '~/assets/scss/base' as base;
@use '~/assets/scss/layout' as layout;

@use '~/assets/scss/buttons' as button;
@use '~/assets/scss/form' as form;
@use '~/assets/scss/blog' as blog;
</style>
