<template lang="pug">
div
  MainHeader(h1='ゲフェンメロンフェスタ2022 デイリークエスト')
  .main-content
    section.daily-section(v-for="value in dailyData")
      header.daily-section__header
        h2.title-section {{ value.date }}
      .daily-section__main
        .daily-lookingfor
          .daily-lookingfor__block(v-for="item in value.lookingfor")
            Place(:name="item.detail" :map="item.map")
        .daily-outro(v-for="item in value.delivary")
          dl.daily-dl
            dt {{ item.level }}
            dd
              a(:href="`https://rotool.gungho.jp/monster/item.php?item=${item.item_id}`" target="_blank") {{ item.item_name }}
              span.amount {{ item.amount }}個
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
              level: 'Normal',
              map: '202207m011map.jpg',
              detail: '202207m011detail.jpg',
              caption: 'コモド'
            },
            {
              level: 'Hard',
              map: '202207m012map.jpg',
              detail: '202207m012detail.jpg',
              caption: '名も無き島 修道院3F'
            }
          ],
          delivary: [
            {
              level: 'Easy',
              item_id: 928,
              item_name: '虫の觸角',
              amount: '50'
            },
            {
              level: 'Normal',
              item_id: 7119,
              item_name: '菌糸',
              amount: '10'
            },
            {
              level: 'Hard',
              item_id: 25258,
              item_name: '壊れた矢',
              amount: '30'
            },
            {
              level: 'Inferno',
              item_id: 25262,
              item_name: '乾燥したクローバー',
              amount: '1'
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
    width: 100%;
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
