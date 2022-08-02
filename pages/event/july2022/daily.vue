<template lang="pug">
div
  MainHeader(h1='ゲフェンメロンフェスタ優品 迷子探し・納品情報')
  .main-content
    article
      section.daily-section(v-for="value in dailyData")
        header.daily-section__header
          h2.title-section {{ value.date }}
        .daily-section__main
          h3 迷子探し
          .daily-lookingfor
            .daily-lookingfor__block(v-for="item in value.lookingfor")
              Place(:name="item.detail" :map="item.map")
                p {{ item.level }}　{{ item.caption }}
          .daily-additional
            Note(v-if="value.date === '2022-07-26'")
              h4 エクラージュのメロンまでの行き方
              p やや複雑なので、別途案内します。
              .row
                .column.column-6-sm.column-4-md.column-4-lg
                  Place(name='202207m081detail1.jpg'): p 1. 「エクラージュ案内」からホームツリー前に転送
                .column.column-6-sm.column-4-md.column-4-lg
                  Place(name='202207m081detail2.jpg'): p 2. ホームツリーに入る
                .column.column-6-sm.column-4-md.column-4-lg
                  Place(name='202207m081detail3.jpg'): p 3. 広間から左へ移動
                .column.column-6-sm.column-4-md.column-4-lg
                  Place(name='202207m081detail4.jpg'): p 4. 進んだ先に看板があるので、診療所へ進む
                .column.column-6-sm.column-4-md.column-4-lg
                  Place(name='202207m081detail.jpg'): p 5. 部屋の奥にメロンがあります
              h4 ビョウンゴ病院 メロンまでの行き方
              p ※要クエスト（<a href="http://www.roquest.work/index.php?PortMalaya#Nurse" target="_blank">新任看護師と病院</a>）
              .row
                .column.column-6-sm.column-4-md.column-4-lg
                  Place(name='202207m082detail1.jpg'): p 1. ポートマラヤ（59, 74）付近の看護師に話しかける
                .column.column-6-sm.column-4-md.column-4-lg
                  Place(name='202207m082detail2.jpg'): p 2. 入ったすぐ側の看護師に話しかけ、「病院の奥へ向かう」を選択
                .column.column-6-sm.column-4-md.column-4-lg
                  Place(name='202207m082detail3.jpg'): p 3. 移動先近くのワープポイントへ入る
                .column.column-6-sm.column-4-md.column-4-lg
                  Place(name='202207m082detail4.jpg'): p 4. 右へまっすぐ進み、ワープポイントへ入る
                .column.column-6-sm.column-4-md.column-4-lg
                  Place(name='202207m082detail5.jpg'): p 5. 上へ進んだ先のワープポイントへ入る
                .column.column-6-sm.column-4-md.column-4-lg
                  Place(name='202207m082detail.jpg'): p 6. 上へ進み、右上あたりに見えるベッドの上にメロンがあります
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
        title: `ゲフェンメロンフェスタ優品　迷子探し・納品情報 - ${process.env.BASETITLE}`,
        description: 'ゲフェンメロンフェスタ優品の迷子探し・納品情報をまとめています',
        type: 'website',
        url: `${process.env.BASEURL}/event/july2022/daily/`,
        image: `${process.env.BASEURL}/ogp.png`
      },
      dailyData: [
        {
          date: '2022-08-03',
          lookingfor: [
            {
              level: 'Easy',
              map: '202207m161map.jpg',
              detail: '202207m161detail.jpg',
              caption: 'デワタ'
            },
            {
              level: 'Hard',
              map: '202207m162map.jpg',
              detail: '202207m162detail.jpg',
              caption: 'ピラミッドダンジョン F4'
            }
          ],
          delivary: [
            {
              level: 'Easy',
              item_id: 7561,
              item_name: '氷の心臓',
              amount: 40
            },
            {
              level: 'Normal',
              item_id: 7008,
              item_name: 'めちゃ硬い角',
              amount: 40
            },
            {
              level: 'Hard',
              item_id: 25899,
              item_name: '深海のエッセンス',
              amount: 10
            },
            {
              level: 'Inferno',
              item_id: 25894,
              item_name: '腐敗した深海魚',
              amount: 2
            }
          ]
        },
        {
          date: '2022-08-02',
          lookingfor: [
            {
              level: 'Easy',
              map: '202207m151map.jpg',
              detail: '202207m151detail.jpg',
              caption: '旧フェイヨン（写真の井戸から入ってすぐ）'
            },
            {
              level: 'Hard',
              map: '202207m152map.jpg',
              detail: '202207m152detail.jpg',
              caption: 'クラカト火山 ※要クエスト'
            }
          ],
          delivary: [
            {
              level: 'Easy',
              item_id: 7070,
              item_name: '割れた甲羅',
              amount: 10
            },
            {
              level: 'Normal',
              item_id: 25279,
              item_name: 'お粗末な弾薬',
              amount: 30
            },
            {
              level: 'Hard',
              item_id: 25267,
              item_name: '怪しい魔法陣',
              amount: 20
            },
            {
              level: 'Inferno',
              item_id: 25639,
              item_name: '雷に打たれた石の破片',
              amount: 1
            }
          ]
        },
        {
          date: '2022-08-01',
          lookingfor: [
            {
              level: 'Easy',
              map: '202207m141map.jpg',
              detail: '202207m141detail.jpg',
              caption: 'ブラジリス'
            },
            {
              level: 'Hard',
              map: '202207m142map.jpg',
              detail: '202207m142detail.jpg',
              caption: '滝の中の洞窟1F ※要クエスト'
            }
          ],
          delivary: [
            {
              level: 'Easy',
              item_id: 905,
              item_name: '植物の茎',
              amount: 10
            },
            {
              level: 'Normal',
              item_id: 7347,
              item_name: '研究記録',
              amount: 60
            },
            {
              level: 'Hard',
              item_id: 7007,
              item_name: 'おおネズミの爪',
              amount: 30
            },
            {
              level: 'Inferno',
              item_id: 7450,
              item_name: '骨の鎧の欠片',
              amount: 1
            }
          ]
        },
        {
          date: '2022-07-31',
          lookingfor: [
            {
              level: 'Easy',
              map: '202207m131map.jpg',
              detail: '202207m131detail.jpg',
              caption: 'ラヘル ジェド邸 2F'
            },
            {
              level: 'Hard',
              map: '202207m132map.jpg',
              detail: '202207m132detail.jpg',
              caption: 'イズルード 3F'
            }
          ],
          delivary: [
            {
              level: 'Easy',
              item_id: 7054,
              item_name: 'ブリガン',
              amount: 40
            },
            {
              level: 'Normal',
              item_id: 25157,
              item_name: '枝付きの落ち葉',
              amount: 15
            },
            {
              level: 'Hard',
              item_id: 25159,
              item_name: 'ハートハンターの印',
              amount: 40
            },
            {
              level: 'Inferno',
              item_id: 25784,
              item_name: '小さい懐中電灯',
              amount: 2
            }
          ]
        },
        {
          date: '2022-07-30',
          lookingfor: [
            {
              level: 'Easy',
              map: '',
              detail: '202207m121detail.jpg',
              caption: 'プロンテラ中央宮　ハイネン家'
            },
            {
              level: 'Hard',
              map: '202207m122map.jpg',
              detail: '202207m122detail.jpg',
              caption: 'ノーグロード　2層 '
            }
          ],
          delivary: [
            {
              level: 'Easy',
              item_id: 7006,
              item_name: '赤いコウモリの翼',
              amount: 40
            },
            {
              level: 'Normal',
              item_id: 25284,
              item_name: '湿地虫の殻',
              amount: 10
            },
            {
              level: 'Hard',
              item_id: 7565,
              item_name: 'ベトベトな毒',
              amount: 25
            },
            {
              level: 'Inferno',
              item_id: 25619,
              item_name: '粘土人形',
              amount: 1
            }
          ]
        },
        {
          date: '2022-07-29',
          lookingfor: [
            {
              level: 'Easy',
              map: '202207m111map.jpg',
              detail: '202207m111detail.jpg',
              caption: 'マラン島'
            },
            {
              level: 'Hard',
              map: '202207m112map.jpg',
              detail: '202207m112detail.jpg',
              caption: '沈没船 1F'
            }
          ],
          delivary: [
            {
              level: 'Easy',
              item_id: 923,
              item_name: '悪魔の角',
              amount: 20
            },
            {
              level: 'Normal',
              item_id: 25283,
              item_name: '茶色のマフラー',
              amount: 30
            },
            {
              level: 'Hard',
              item_id: 1000505,
              item_name: '不透明な液体',
              amount: 5
            },
            {
              level: 'Inferno',
              item_id: 25781,
              item_name: '小さく可愛いろうそく',
              amount: 2
            }
          ]
        },
        {
          date: '2022-07-28',
          lookingfor: [
            {
              level: 'Easy',
              map: '202207m101map.jpg',
              detail: '202207m101detail.jpg',
              caption: 'ラザーニャ'
            },
            {
              level: 'Hard',
              map: '202207m102map.jpg',
              detail: '202207m102detail.jpg',
              caption: 'ジャワイ（※要結婚）'
            }
          ],
          delivary: [
            {
              level: 'Easy',
              item_id: 7007,
              item_name: 'おおネズミの爪',
              amount: 20
            },
            {
              level: 'Normal',
              item_id: 25278,
              item_name: '盗賊団スカーフ',
              amount: 30
            },
            {
              level: 'Hard',
              item_id: 25298,
              item_name: '魂が宿った宝石',
              amount: 10
            },
            {
              level: 'Inferno',
              item_id: 25261,
              item_name: '千切れた一切れの紙',
              amount:2 
            }
          ]
        },
        {
          date: '2022-07-27',
          lookingfor: [
            {
              level: 'Easy',
              map: '',
              detail: '202207m091detail.jpg',
              caption: 'イベントホール'
            },
            {
              level: 'Hard',
              map: '202207m092map.jpg',
              detail: '202207m092detail.jpg',
              caption: 'フェイヨン迷いの森04(ポリン島)'
            }
          ],
          delivary: [
            {
              level: 'Easy',
              item_id: 7098,
              item_name: '火種',
              amount: 20
            },
            {
              level: 'Normal',
              item_id: 7564,
              item_name: '腐った肉',
              amount: 30
            },
            {
              level: 'Hard',
              item_id: 25783,
              item_name: '冷たい聖水',
              amount: 2
            },
            {
              level: 'Inferno',
              item_id: 1000506,
              item_name: '認識の皮',
              amount: 10
            }
          ]
        },
        {
          date: '2022-07-26',
          lookingfor: [
            {
              level: 'Easy',
              map: '',
              detail: '202207m081detail.jpg',
              caption: 'エクラージュ　ホームツリー内　治療所'
            },
            {
              level: 'Hard',
              map: '',
              detail: '202207m082detail.jpg',
              caption: 'ビョウンゴ病院 2F（※要クエ「新任看護師と病院」）'
            }
          ],
          delivary: [
            {
              level: 'Easy',
              item_id: 955,
              item_name: '蟲の皮',
              amount: 30
            },
            {
              level: 'Normal',
              item_id: 25158,
              item_name: '中核ゼリー',
              amount: 20
            },
            {
              level: 'Hard',
              item_id: 25299,
              item_name: '雪玉',
              amount: 5
            },
            {
              level: 'Inferno',
              item_id: 25259,
              item_name: '討伐団募集のチラシ',
              amount: 2
            }
          ]
        },
        {
          date: '2022-07-25',
          lookingfor: [
            {
              level: 'Easy',
              map: '202207m071map.jpg',
              detail: '202207m071detail.jpg',
              caption: 'イズルード'
            },
            {
              level: 'Hard',
              map: '202207m072map.jpg',
              detail: '202207m072detail.jpg',
              caption: 'ニブルヘイム'
            }
          ],
          delivary: [
            {
              level: 'Easy',
              item_id: 7120,
              item_name: '燃えている馬の蹄',
              amount: 30
            },
            {
              level: 'Normal',
              item_id: 6936,
              item_name: '冷気の核',
              amount: 10
            },
            {
              level: 'Hard',
              item_id: 25895,
              item_name: '深海のヒトデ',
              amount: 5
            },
            {
              level: 'Inferno',
              item_id: 1000513,
              item_name: '危険な酸性の液体',
              amount: 2
            }
          ]
        },
        {
          date: '2022-07-24',
          lookingfor: [
            {
              level: 'Easy',
              map: '202207m061map.jpg',
              detail: '202207m061detail.jpg',
              caption: 'フィゲル室内'
            },
            {
              level: 'Hard',
              map: '202207m062map.jpg',
              detail: '202207m062detail.jpg',
              caption: 'バリオ・マヒワガ'
            }
          ],
          delivary: [
            {
              level: 'Easy',
              item_id: 943,
              item_name: 'けっこうかたい皮',
              amount: 40
            },
            {
              level: 'Normal',
              item_id: 25282,
              item_name: '古いリボルバー',
              amount: 10
            },
            {
              level: 'Hard',
              item_id: 25316,
              item_name: 'ぼろぼろの金属片',
              amount: 20
            },
            {
              level: 'Inferno',
              item_id: 7324,
              item_name: '深海のクラーケンの足',
              amount: 1
            }
          ]
        },
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
    margin-left: -1em;
    margin-right: -1em;
  }

  & > *{
    margin-bottom: 1em;
    width: 100%;
    @include media(md-lg){
      margin-left: 1em;
      margin-right: 1em;
    }
  }
}

.daily-dl{
  margin-bottom: 0.5em;
}
</style>
