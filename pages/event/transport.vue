<template lang="pug">
div
  .main-header
    h1 {{ meta.title }}
  .main-content
    article.article-blog
      .eyecatch: img(src="~/assets/images/transport.jpg" alt="")
      h2 特殊転送01
      ul
        li ジュノーフィールド 06
        li 氷の洞窟 01
        li おもちゃ工場ダンジョン 02（分類所）
        li 星明りの珊瑚礁
        li 龍の巣 01
      h2 特殊転送02
      ul
        li イズルード海底神殿
        li グラストヘイム騎士団内01
        li 生体工学研究所 01
        li フレイヤ大神殿聖域 05
        li ゲフェニア 02
        li タナトスタワー上層部 06
        li アユタヤダンジョン 02
      h2 特殊転送03
      ul
        li カミダルトンネル
        li 名もなき島 夜
        li タートルアイランドダンジョン 03
        li グラストヘイム 修道院
        li フェイヨン地下洞窟 B4F
        li トール火山ダンジョン 01
        li アビスレイク地下洞窟 02
        li 生体工学研究所 03
        li ビフロストタワー 1階
        li ホラーおもちゃ工場
        li 捻じれた時間の時計塔
        li ピラミッドダンジョン秘密の地下室01
        li 戦死者の墓
      h2 特殊転送04
      ul
        li 蟻地獄ダンジョン B1F
        li ゲフェンフィールド02
        li ピラミッドダンジョン 3F
        li ピラミッドダンジョン B2F
        li スフィンクスダンジョン B2F
        li ロックリッジ鉱山 01
        li ロックリッジ鉱山 01 奥地
        li ロックリッジ地下街
        li ロックリッジ地下街 奥地
        li 廃棄工場ルドゥス 3階
      h2 イリュージョンダンジョン
      ul
        li 月夜花の悪夢
        li フローズンメモリー
        li 250 ページ
        li 悲しみの隠居村
        li ネジリアン帝国
        li 幻想の北洞窟ルワンダ
        li 歪んだ迷宮の森
        li 紫色の深海洞窟
        li 認識の庭
      h2 テラーダンジョン
      ul
        li ノーグロード3層
        li グラストヘイムアビス
      h2 バルムント邸
      ul
        li 下水処理場 入口
        li 第一魔力発電所 入口
        li 図書館 記憶の回廊 入口
</template>

<script>
import Meta from '~/plugins/meta'

export default {
  mixins: [Meta],
  data() {
    return {
      meta: {
        title: `イベントホール　特殊転送先リスト - ${process.env.BASETITLE}`,
        description: 'イベントホール内にいる特殊転送員の転送先リストを掲載しています',
        type: 'website',
        url: `${process.env.BASEURL}/event/transport/`,
        image: `${process.env.BASEURL}/ogp.png`
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@use '~/assets/scss/settings' as *;
@use '~/assets/scss/mixins' as *;

.main-header{
  margin-bottom: 40px;
  line-height: 1.5;
  h1{
    @include media(sm){
      font-size: 1.6em;
    }
    @include media(md){
      font-size: 1.8em;
    }
  }
}
</style>
