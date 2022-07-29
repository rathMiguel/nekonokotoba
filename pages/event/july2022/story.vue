<template lang="pug">
div
  MainHeader(h1='ゲフェンメロンフェスタ優品 ストーリークエスト')
  mixin questFlow(image, map, caption)
    .row
      if(image)
        .column.column-5-md.column-4-lg
          Place(name=image, map=map)
            slot
              |#{caption}
        .column.column-7-md.column-8-lg
          .content
            block
      else
        .column
          .content
            block

  .main-content
    .main-content
      .row
        .column.column-5-md.column-4-lg
          Place(name="202207s0.jpg")
        .column.column-7-md.column-8-lg
          .content
            p 会場真ん中あたりにいる「グローザ」に話しかけるとクエストがスタートします。<br>この時点でメア編とジラント編どちらかを選びます。
            p
              strong 一度選んだ選択は変更不可
              |なので、欲しいヘッドフォンとエンチャントに応じて選ぶようにしましょう。
    .tab
      .tab-header
        ul.tab-header__list
          li: span.tab-switch(:class="(tabIndex === 1) ? 'active' : ''" v-on:click="tabSwitch(1)") ジラント編
          li: span.tab-switch(:class="(tabIndex === 2) ? 'active' : ''" v-on:click="tabSwitch(2)") メア編
      .tab-main
        .tab-content(v-if="tabIndex === 1")
          article.article-blog
            Note(type="secondary")
              h4 準備するもの
              ul
                li 不審なボトル 3個 （テイミング商人から購入可 1個 1000z）
                li イジドル 3個
                li 小さなお守り 2個
                li 有毒ガス 10個
                li 短いピッグテールリボン 20個
                li ピッグテールリボン 50個
                li ムナック人形 1個
              p: strong ※討伐あります
            h2 Chapter1: Finding the Three Divinities
            +questFlow('202207sz3.jpg')
              h5 イベントホール内北の舞台のところへ行き、<br>「力の化身ウェルキエル」に話しかける
            +questFlow('202207sz4.jpg')
              h5 ラヘルに向かい、「ネビロス」に話しかける
              p 不審なボトル3個を要求されるので、渡す
            +questFlow('202207sz6.jpg', '202207sz5.jpg')
              h5 コンロンに向かい、「バキエル」に話しかける
              p ジラントのもとへ戻り、イジドル 3個を渡す
              p 再びバキエルのところへ向かう
            +questFlow('202207sz7d.jpg', '202207sz7.jpg')
              h5 フィゲルフィールド05（アビスレイク）に移動し、「アガリアレプト」に話しかける
              p 以下を要求される
              ul
                li 「小さなお守り」 2個を渡す
                li 「グリーンイグアナ」 60体を討伐する
            h2 Chapter2: Mission Impossible
            +questFlow('202207sz9.jpg', '202207sz10.jpg')
              p ラザーニャへ向かい、「ヴァニッリャ」に話しかける<br>ヴァニッリャの話を聞き、署名したあとジラントのもとへ戻る
            +questFlow('202207sz11.jpg')
              h5 転送先にいるバキエルと話す
            +questFlow('202207sz12.jpg')
              h5 現場主任と話す
              p 社訓を入力する<br>入力内容は順不同で出題（入力要求）される
              ul
                li 社訓1　無私の精神で工場を発展させます！
                li 社訓2　限界は超える為にある！
                li 社訓3　優先順位は会長、工場長、お客様！
                li 社訓4　同じ所に3秒以上立ち止まりません！
                li 社訓5　いつも笑顔でハッピー！
            +questFlow()
              h5 工場長と話す
              p 下記の順で要求される
              ol
                li ジオグラファー 100体を討伐する
                li 「有毒ガス」 10個を渡す
            Note(type="memo")
              +questFlow('202207sz14.jpg', '202207sz13.jpg')
                p ジオグラファーはアインブロック北フィールドに群生しています
            h5 従業員5人から情報を聞く
            p 全ての従業員の話が聞けたらバキエルのもとへ向かう
            .row
              .column.column-6-sm.column-4-md.column-4-lg
                Place(name='202207sz16.jpg'): p 74, 230付近
              .column.column-6-sm.column-4-md.column-4-lg
                Place(name='202207sz17.jpg'): p 156, 198付近
              .column.column-6-sm.column-4-md.column-4-lg
                Place(name='202207sz18.jpg'): p 193, 259付近
              .column.column-6-sm.column-4-md.column-4-lg
                Place(name='202207sz19.jpg'): p 150, 314付近
              .column.column-6-sm.column-4-md.column-4-lg
                Place(name='202207sz20.jpg'): p 263, 266付近
            +questFlow('202207sz23.jpg', '202207sz22.jpg')
              h5 タナトスタワー1Fへ向かい、「元メロン工場警備員」に話しかける
              p 「監視する者」3体を討伐する
            +questFlow('202207sz24.jpg')
              h5 「ファッションセンターコスミ」へ向かう
              p クロモ棟に入り　右WP入った先にいる「会長の秘書」に話しかける
            +questFlow('202207sz25.jpg')
              h5 工場内のお掃除ルンバを調べる
              p ランダムで鍵が見つかるので、見つかったら倉庫へ向かう<br>（※オレンジマーカーから遠い場所に移動している場合あり）
            +questFlow('202207sz26.jpg')
              h5 「神殺しのフライパン」を調べる
              p 三桁の数字を当てる。数字はランダム。一致している箇所をヒントに数字を入力する
            h2 Chapter3: Struggle For Kitchen knife
            +questFlow('202207sz28.jpg')
              h5 ラザーニャへ向かい、「ヴァニッリャ」に話しかける
            +questFlow('202207sz29.jpg', '202207sz29m.jpg')
              h5 ジュノー室内04（共和国図書館）にいるベストセラー作家に話しかける
              p 建物はいってすぐのところにいます
            +questFlow()
              h5 ジラントに話かける
              p 餡蜜寺へ転送される
            +questFlow('202207sz32.jpg')
              h5 杏仁大師に話かける
              p 話を聞いたあと、寺男のもとへ向かう
            +questFlow()
              h5 寺男に話かける
              p 以下を討伐して、再び寺男に話しかける
              ul
                li バースリー 100体
                li アリス　3体
            +questFlow('202207sz33.jpg')
              h5 バキエルに話かける
              p 以下アイテムを要求される。
              ul
                li 短いピッグテールリボン 20個
                li ピッグテールリボン 50個
                li ムナック人形 1個
            +questFlow('202207sz34.jpg')
              h5 餡密寺の僧10人に話かける
              p 変身した後、ミニマップのマーカー付近にいる僧に話しかける<br>※マーカーは暫く経つと消えるから注意
            .row
              .column.column-6-sm.column-4-md.column-3-lg
                Place(name='202207sz35.jpg', map='202207sz35m.jpg'): p 202, 213付近
              .column.column-6-sm.column-4-md.column-3-lg
                Place(name='202207sz36.jpg', map='202207sz36m.jpg'): p 284, 152付近
              .column.column-6-sm.column-4-md.column-3-lg
                Place(name='202207sz37.jpg', map='202207sz37m.jpg'): p 290, 59付近
              .column.column-6-sm.column-4-md.column-3-lg
                Place(name='202207sz38.jpg', map='202207sz38m.jpg'): p 228, 138付近
              .column.column-6-sm.column-4-md.column-3-lg
                Place(name='202207sz39.jpg', map='202207sz39m.jpg'): p 273, 321付近
              .column.column-6-sm.column-4-md.column-3-lg
                Place(name='202207sz40.jpg', map='202207sz40m.jpg'): p 175, 347付近
              .column.column-6-sm.column-4-md.column-3-lg
                Place(name='202207sz41.jpg', map='202207sz41m.jpg'): p 78, 222付近
              .column.column-6-sm.column-4-md.column-3-lg
                Place(name='202207sz42.jpg', map='202207sz42m.jpg'): p 81, 163付近
              .column.column-6-sm.column-4-md.column-3-lg
                Place(name='202207sz43.jpg', map='202207sz43m.jpg'): p 190, 261付近
              .column.column-6-sm.column-4-md.column-3-lg
                Place(name='202207sz44.jpg', map='202207sz44m.jpg'): p 117, 193付近
            +questFlow('202207sz45.jpg')
              h5 バキエルに話しかける
              p 転送先の「怪しい影」をクリック
            h2 LastChapter: Trinity God Buster
            p ※進行順はメア編と共通です
            +questFlow('202207sm55.jpg')
              h5 転送先をまっすぐ進み、「怪しい影」に話しかける
            +questFlow('202207sm56.jpg')
              h5 鍵の解除を行う
              p 操作マニュアルに従ってパネルを操作し鍵を解除していく
            table.table.striped
              thead
                tr
                  th パネルNo.
                  th 操作順
              tbody
                tr
                  td Panel_No 0001
                  td 右→左→左→左
                tr
                  td Panel_No 0002
                  td 左→右→右→左
                tr
                  td Panel_No 0003
                  td 右→右→左→左
                tr
                  td Panel_No 0004
                  td 右→左→右→左
                tr
                  td Panel_No 0005
                  td 左→左→右→左
                tr
                  td Panel_No 0006
                  td 右→右→左→右
                tr
                  td Panel_No 0007
                  td 左→右→左→右
                tr
                  td Panel_No 0008
                  td 左→左→左→右
                tr
                  td Panel_No 0009
                  td 右→左→左→右
            +questFlow('202207sm57.jpg')
              h5 メロン冷蔵庫入り口へ向かいMD作成する
              p 襲ってくる四怨将を倒す<br>報酬をもらって最終章終了
        .tab-content(v-if="tabIndex === 2")
          article.article-blog
            Note(type="secondary")
              h4 準備するもの
              ul
                li アイスクリーム 20個
                li ココナッツ 2個
                li ハニーパンケーキ 2個
                li ハーブハチ密茶 3個
                li パイナップル 3個
                li 氷片 20個
                li カルーニャミルク 1個（ラザーニャ「武具商人」から購入可（100000z or ドラムポイント5 ））
              p: strong ※討伐あります
            h2 第一章　探せ!!餡蜜寺への道
            +questFlow('202207sm3.jpg')
              h5 メロンフェスタ会場にいるアルバイター（136, 55）に話しかける
            +questFlow('202207sm4.jpg', '202207sm5.jpg')
              h5 ラザーニャにいるヴァリッニヤ（192, 256）に話しかける
              p アイスクリーム 20個を渡す
            +questFlow()
              h5 メアに報告する
              p ニブルヘイムへ転送される<br>転送先にいる「スクウォッシュ」にココナッツ 2個を渡す
            +questFlow()
              h5 月餅師に話しかける
              p 以下を要求される
              ol
                li 団子童子を60体　倒す
                li ハニーパンケーキ 2個を渡す
            h2 第二章　励め!!餡蜜寺　三十六厨房
            +questFlow()
              h5 転送先の月餅師に話しかけ、会話後、杏仁大師に話しかける
            +questFlow('202207sm8.jpg')
              h5 第一厨房に入り、すぐ側にいる豆沙粽師に話しかける
              p 配達依頼される
              ul
                li マラン（220, 167）
                li アサシンギルド（14, 20）
                li プロンテラ中央宮（324, 197）
            .row
              .column.column-6-sm.column-6-md.column-4-lg
                Place(name='202207sm9.jpg', map='202207sm10.jpg'): p マラン（220, 167）付近
              .column.column-6-sm.column-6-md.column-4-lg
                Place(name='202207sm18.jpg'): p アサシンギルド（14, 20）
              .column.column-6-sm.column-6-md.column-4-lg
                Place(name='202207sm12.jpg'): p  プロンテラ中央宮（324, 197）
            Note(type="memo")
              p ジョンダパスを持っている場合は転送サービス→ダンジョン転送→その他→アサシンギルド内からの転送で辿り着けます
            Note
              h4 プロンテラ中央宮（パティシエの修行僧）までの道順
              .row
                .column.column-6-sm.column-4-md.column-4-lg
                  Place(name='202207sm13.jpg')
                    p 1. 祝宴会場に入ります
                .column.column-6-sm.column-4-md.column-4-lg
                  Place(name='202207sm14.jpg')
                    p 2. 王宮演奏家が見えてきたら、左側へ回ります
                .column.column-6-sm.column-4-md.column-4-lg
                  Place(name='202207sm15.jpg')
                    p 3. 左側の通路を進みます
                .column.column-6-sm.column-4-md.column-4-lg
                  Place(name='202207sm16.jpg')
                    p 4. 厨房にたどり着きます。入ったすぐの場所にパティシエの修行僧がいます
            +questFlow('202207sm19.jpg')
              h5 第二厨房にへ向かい、すぐ側にいる寿桃包師に話しかける
              p 人面桃樹 100体討伐する
            +questFlow('202207sm20.jpg')
              h5 第三厨房にへ向かい、カウンター付近にいる麻花師に話しかける
              p クイズが出題される。以下出題と答え
              dl
                dt 1. 次のお菓子の中で香辛料が入っているものはどれ？
                dd A. アルナベルツ産おやつ
                dt 2. 蛸引包丁[3]を作るために必要な「丸太」の数は？
                dd 300個
                dt 3. エルヴィラキャンディの味を答えてください
                dd ミント味
                dt 4. 「スイーツ」なカードはどれ？
                dd スノウアーカード
                dt 5. カカオは分類上、どれにあたる？
                dd アオギリ科カカオ属
            +questFlow('202207sm26.jpg')
              h5 第四厨房にへ向かい、すぐ側にいる湯圓師に話しかける
              p ハーブハチ密茶　3個を渡す
            +questFlow('202207sm28.jpg')
              h5 第五厨房にへ向かい、建物内にいる薩其馬師に話しかける
              p サイコロ勝負を挑まれる。<br>多いか少ないかを3回連続で当てれば勝ち。
            +questFlow('202207sm30.jpg')
              h5 甘露山　餡蜜寺にいるカカオ割りの達人に話しかける
              p 移動先にいる餡蜜寺木人形を100体倒す
            +questFlow('202207sm35.jpg')
              h5 月餅師に話しかける
              p 会場のメアに話しかけ、第二章終わり
            h2 第三章　極めろ!!まじガチ!?メロンパフェ
            +questFlow('202207sm37.jpg')
              h5 メアに話しかけ、転送先にいる「スクウォッシュ」と話す
              p 本を借りにジュノーの図書館へ向かうことになる
            +questFlow('202207sm39.jpg', '202207sm38.jpg')
              h5 ジュノー室内04（共和国図書館）にいるベストセラー作家に話しかける
              p 図書館にはいってすぐ先にいる。<br>探している本の名前を教えて欲しいと言われる。<br>「フルーツ大百科」と「世界果物大全」と入力する。
            +questFlow('202207sm47.jpg')
              h5 プロンテラ中央宮にいる「困っている司書」に話しかける
              p ライドワード　50体倒す
            Note
              h4 「困っている司書」までの道順
              .row
                .column.column-6-sm.column-4-md.column-4-lg
                  Place(name='202207sm45.jpg')
                    p プロンテラ中央宮　祝宴会場の入口から右に進む
                .column.column-6-sm.column-4-md.column-4-lg
                  Place(name='202207sm46.jpg')
                    p 図書館入口にたどり着きます
                .column.column-6-sm.column-4-md.column-4-lg
                  Place(name='202207sm47.jpg')
                    p 図書館に入って少し進んだところに「困っている司書」がいます
            +questFlow('202207sm37.jpg')
              h5 スクウォッシュのもとへ向かう
              p 下記アイテムを要求される
              ul
                li パイナップル 3個
                li 氷片 20個
                li カルーニャミルク　1個
            +questFlow()
              h5 月餅師に話しかける
            +questFlow('202207sz32.jpg')
              h5 杏仁大師に話しかける
              p 転送先の3種類のモンスターを20体　討伐する
            +questFlow('202207sm53.jpg')
              h5 転送先の「怪しい影」と話す。
            h2 最終章　決めろ！三掌爆果拳
            p ※進行順はジラント編と共通です
            +questFlow('202207sm55.jpg')
              h5 転送先をまっすぐ進み、「怪しい影」に話しかける
            +questFlow('202207sm56.jpg')
              h5 鍵の解除を行う
              p 操作マニュアルに従ってパネルを操作し鍵を解除していく
            table.table.striped
              thead
                tr
                  th パネルNo.
                  th 操作順
              tbody
                tr
                  td Panel_No 0001
                  td 右→左→左→左
                tr
                  td Panel_No 0002
                  td 左→右→右→左
                tr
                  td Panel_No 0003
                  td 右→右→左→左
                tr
                  td Panel_No 0004
                  td 右→左→右→左
                tr
                  td Panel_No 0005
                  td 左→左→右→左
                tr
                  td Panel_No 0006
                  td 右→右→左→右
                tr
                  td Panel_No 0007
                  td 左→右→左→右
                tr
                  td Panel_No 0008
                  td 左→左→左→右
                tr
                  td Panel_No 0009
                  td 右→左→左→右
            +questFlow('202207sm57.jpg')
              h5 メロン冷蔵庫入り口へ向かいMD作成する
              p 襲ってくる四怨将を倒す<br>報酬をもらって最終章終了
</template>

<script>
import Meta from '~/plugins/meta'

export default {
  mixins: [Meta],
  data() {
    return {
      meta: {
        title: `ゲフェンメロンフェスタ優品 ストーリークエスト - ${process.env.BASETITLE}`,
        description: 'ゲフェンメロンフェスタ優品ストーリークエスト「激突！スウィーツコンテスト」の進行を案内しています',
        type: 'website',
        url: `${process.env.BASEURL}/event/july2022/story/`,
        image: `${process.env.BASEURL}/ogp.png`
      },
      tabIndex: 1
    }
  },
  methods: {
    tabSwitch: function(num) {
      this.tabIndex = num
    }
  },
}
</script>

<style lang="scss" scoped>
@use '~/assets/scss/settings' as *;
@use '~/assets/scss/mixins' as *;

@use '~/assets/scss/tab';
@use '~/assets/scss/table';

.content{
  @include media(sm){
    margin-top: -2em;
  }
}

dl{
  dt{
    margin-bottom: 5px;
  }
  dd{
    margin-bottom: 0.75em;
  }
}
</style>