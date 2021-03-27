import { createStore } from 'vuex'

// Create a new store instance.
const store = createStore({

  state: {
      favorisTable: ['Pan', 'Despina', 'Comète de Halley']
  },

  mutations: {

    ajouterFavoris(state, favorisItem) {
      state.favorisTable.push(favorisItem);
    },
  
    supprimerFavoris(state, id) {
      let index = state.favorisTable.findIndex(favorisItemCourant => favorisItemCourant.id == id)
      state.favorisTable.splice(index, 1)
    }
  },

  getters: {
    favorisTable: state => state.favorisTable
  }
})

export default store;
