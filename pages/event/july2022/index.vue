<template lang="pug">
div
  MainHeader(h1='ゲフェンメロンフェスタ優品 イベント情報')
  ContentEyecatch(name="july2022.png")
  .main-content
    article.article-blog
      p 開催期間：2022年７月19日～8月9日
      section.section
        h2 会場への行き方
        .row
          .column.column-6-md.column-4-lg
            Place(name='202207detail1.jpg' map='202207map1.jpg')
              p プロンテラ（54, 55）
          .column.column-6-md.column-4-lg
            Place(name='202207detail2.jpg' map='202207map2.jpg')
              p ラザーニャ（325, 210）
          .column.column-6-md.column-4-lg
            Place(name='202207detail3.jpg')
              p 冒険者アカデミー　教室棟1F
      section.section
        h2 ストーリークエスト
        section.section
          h3 激突！スウィーツコンテスト
          ul
            li 「魔女ジラント」または「王女メア」を選んで進める
            li 遊べるのはアカウントにつき1回のみ
            li 陣営を変更することができない
          h4 クリア報酬
          h5.table-title 個人報酬
          .table-wrap
            table.table.fixed.bordered
              thead
                tr
                  th 
                  th 魔女ジラント
                  th 王女メア
              tbody
                tr
                  th 各章クリア
                  td メロメロポイント 5000
                  td メロメロポイント 5000
                tr
                  th 4章クリア
                  td クイーンメロンヘッドフォン[0]<br>(第4スロットにアルカナ付与済み) 
                  td プリンセスメロンヘッドフォン[0]<br>(第4スロットにアルカナ付与済み) 
          h5.table-title ワールド報酬
          .table-wrap
            table.table.fixed.bordered
              caption.caption-bottom ※20:00～20:10、22:30～22:40、24:00～24:10に出現
              thead
                tr
                  th 
                  th 魔女ジラント
                  th 王女メア
              tbody
                tr
                  th モンスター出現数増加
                  td 堕メロリン
                  td ミニメロリン 
                tr
                  th 討伐クエスト報酬増加<br>(BaseExp2倍、イベントポイント2倍)
                  td 堕メロリンとデカ堕メロリン
                  td ミニメロリンとデカメロリン
                tr
                  th 特定時刻（※）にイベント会場に<br>モンスターが出現
                  td 堕メロリンとデカ堕メロリン
                  td ミニメロリンとデカメロリン
          nuxt-link(to="/event/july2022/story/").button.button-info クエストガイド
      section.section
        h2 デイリークエスト
        section.section
          h3 メロン遠征隊
          p 会場内の「メロリン遠征隊　遠征将軍デヒョン」に話しかける<br>
            |ジラントの占いによって遠征先を決める<br>
            |翌日5:00以降にデヒョンに話しかけると素材がもらえます
          h4 占い結果一覧
          p: small ※失敗する場合あり。失敗した場合「スウィートメロン、ウォーターメロンハート、ダークメロン、濃縮メロンジャム、スターマッシュルーム」のいずれかが代わりに貰える
          .table-wrap
            table.table.bordered.guided
              thead
                tr
                  th 獲得見込のアイテム
                  th 問1
                  th 問2
                  th 問3
                  th 番号
                  th アルカナ
                  th 守護天使
              tbody
                tr
                  td マンダリンフルーツ
                  td ①おうちで呪いの儀式
                  td ①未踏の洞窟でお宝さがし
                  td ①山羊
                  td 16
                  td 塔
                  td サタナキア
                tr
                  td ウィアードスターバッジ
                  td ①おうちで呪いの儀式
                  td ①未踏の洞窟でお宝さがし
                  td ②猿
                  td 2
                  td 女教皇
                  td フルーレティ
                tr
                  td ヴァルキリーフラワー
                  td ①おうちで呪いの儀式
                  td ①未踏の洞窟でお宝さがし
                  td ③ペンギン
                  td 1
                  td 魔術師
                  td ルシフェル
                tr
                  td ノービスエッグ
                  td ①おうちで呪いの儀式
                  td ①未踏の洞窟でお宝さがし
                  td ④メロリン
                  td 22
                  td 愚者
                  td ルキフグス
                tr
                  td ライトブルーギル
                  td ①おうちで呪いの儀式
                  td ②呪われた墓場で肝試し
                  td ①魔法少女
                  td 6
                  td 恋人
                  td アムブリエル
                tr
                  td イリュージョナルフラワー
                  td ①おうちで呪いの儀式
                  td ②呪われた墓場で肝試し
                  td ②キョンシー
                  td 18
                  td 月
                  td バキエル
                tr
                  td キーオブヘブン
                  td ①おうちで呪いの儀式
                  td ②呪われた墓場で肝試し
                  td ③武士
                  td 5
                  td 法王
                  td アスモデル
                tr
                  td ダメメロピー
                  td ①おうちで呪いの儀式
                  td ②呪われた墓場で肝試し
                  td ④ポ、ポリス！？
                  td 11
                  td 正義
                  td ズリエル
                tr
                  td ソリッドピーチ
                  td ②近隣諸国を侵略
                  td ①悪魔の召喚
                  td ①キンキンに冷えた泡麦酒
                  td 12
                  td 吊男
                  td ネビロス
                tr
                  td サマーナイトピース
                  td ②近隣諸国を侵略
                  td ①悪魔の召喚
                  td ②火を噴く辛さの火鍋
                  td 19
                  td 太陽
                  td アイニ
                tr
                  td ニャンパン
                  td ②近隣諸国を侵略
                  td ①悪魔の召喚
                  td ③ごついドラゴンステーキ
                  td 21
                  td 世界
                  td サタン
                tr
                  td フェアリリーフ
                  td ②近隣諸国を侵略
                  td ②禁呪のお勉強
                  td ①『週末預言黙示録』
                  td 3
                  td 女帝
                  td アスタロト
                tr
                  td プレシャスボタン
                  td ②近隣諸国を侵略
                  td ②禁呪のお勉強
                  td ②『宿悪之業』
                  td 9
                  td 隠者
                  td ハマリエル
                tr
                  td トルネイドクレイ
                  td ②近隣諸国を侵略
                  td ②禁呪のお勉強
                  td ③『忘我迷妄書』
                  td 7
                  td 戦車
                  td ムリエル
                tr
                  td ジェムジェムストーン
                  td ②近隣諸国を侵略
                  td ③合成生物を使った実験
                  td ①ギャングに堕ちる
                  td 15
                  td 悪魔
                  td ハナエル
                tr
                  td ブラッディシード
                  td ②近隣諸国を侵略
                  td ③合成生物を使った実験
                  td ②凶悪な亡霊になる
                  td 13
                  td 死神
                  td バルビエル
                tr
                  td メメメロピー
                  td ②近隣諸国を侵略
                  td ③合成生物を使った実験
                  td ③サイコパスな科学者に変貌
                  td 21
                  td 世界
                  td サタン
                tr
                  td 蒼く燃える珠
                  td ②近隣諸国を侵略
                  td ③合成生物を使った実験
                  td ④ささかま探検隊に入隊する
                  td 16
                  td 塔
                  td サタナキア
                tr
                  td ぷるぷるベリー
                  td ③やり直す為に海外逃亡
                  td ①超高級まわらない寿司
                  td ①マイペースな亀将軍
                  td 20
                  td 審判
                  td サルガタナス
                tr
                  td ネオンウォーター
                  td ③やり直す為に海外逃亡
                  td ①超高級まわらない寿司
                  td ②浅はかなシーラカンス
                  td 17
                  td 星
                  td ガムビエル
                tr
                  td ディープシーウォーター
                  td ③やり直す為に海外逃亡
                  td ①超高級まわらない寿司
                  td ③嫉妬深いメデューサ
                  td 14
                  td 節制
                  td アドナキエル
                tr
                  td メリュジーヌの髪
                  td ③やり直す為に海外逃亡
                  td ①超高級まわらない寿司
                  td ④狂信的なバンシー
                  td 5
                  td 法王
                  td アスモデル
                tr
                  td レアスモールジェム
                  td ③やり直す為に海外逃亡
                  td ②ラグジュアリーホテルのビュッフェ
                  td ①血沸き肉躍る戦争の話
                  td 8
                  td 力
                  td ウェルキエル
                tr
                  td ゲーミングキャロット
                  td ③やり直す為に海外逃亡
                  td ②ラグジュアリーホテルのビュッフェ
                  td ②ギャンブルで相手を陥れた話
                  td 4
                  td 皇帝
                  td マルキダエル
                tr
                  td レッドニードルシード
                  td ③やり直す為に海外逃亡
                  td ②ラグジュアリーホテルのビュッフェ
                  td ③大洪水から生還した話
                  td 10
                  td 運命の輪
                  td アガリアレプト
                tr
                  td やんちゃな悪魔の羽
                  td ③やり直す為に海外逃亡
                  td ②ラグジュアリーホテルのビュッフェ
                  td ④振られた空いてに呪いをかけた話
                  td 13
                  td 死神
                  td バルビエル
        section.section
          h3 討伐クエスト
          p 1日5回まで討伐可能。
          nuxt-link(to="/event/july2022/hunt/").button.button-info 討伐リスト
        section.section
          h3 納品 / 探索クエスト
          nuxt-link(to="/event/july2022/daily/").button.button-info 納品、探索クエスト
        section.section
          h3 無料精錬
          ul
            li 「魔術師ルキフル（会場109, 65）」からメロン武器を精錬。
            li 回数の繰り越し不可
            li 失敗すると精錬値が1下がります。
      section.section
        h2 メロンクッキング
        p クッキングのレシピ/材料入手先は下記を参照に。
        nuxt-link(to="/event/july2022/recipe/").button.button-info レシピ・材料一覧
      section.section
        h2 関連リンク（公式ページ）
        p: a(href="https://ragnarokonline.gungho.jp/special/melon-fes2022/" target="_blank") ゲフェン・メロンフェスタ ～深淵からの贈り物 優品～ | ラグナロクオンライン公式サイト
</template>

<script>
import Meta from '~/plugins/meta'

export default {
  mixins: [ Meta ],
  data() {
    return {
      meta: {
        title: `ゲフェンメロンフェスタ優品 - ${process.env.BASETITLE}`,
        description: '',
        type: 'website',
        url: `${process.env.BASEURL}/event/july2022/`,
        image: `${process.env.BASEURL}/ogp.png`
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@use '~/assets/scss/settings' as *;
@use '~/assets/scss/mixins' as *;
@use '~/assets/scss/table';
</style>