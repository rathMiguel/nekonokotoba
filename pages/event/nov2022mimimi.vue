<template lang="pug">
div
  MainHeader(h1='ミミミのミッションマスター2022')
  .main-content
    //- pre {{ missonContent[0].missions }}
    section.section-block(v-for="missionBlocks in missonContent")
      h3.title-bordered {{ missionBlocks.title }}
      pre {{ missionBlocks.missons }}
      .table-wrap
        table.table.striped
          thead
            tr
              th ミッション名
              th クエスト内容
              th 必要アイテム
          tbody
            tr(v-for="mission in missionBlocks.missions")
              td(v-html="mission.title")
              td(v-html="mission.content")
              td(v-html="mission.items")
</template>

<style lang="scss" scoped>
@use '~/assets/scss/settings' as *;
@use '~/assets/scss/mixins' as *;

@use '~/assets/scss/table';

.section-block{
  margin-bottom: 40px;
}

.title-bordered{
  border-bottom: 1px solid  $color-primary;
  padding-bottom: 4px;
}

</style>

<script>
import Meta from '~/plugins/meta'

export default {
  mixins: [Meta],
  data() {
    return {
      meta: {
        title: `ミミミのミッションマスター　クエストリスト - ${process.env.BASETITLE}`,
        description: 'ミミミのミッションマスターの概要をまとめました',
        type: 'website',
        url: `${process.env.BASEURL}/event/nov2022mimimi/`,
        image: `${process.env.BASEURL}/ogp.png`
      },
      missonContent: [
        {
          title: "初級1",
          missions: [
            {
              title: "ポポリン討伐",
              content: "ポポリンを20体倒す",
              items: "",
              memo: ""
            },
            {
              title: "ヨーヨー討伐",
              content: "ヨーヨーを20体倒す",
              items: "",
              memo: ""
            },
            {
              title: "オークゾンビ討伐",
              content: "オークゾンビを20体倒す",
              items: "",
              memo: ""
            },
            {
              title: "エッグリン討伐",
              content: "エッグリンを20体倒す",
              items: "",
              memo: ""
            },
            {
              title: "カタシムリの皮納品",
              content: "カタシムリの皮を30個を集める（内10個納品）",
              items: "カタシムリの皮　30個",
              memo: ""
            },
            {
              title: "ウサギのヘアバンドの衣装作成",
              content: "指定された材料を集めて集めてくる",
              items: "ウサギのヘアバンド[0]　または　<br>やわらかな毛１０個、<br>真珠１個とクローバー１０個",
              memo: ""
            },
            {
              title: "工場クエスト",
              content: "<a href='http://www.roquest.work/index.php?Einbroch#ein_quest_02' target='_blank'>工場クエスト</a>をクリアする",
              items: "チューブ 20個<br>錆びたネジ 10個<br>古い鉄板 10個",
              memo: ""
            },
            {
              title: "ニャンゲーマーズ",
              content: "<a href='http://www.roquest.work/index.php?Malangdo#Gamers' target='_blank'>ニャンゲーマーズ</a>をクリアする",
              items: "",
              memo: ""
            },
          ]
        },
        {
          title: "初級2",
          missions: [
            {
              title: "スリーパー討伐",
              content: "スリーパーを25体倒す",
              items: "",
              memo: ""
            },
            {
              title: "マルク討伐",
              content: "マルクを25体倒す",
              items: "",
              memo: ""
            },
            {
              title: "古木の枝収集",
              content: "古木の枝　15個集める（内5個納品）",
              items: "古木の枝　15個",
              memo: ""
            },
            {
              title: "衣装天使ヘアバンド作成",
              content: "指定された材料を集めて集めてくる",
              items: "天使のヘアバンド１個　または　<br>柔らかい羽毛５０個<br>ハーピーの羽１００個",
              memo: ""
            },
            {
              title: "異世界クエスト",
              content: "<a href='http://www.roquest.work/index.php?Prontera#Onward_Midcamp' target='_blank'>異世界クエスト</a>をクリアする",
              items: "ゼロピー 300個<br>エメラルド 1個<br>ルビー 1個",
              memo: ""
            },
            {
              title: "Noatun訪問",
              content: "Noatunサーバーの船の上にいるミミミと会話する",
              items: "",
              memo: ""
            },
            {
              title: "地下排水路お掃除ビギナー",
              content: "地下排水路お掃除（ビギナー）の深海のカナトウス１体討伐する",
              items: "",
              memo: ""
            },
            {
              title: "真昼の弦月　夢の中",
              content: "真昼の弦月（深い眠りではないほう）のルーミンを討伐する",
              items: "",
              memo: ""
            },
          ]
        },
        {
          title: "初級3",
          missions: [
            {
              title: "オットー討伐",
              content: "オットーを30体討伐する",
              items: "",
              memo: ""
            },
            {
              title: "ミノタウロス討伐",
              content: "ミノタウロスを30体討伐する",
              items: "",
              memo: ""
            },
            {
              title: "突撃バジルリスク討伐",
              content: "突撃バジルリスクを30体討伐する",
              items: "",
              memo: ""
            },
            {
              title: "オリデオコン納品",
              content: "オリデオコンを15個集めてくる（うち5個納品）",
              items: "オリデオコン　15個",
              memo: ""
            },
            {
              title: "生体工学研究所侵入",
              content: "<a href='http://www.roquest.work/index.php?Lighthalzen#lhz_quest01' target='_blank'>生体工学研究所侵入</a>クエストをクリアする",
              items: "",
              memo: ""
            },
            {
              title: "サモンパーク",
              content: "サモンパークで古木の枝１個を使う",
              items: "",
              memo: ""
            },
            {
              title: "サラの記憶",
              content: "サラの記憶に行きフェイヨン警備兵１体を討伐する",
              items: "",
              memo: ""
            },
            {
              title: "生体工学研究所の記録（会話モード）",
              content: "生体工学研究所の記録（会話モード）へ行き、エレメス＝ガイルを１体討伐する",
              items: "",
              memo: ""
            },
          ]
        },
        {
          title: "中級1",
          missions: [
            {
              title: "ベリット討伐",
              content: "ベリットを50体討伐する",
              items: "",
              memo: ""
            },
            {
              title: "リムーバ討伐",
              content: "リムーバを50体討伐する",
              items: "",
              memo: ""
            },
            {
              title: "銀の毛皮納品",
              content: "銀の毛皮を60個集める（うち20個納品）",
              items: "銀の毛皮　60個",
              memo: ""
            },
            {
              title: "レゲンシュルム研究所クエスト",
              content: "<a href='http://seraphic-wish.net/ro-ragtime/quest/lighthalzenq/lighthalzenq3.html' target='_blank'>レゲンシュルム研究所</a>クエストをクリアする",
              items: "スピングラス 1個<br>白ひげ 1個<br>研究所の通行パス 1個<br>囚人の腕輪 1個<br>ガラス玉 1個<br>聖水 5個<br>花たば 1個",
              memo: ""
            },
            {
              title: "ファンタスマゴリカクエスト",
              content: "<a href='http://www.roquest.work/index.php?%E6%A5%BD%E5%9C%92%E5%9B%A3#Fantasmagorica' target='_blank'>ファンタスマゴリカクエ</a>クエストをクリアする",
              items: "空きビン2個<br>ビーフトースト1個（または　にく2個、モーラオレンジ1個、バナナ1個）",
              memo: ""
            },
            {
              title: "特秘レポート題目",
              content: "・拡大鏡の便利な使い方<br>・アイテムの便利な移動方法<br>・メールシステム<br>の確認（話しを聞くだけ）",
              items: "",
              memo: ""
            },
            {
              title: "魔神の塔",
              content: "魔神の塔へ行き、魔神の巨影１体を討伐する",
              items: "",
              memo: ""
            },
            {
              title: "真昼の弦月（より深い夢の中）",
              content: "真昼の弦月（より深い夢の中）へ行き、呪縛のルーミン１体を討伐する",
              items: "",
              memo: ""
            },
          ]
        },
        {
          title: "中級2",
          missions: [
            {
              title: "ハイオーク討伐",
              content: "ハイオークを50体倒す",
              items: "",
              memo: ""
            },
            {
              title: "アサルトタートル討伐",
              content: "アサルトタートルを50体倒す",
              items: "",
              memo: ""
            },
            {
              title: "ブギスギス討伐",
              content: "ブギスギスを50体倒す",
              items: "",
              memo: ""
            },
            {
              title: "[衣装]バルンーンハット作成",
              content: "指定された材料を集めてくる",
              items: "バルーンハット[1]または　<br>古い青い箱50個",
              memo: ""
            },
            {
              title: "ロックリッジクエスト",
              content: "<a href='http://www.roquest.work/index.php?Alberta#RockRidge' target='_blank'>ロックリッジ</a>クエストクリア",
              items: "",
              memo: ""
            },
            {
              title: "パーティー結成",
              content: "2人以上のPTを組む",
              items: "",
              memo: ""
            },
            {
              title: "悪夢のジターバグ(なだらかな道)",
              content: "悪夢のジターバグへ行き、p・ジターバグ１体討伐",
              items: "",
              memo: ""
            },
            {
              title: "サラの記憶",
              content: "サラの記憶へ行き、大長老アイリン１体を討伐する",
              items: "",
              memo: ""
            },
          ]
        },
        {
          title: "中級3",
          missions: [
            {
              title: "ロリルリ討伐",
              content: "ロリルリを50体討伐する",
              items: "",
              memo: ""
            },
            {
              title: "深淵の騎士討伐",
              content: "深淵の騎士を50体討伐する",
              items: "",
              memo: ""
            },
            {
              title: "魔女の星の砂納品",
              content: "魔女の星の砂を150個集めてくる（内50個納品）",
              items: "魔女の星の砂　150個",
              memo: ""
            },
            {
              title: "困りもののワンちゃんクエスト",
              content: "<a href='http://www.roquest.work/index.php?RockRidge#weekly_quest_02' target='_blank'>困りもののわんちゃん</a>クエストをクリアする",
              items: "",
              memo: "要ロックリッジクエスト"
            },
            {
              title: "ギルド加入",
              content: "ギルドに加入した状態でミミミに会話する",
              items: "",
              memo: ""
            },
            {
              title: "フェンリルとサラ",
              content: "ギガンテスを１体討伐する",
              items: "",
              memo: ""
            },
            {
              title: "ゲフェン魔法大会",
              content: "イフォドスを１体討伐する",
              items: "",
              memo: ""
            },
            {
              title: "生体研究所の記録（会話モード）",
              content: "生体研究所の記録（会話モード）へ行き、無名のソードマン1体を討伐する",
              items: "",
              memo: ""
            },
          ]
        },
        {
          title: "上級1",
          missions: [
            {
              title: "アノリアン討伐",
              content: "アノリアンを100体討伐する",
              items: "",
              memo: ""
            },
            {
              title: "コヨーテ討伐",
              content: "コヨーテを100体討伐する",
              items: "",
              memo: ""
            },
            {
              title: "エルニウム納品",
              content: "エルニウムを60個集めてくる（内20個納品）",
              items: "エルニウム　60個",
              memo: ""
            },
            {
              title: "地下遺跡アドベンチャークエスト",
              content: "<a href='http://www.roquest.work/index.php?Yuno#Underground_Ruins_Adv' target='_blank'>地下遺跡アドベンチャー</a>クエストをクリアする",
              items: "古い鉄板 30個",
              memo: ""
            },
            {
              title: "フレイムヴァレーへの道クエスト",
              content: "<a href='http://www.roquest.work/index.php?Morocc#Road_to_FlameValley' target='_blank'>フレイムヴァレーへの道</a>クエストをクリアする",
              items: "化け物のエサ 1個",
              memo: ""
            },
            {
              title: "呪いの剣士",
              content: "呪いの剣士へ行き、呪いの根源を1体討伐する",
              items: "",
              memo: ""
            },
            {
              title: "地下排水路エキスパート",
              content: "暗黒のシーラカンス１体を討伐する（3点盛りから出現）",
              items: "",
              memo: ""
            },
            {
              title: "悪夢のジターバグ（険しい道）",
              content: "悪夢のジターバグ（険しい道）へ行き、fff・ジターバグ１体討伐",
              items: "",
              memo: ""
            },
          ]
        },
        {
          title: "上級2",
          missions: [
            {
              title: "イグニゼム=セニア（一次職）討伐",
              content: "イグニゼム=セニアを100体討伐する",
              items: "",
              memo: ""
            },
            {
              title: "ヘラクレススカラバ討伐（スカラバガーデン）",
              content: "ヘラクレススカラバを100体討伐する",
              items: "",
              memo: "要クエスト（猫耳と尻尾の男途中まで）"
            },
            {
              title: "ブワヤの影討伐",
              content: "ブワヤの影を100体討伐する",
              items: "",
              memo: ""
            },
            {
              title: "マンドラゴラの鉢植え納品",
              content: "マンドラゴラの鉢植えを60個集める（うち20個納品）",
              items: "マンドラゴラの鉢植え 60個",
              memo: ""
            },
            {
              title: "七王家とユミルの心臓クエスト",
              content: "<a href='http://www.roquest.work/index.php?Prontera#Banquet_For_Heroes' target='_blank'>七王家とユミルの心臓</a>クエストをクリアする",
              items: "",
              memo: ""
            },
            {
              title: "ビオスの島",
              content: "ビオスの島へ行き、死神アンク１体を討伐する",
              items: "",
              memo: ""
            },
            {
              title: "ホラーおもちゃ工場",
              content: "ホラーおもちゃ工場へ行き、アンソニ1体を討伐する",
              items: "",
              memo: ""
            },
            {
              title: "チャールストン工場",
              content: "チャールストン工場へ行き、チャールストン３号を１体討伐する",
              items: "",
              memo: ""
            },
          ]
        },
        {
          title: "上級3",
          missions: [
            {
              title: "セイレン=ウィンザー(転生二次職)討伐",
              content: "セイレン=ウィンザー(転生二次職)を3体討伐する",
              items: "",
              memo: ""
            },
            {
              title: "サラマンダー討伐",
              content: "サラマンダーを150体討伐する",
              items: "",
              memo: ""
            },
            {
              title: "思念体の髪納品",
              content: "思念体の髪　30個を持ってくる（内10個納品）",
              items: "思念体の髪　30個",
              memo: ""
            },
            {
              title: "テラグローリアクエスト",
              content: "<a href='http://www.roquest.work/index.php?Prontera#Terra_Gloria' target='_blank'>テラグローリアクエスト</a>クエストをクリアする",
              items: "古いつるはし 3個",
              memo: ""
            },
            {
              title: "エンドレスタワー",
              content: "エンドレスタワーへ行き、エドガ1体を討伐する",
              items: "",
              memo: ""
            },
            {
              title: "モルスの洞窟",
              content: "モルスの洞窟へ行き、モルス・ネクロマンサー１体討伐",
              items: "",
              memo: ""
            },
            {
              title: "ゲフェン魔法大会",
              content: "ゲフェン魔法大会へ行き、フェンリルを1体討伐する",
              items: "",
              memo: ""
            },
            {
              title: "最後の部屋",
              content: "最後の部屋へ行き、T_W_Oを1体討伐する",
              items: "",
              memo: ""
            },
          ]
        },
        {
          title: "超級1",
          missions: [
            {
              title: "トップサイドライダー討伐",
              content: "トップサイドライダーを200体討伐する",
              items: "",
              memo: ""
            },
            {
              title: "思念体の血納品",
              content: "思念体の血　90個を持ってくる（内30個納品）",
              items: "思念体の血　90個",
              memo: ""
            },
            {
              title: "配管整備作業クエスト",
              content: "<a href='http://www.roquest.work/index.php?RockRidge#weekly_quest_09' target='_blank'>配管整備作業</a>クエストをクリアする",
              items: "",
              memo: "要ロックリッジクエスト"
            },
            {
              title: "カードを剥がそう",
              content: "イズのNPCタメシーニャ(112,129)からポリンｃコットンシャツを受け取り同NPCで剥がす（それ以外は剥がせない）",
              items: "",
              memo: ""
            },
            {
              title: "ハートハンター軍事基地",
              content: "ハートハンター軍事基地へ行き、ハートハンターリーダー１体を討伐する",
              items: "",
              memo: ""
            },
            {
              title: "フェンリルとサラ",
              content: "フェンリルとサラへ行き、サラの幻影を１体討伐する",
              items: "",
              memo: ""
            },
            {
              title: "空中要塞",
              content: "空中要塞へ行き、・J・アーネストウルフを１体討伐する",
              items: "",
              memo: ""
            },
            {
              title: "魔神殿",
              content: "魔神殿へ行き、魔神の使徒・シナイムを１体討伐する",
              items: "",
              memo: ""
            },
          ]
        },
        {
          title: "超級2",
          missions: [
            {
              title: "混沌のバフォメットJr討伐",
              content: "混沌のバフォメットJrを100体討伐する",
              items: "",
              memo: ""
            },
            {
              title: "幻想の石納品",
              content: "幻想の石180個集める（内60個納品）",
              items: "幻想の石　180個",
              memo: ""
            },
            {
              title: "イルシオンクエスト",
              content: "<a href='https://tamareki.blog/dugeon/quest-ilusion/' target='_blank'>イルシオン</a>クエストをクリアする",
              items: "",
              memo: ""
            },
            {
              title: "特秘レポート題目",
              content: "・持ち替え機能<br>・露店検索、代理露店<br>・ダメージ表示",
              items: "",
              memo: ""
            },
            {
              title: "ヴェルナー研究所中央室",
              content: "Y.S.F01セイレン１体討伐",
              items: "",
              memo: ""
            },
            {
              title: "オース二次捜索",
              content: "オース二次捜索へ行き、ツイン・カプトゥ(CP)１0体を討伐する",
              items: "",
              memo: ""
            },
            {
              title: "コルメモリアル",
              content: "コルメモリアルへ行き、EL-A17Tを１体討伐する",
              items: "",
              memo: ""
            },
            {
              title: "グラストヘイムの没落",
              content: "グラストヘイムの没落へ行き、呪いを呑み込んだ王１体を討伐する",
              items: "",
              memo: ""
            },
          ]
        },
        {
          title: "超級3",
          missions: [
            {
              title: "深海の半魚人討伐",
              content: "深海の半魚人を100体討伐する",
              items: "",
              memo: ""
            },
            {
              title: "壊れた魔法石納品",
              content: "壊れた魔法石を3個集める（内1個納品）",
              items: "壊れた魔法石　3",
              memo: ""
            },
            {
              title: "賢者の遺産クエスト",
              content: "<a href='http://www.roquest.work/index.php?sp_cor#main_quest_04' target='_blank'>賢者の遺産</a>クエストをクリアする",
              items: "蛍光色の液体 1個、壊れた剣 1個",
              memo: ""
            },
            {
              title: "Yggdrasillチャレンジ",
              content: "YEティアマト攻城戦かYE蜃気楼の塔をクリアする",
              items: "",
              memo: ""
            },
            {
              title: "保安区域",
              content: "保安区域へ行き、研究助手自動人形を5体討伐する",
              items: "",
              memo: ""
            },
            {
              title: "水上植物園",
              content: "水上植物園へ行き、シルヴァ・パピリア1体討伐",
              items: "",
              memo: ""
            },
            {
              title: "ヘイ！スウィーティ！",
              content: "スウィーティを１体討伐する",
              items: "",
              memo: ""
            },
            {
              title: "時間に忘れられた飼育場",
              content: "ブルーピタヤ / イエローピタヤ / レッドピタヤを１体討伐する",
              items: "",
              memo: ""
            },
          ]
        }
      ]
    }
  }
}
</script>
