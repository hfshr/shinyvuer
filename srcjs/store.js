import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    mtcars: [],
    drawerState: null,
    penguins: [],
  },
  mutations: {
    setState(state, payload) {
      const { key, value } = payload;
      Vue.set(state, key, value);
    },
    toggleDrawerState(state, data) {
      state.drawerState = data;
    },
  },
  getters: {
    drawerState: (state) => state.drawerState,
  },
});

export default store;
