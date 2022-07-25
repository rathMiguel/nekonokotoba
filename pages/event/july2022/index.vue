<template lang="pug">
div
  MainHeader(h1='ゲフェンメロンフェスタ優品 イベント情報')
  ContentEyecatch(name="july2022.png")
  .main-content
    article.article-blog
      p 開催期間：2022年７月19日～8月9日
      section.section
        h2 公式特設サイト
        p: a(href="https://ragnarokonline.gungho.jp/special/melon-fes2022/" target="_blank") ゲフェン・メロンフェスタ ～深淵からの贈り物 優品～ | ラグナロクオンライン公式サイト
      section.section
        h2 会場への行き方
        .row
          .column.column-2-md.column-3-lg
            Place(name='202207detail1.jpg' map='202207map1.jpg')
              p プロンテラ（54, 55）
          .column.column-2-md.column-3-lg
            Place(name='202207detail2.jpg' map='202207map2.jpg')
              p ラザーニャ（325, 210）
          .column.column-2-md.column-3-lg
            Place(name='202207detail3.jpg')
              p 冒険者アカデミー　教室棟1F
      section.section
        h2 デイリークエスト
        p 1日にやることを纏めました。
        section.section
          h3 スウィーツコンテスト
          ul
            li 「魔女ジラント」または「王女メア」を選んで進める
            li 遊べるのはアカウントにつき1回のみ
            li 陣営を変更することができない
          h4 クリア報酬
          h5.table-title 個人報酬
          .table-wrap
            table.table.fixed
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
            table.table.fixed
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
</template>

<script>
import Meta from '~/plugins/meta'

export default {
  mixins: [ Meta ],
  data() {
    return {
      meta: {
        title: `ゲフェンメロンフェスタ優品 イベントまとめ - ${process.env.BASETITLE}`,
        description: '',
        type: 'website',
        url: `${process.env.BASEURL}/`,
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