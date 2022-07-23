<template lang="pug">
div
  MainHeader(h1='ゲフェンメロンフェスタ2022 デイリークエスト')
  .main-content
    section.daily-section(v-for="value in dailyData")
      header.daily-section__header
        h2.title-section {{ value.date }}
      .daily-section__main
        h3 迷子探し
        .daily-lookingfor
          .daily-lookingfor__block(v-for="item in value.lookingfor")
            Place(:name="item.detail" :map="item.map")
              p {{ item.level }}　{{ item.caption }}
        h3 納品
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
        description: 'ゲフェンメロンフェスタ2022のデイリークエストをまとめています',
        type: 'website',
        url: `${process.env.BASEURL}/`,
        image: `${process.env.BASEURL}/ogp.png`
      },
      dailyData: [
        {
          date: '2022-07-23',
          lookingfor: [
            {
              level: 'Easy',
              map: '202207m051map.jpg',
              detail: '202207m051detail.jpg',
              caption: '龍之城 室内　入ってからまっすぐ進む'
            },
            {
              level: 'Hard',
              map: '202207m052map.jpg',
              detail: '202207m052detail.jpg',
              caption: 'タートルアイランド3F 真ん中あたり'
            }
          ],
          delivary: [
            {
              level: 'Easy',
              item_id: 958,
              item_name: '亡者の牙',
              amount: 30
            },
            {
              level: 'Normal',
              item_id: 25276,
              item_name: '綺麗な骨',
              amount: 20
            },
            {
              level: 'Hard',
              item_id: 7096,
              item_name: '冷めた溶岩',
              amount: 15
            },
            {
              level: 'Inferno',
              item_id: 1000518,
              item_name: 'マヤーの王冠',
              amount: 1
            }
          ]
        },
        {
          date: '2022-07-22',
          lookingfor: [
            {
              level: 'Easy',
              map: '',
              detail: '202207m041detail.jpg',
              caption: 'クラナネエミリー'
            },
            {
              level: 'Hard',
              map: '202207m042map.jpg',
              detail: '202207m042detail.jpg',
              caption: 'トール火山1'
            }
          ],
          delivary: [
            {
              level: 'Easy',
              item_id: 7004,
              item_name: 'ドロの塊',
              amount: 20
            },
            {
              level: 'Normal',
              item_id: 576,
              item_name: 'トゲの実',
              amount: 10
            },
            {
              level: 'Hard',
              item_id: 25270,
              item_name: '揺れるたてがみ',
              amount: 5
            },
            {
              level: 'Inferno',
              item_id: 25300,
              item_name: 'クトルラナックスの眼',
              amount: 1
            }
          ]
        },
        {
          date: '2022-07-21',
          lookingfor: [
            {
              level: 'Easy',
              map: '202207m031map.jpg',
              detail: '202207m031detail.jpg',
              caption: 'ポートマラヤ'
            },
            {
              level: 'Hard',
              map: '202207m032map.jpg',
              detail: '202207m032detail.jpg',
              caption: '実験棟-OPTATIO(verus01)'
            }
          ],
          delivary: [
            {
              level: 'Easy',
              item_id: 962,
              item_name: '触手',
              amount: 10
            },
            {
              level: 'Normal',
              item_id: 25167,
              item_name: '古い手紙',
              amount: 10
            },
            {
              level: 'Hard',
              item_id: 11620,
              item_name: 'ベアロピー',
              amount: 10
            },
            {
              level: 'Inferno',
              item_id: 25272,
              item_name: '幻惑の石',
              amount: 1
            }
          ]
        },
        {
          date: '2022-07-20',
          lookingfor: [
            {
              level: 'Easy',
              map: '202207m021map.jpg',
              detail: '202207m021detail.jpg',
              caption: 'ゲフェン建物内　北部屋から2F'
            },
            {
              level: 'Hard',
              map: '202207m022map.jpg',
              detail: '202207m022detail.jpg',
              caption: '蟻地獄ダンジョン　2F'
            }
          ],
          delivary: [
            {
              level: 'Easy',
              item_id: 1020,
              item_name: '長い髪',
              amount: 25
            },
            {
              level: 'Normal',
              item_id: 7345,
              item_name: '囚人の腕輪',
              amount: 60
            },
            {
              level: 'Hard',
              item_id: 25772,
              item_name: '美味しい果汁',
              amount: 15
            },
            {
              level: 'Inferno',
              item_id: 25618,
              item_name: 'ゴシック風の陶磁器人形',
              amount: 2
            }
          ]
        },
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
              amount: 50
            },
            {
              level: 'Normal',
              item_id: 7119,
              item_name: '菌糸',
              amount: 10
            },
            {
              level: 'Hard',
              item_id: 25258,
              item_name: '壊れた矢',
              amount: 30
            },
            {
              level: 'Inferno',
              item_id: 25262,
              item_name: '乾燥したクローバー',
              amount: 1
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
