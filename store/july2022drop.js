const dropData = require(`~/assets/data/july2022drop`)

const itemDataUniquie = (data) => {
  // 特定キーの削除
  const itemData = data.map(obj => {
    const { id, mob, memo, ...data } = obj
    return data
  })

  // 重複アイテムの削除
  return Array.from(
    new Map(itemData.map((item) => [item.item_id, item])).values()
  )
}

export const state = () => ({
  items: itemDataUniquie(dropData),
  drops: dropData,
  filterQuery: {
    label: ''
  }
})

export const mutations = {
  filterQuery(state, query) {
    state.filterQuery = { ...query }
  }
}

export const actions = {
  filterQueryAction (context, payload) {
    context.commit('filterQuery', payload)
  }
}

export const getters = {
  getFilteredItems (state) {
    let data = state.items

    if (state.filterQuery.label !== '') {
      data = data.filter((row) => {
        return row['title'].indexOf(state.filterQuery.label) !== -1
      })
    }
    return data
  },
  getFilterdMobs: state => (target) => {
    let data = state.drops
    if (target !== '') {
      data = data.filter((row) => {
        return row['item_id'] == target
      })
    }
    return data
  }        
}
