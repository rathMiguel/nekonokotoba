<template lang="pug">
div
  MainHeader(h1='ゲフェンメロンフェスタ2022 デイリークエスト')
  .main-content
    section.daily-section
      header.daily-section__header
        h2.title-section 2022-01-01
      .daily-section__main
        .daily-lookingfor
          .daily-lookingfor__block
            Place(name="sample_detail.jpg" map="sample_map.png")
          .daily-lookingfor__block
            Place(name="sample_detail.jpg" map="sample_map.png")
          .daily-lookingfor__block
            Place(name="sample_detail.jpg" map="sample_map.png")
        .daily-outro
          dl.daily-dl
            dt Inferno
            dd 討伐募集のチラシ
          dl.daily-dl
            dt Inferno
            dd 討伐募集のチラシ
</template>

<script>
import Meta from '~/plugins/meta'

export default {
  mixins: [ Meta ],
  data() {
    return {
      meta: {
        title: `${process.env.BASETITLE}`,
        description: 'ゲフェンメロンフェスタ2022のデイリークエストまとめています',
        type: 'website',
        url: `${process.env.BASEURL}/`,
        image: `${process.env.BASEURL}/ogp.png`
      },
      dailyData: [
        {
          date: '2022-07-19',
          lookingfor: [
            {
              level: 'easy',
              map: '',
              detail: ''
            },
            {
              level: 'normal',
              map: '',
              detail: ''
            },
            {
              level: 'hard',
              map: '',
              detail: ''
            }
          ]
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
@use '~/assets/scss/settings' as *;
@use '~/assets/scss/mixins' as *;

.daily-section{
  margin-bottom: 2em;
   &__header{
    margin-bottom: 0.5em;
   }
}

.daily-lookingfor{
  display: flex;
  justify-content: center;
  margin-bottom: 1em;
  @include media(sm){
    flex-direction: column;
  }
  @include media(md-lg){
    margin-left: -5px;
    margin-right: -5px;
  }

  & > *{
    margin-bottom: 1em;
    @include media(md-lg){
      margin-left: 5px;
      margin-right: 5px;
    }
  }
}

.daily-dl{
  margin-bottom: 0.5em;
}
</style>
