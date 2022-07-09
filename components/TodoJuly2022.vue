<template lang="pug">
.todo-wrap
  .controllers
    .controller__buttons
      button(v-on:click="resetTask()").button.button-primary 全てのチェックを外す
    .controller__search
      input(type="text" placeholder="キーワードで絞り込み" v-model="filterQuery.label" v-on:keyup="changeQuery()").input-full
  .table-caption
    p: nuxt-link(to="#supplement") ※各メロンの出現場所は表下参照
  .table-wrap
    //- pre {{ $store.state.june2022.sort }}
    table.table
      thead
        tr
          template(v-for="value in tabaleHeadings")
            th(v-on:click="sortQuery(value.label)" v-if="value.sortable").sortable {{ value.title }}
              font-awesome-icon(:icon="['fas', 'caret-up']" :class="{'nonactive' : sort.target === value.label && sort.asc === 1}").icon.sortable-up
              font-awesome-icon(:icon="['fas', 'caret-down']" :class="{'nonactive' : sort.target === value.label && sort.asc === -1}").icon.sortable-down
            th(v-else v-text="value.title")
      tbody
        template(v-for="value in $store.getters['july2022/filteredTasks']")
          tr(:class="(value.todo === true) ? 'is-ended' : ''" v-on:click="doneTask(value)")
            td.centered
              font-awesome-icon(:icon="['far', 'square']" v-if="value.todo === false").icon-check.check-true
              font-awesome-icon(:icon="['far', 'square-check']" v-if="value.todo === true").icon.icon-check.check-false
            td {{ value.label }}
            td {{ value.baseexp | addComma }}
            td {{ value.point | addComma }}
            td.centered {{ value.lv }}
            td {{ value.map }}
  #supplement.supply
    #melorin.supply-block
      h3 ミニメロリン出現場所
      ul
        li 250 ページ
        li ゲフェン地下ダンジョン B2F
        li フローズンメモリー
        li 氷の洞窟 03
        li 図書館 記憶の回廊
        li グラストヘイム 古城2F
        li 戦死者の墓
        li 生体工学研究所 03
        li 生体工学研究所 04
        li グラストヘイムアビス(1)
        li グラストヘイムアビス(2)
        li 紫色の深海洞窟 上層
    #damelorin.supply-block
      h3 堕メロリン出現場所
      ul
        li 薄暗い久陽宮
        li タートルアイランドダンジョン 03（久陽宮）
        li ネジリアン帝国
        li 鉱山ダンジョン 02
        li 幻想の北洞窟ルワンダ
        li コモドダンジョン 02（北洞窟ルワンダ）
        li 廃棄場ルドゥス 2階
        li 廃棄場ルドゥス 3階
        li ノーグロード 3層(1)
        li ノーグロード 3層(2)
        li ノーグロード 3層(3)
        li ノーグロード 2層
        li 紫色の深海洞窟 下層
    #watermelon.supply-block
      h3 ウォーターメロン出現場所
      ul
        li 歪んだ迷宮の森
        li 迷宮の森 03
        li 月夜花の悪夢
        li フェイヨン地下洞窟 B4F（地下寺院）
        li ロックリッジ地下街
        li ロックリッジ地下街 奥地
        li キワワ砂漠 01
        li キワワ砂漠 02
        li ロックリッジ鉱山 01
        li ロックリッジ鉱山 01 奥地
        li 下水処理場
        li グラストヘイム地下水路 03
        li 第1魔力発電所
        li 特殊警戒地域オース
        li プロンテラ地下監獄
        li プロンテラ地下水路 B4F
        li ヴェルナー研究所 A棟
        li ヴェルナー研究所 B棟
        li ヴェルナー研究所 C棟
        li ヴェルナー研究所 D棟
</template>

<script>
export default {
  data() {
    return {
      tabaleHeadings: [
        {
          label: 'todo',
          title: 'ToDo',
          sortable: true
        },
        {
          label: 'label',
          title: '討伐対象',
          sortable: false
        },
        {
          label: 'baseexp',
          title: '報酬Exp',
          sortable: true
        },
        {
          label: 'point',
          title: '報酬Mポイント',
          sortable: true
        },
        {
          label: 'lv',
          title: 'Lv',
          sortable: true
        },
        {
          label: 'map',
          title: '生息MAP',
          sortable: false
        }
      ],
      sort: {
        target: '',
        asc: 0
      },
      filterQuery: {
        label: ''
      }
    }
  },
  mounted() {
    this.$store.dispatch('july2022/filterQueryAction', this.filterQuery)
    this.$store.dispatch('july2022/sortQueryAction', this.sort)
  },
  methods: {
    doneTask (value) {
      this.$store.dispatch('july2022/doneTodoAction', value.id)
    },
    resetTask () {
      this.$store.dispatch('july2022/resetTodoAction')
    },
    changeQuery () {
      this.$store.dispatch('july2022/filterQueryAction', this.filterQuery)
    },
    sortQuery (value) {
      switch (this.sort.asc) {
        case 0:
          this.sort.asc = 1
          break
        case 1:
          this.sort.asc = -1
          break
        case -1:
          this.sort.asc = 0
          break
        default:
          this.sort.asc = 0
          break
      }
      
      if(this.sort.target !== value) this.sort.asc = 1
      this.sort.target = value
      this.$store.dispatch('july2022/sortQueryAction', this.sort)
    }
  }
}
</script>

<style lang="scss" scoped>
@use '~/assets/scss/settings' as *;
@use '~/assets/scss/mixins' as *;

@use '~/assets/scss/controllers';
@use '~/assets/scss/table';

// supply

.supply{
  margin-top: 1.5em;
  margin-bottom: 1.5em;
  @include media(lg){
    display: flex;
    justify-content: center;
    margin-left: -10px;
    margin-right: -10px;
  }

  &-block{
    @include media(lg){
      width: 100%;
      padding-left: 10px;
      padding-right: 10px;
    }
  }
}
</style>