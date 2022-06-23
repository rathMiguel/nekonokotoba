<template lang="pug">
nav#nav
  ul.nav-list
    li
      nuxt-link(to="/").link-wrap
        font-awesome-icon(:icon="['far', 'heart']").icon
        span.link-text HOME
    li
      .link-wrap
        font-awesome-icon(:icon="['far', 'flag']").icon
        span.link-text EVENT DATA
      ul
        li
          nuxt-link(to="/event/june2022").link-wrap LoveLoveWedding大作戦2022
    li
      .link-wrap
        font-awesome-icon(:icon="['far', 'rectangle-list']").icon
        span.link-text DATA BASE
    li
      .link-wrap
        font-awesome-icon(:icon="['far', 'sun']").icon
        span.link-text TOOLS
</template>

<style lang="scss" scoped>
@use '~/assets/scss/settings' as *;
@use '~/assets/scss/mixins' as *;

.nav-list{
  padding: 0;
  margin: 0;
  font-family: $en;
  line-height: 1.4;
  li{
    list-style: none;
    padding: 0;
    margin: 0;
    position: relative;
  }
  & > li{
    border-bottom: 1px solid rgba(#FFF, 30%);
    &:hover{
      & > ul{
        display: block;
        @include media(sm){
          padding-left: 1.5em;
        }
        li{
          @include media(sm){
            border-bottom: none;
          }
        }
      }
    }
    .icon{
      margin-right: 10px;
    }
    &:first-child{
      border-top: 1px solid rgba(#FFF, 30%);
    }
    & > ul{
      background-color: $color-primary;
      width: $nav-width;
      padding: 0;
      margin: 0;
      display: none;
      @include media(md-lg){
        position: absolute;
        left: $nav-width;
        top: 0;
      }
      li{
        border-bottom: 1px solid rgba(#FFF, 30%);
      }
    }
  }
  a{
    color: #FFF;
    text-decoration: none;
    width: 100%;
  }
  .link-wrap{
    display: flex;
    align-items: center;
    width: 100%;
    padding: 18px 10px;
  }
}

</style>
