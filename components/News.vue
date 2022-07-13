<template lang="pug">
section.news
  .news-header
    h3.news-maintitle 更新情報
  .news-main
    dl.news-dl(v-for="value in posts")
      dt {{ value.date }}
      dd: nuxt-link(:to="value.link")
        |{{ value.body }}
</template>

<script>
export default {
  data() {
    return {
      posts: [
        {
          date: '2022-06-29',
          link: '/event/june2022',
          body: 'LoveLoveWedding大作戦2022 討伐リストを公開しました'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
@use '~/assets/scss/settings' as *;
@use '~/assets/scss/mixins' as *;

.news-dl{
  border-top: 1px solid lighten($color-primary, 65);
  border-bottom: 1px solid lighten($color-primary, 65);
  overflow: hidden;
  padding-top: 15px;
  padding-bottom: 15px;
  margin-bottom: -1px;
  dt{
    color: #AAA;
    @include media(md-lg){
      float: left;
      padding-left: 0.5em;
    }
  }
  dd{
    @include media(md-lg){
      padding-left: 7.5em;
    }
  }
}

.news-maintitle{
  font-size: 1.4em;
  margin-bottom: 10px;
}
</style>