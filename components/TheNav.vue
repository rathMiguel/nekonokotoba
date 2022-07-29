<template lang="pug">
nav#nav
  //- |{{ $data }}
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
          nuxt-link(to="/event/july2022/").link-wrap ゲフェンメロンフェスタ優品
          ul
            li: nuxt-link(:to="`/event/july2022/daily/?d=${d}`").link-wrap 納品 / 迷子探し
            li: nuxt-link(to="/event/july2022/hunt/").link-wrap 討伐リスト
            li: nuxt-link(to="/event/july2022/recipe/").link-wrap レシピ / 材料リスト
            li: nuxt-link(to="/event/july2022/story/").link-wrap ストーリークエスト
        li: nuxt-link(to="/event/transport/").link-wrap 特殊転送先リスト
        li: nuxt-link(to="/event/").link-wrap 過去イベント一覧
    li
      .link-wrap
        font-awesome-icon(:icon="['far', 'rectangle-list']").icon
        span.link-text DATA BASE
    li
      .link-wrap
        font-awesome-icon(:icon="['far', 'sun']").icon
        span.link-text TOOLS
</template>

<script>
export default {
  data () {
    return {
      d: ''
    }
  },
  mounted: function() {
    const date = new Date()
    let y = date.getFullYear()
    let m = ('00' + (date.getMonth() + 1)).slice(-2)
    let d = ('00' + date.getDate()).slice(-2)

    return this.d = y + m + d
  },
}
</script>


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

        & > ul{
          width: $nav-width;
          padding: 0;
          margin: 0;
          background-color: $color-primary;
          
          @include media(sm){
            padding-left: 1.5em;
            width: calc($nav-width - 1.5em);
          }
          @include media(md-lg){
            display: none;
            position: absolute;
            left: $nav-width;
            top: 0;
          }
        }

        &:hover{
          & > ul{
            display: block;
            li{
              @include media(sm){
                border-bottom: none;
              }
            }
          }
        }
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
