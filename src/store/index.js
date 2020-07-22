import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    cart: [],
  },
  getters: {},
  mutations: {
    addFirst(state, payload) {
      state.cart.push(Object.assign({}, payload));
      state.cart = [...state.cart];
    },
    addOne(state, payload) {
      state.cart.forEach((e) => {
        if (e.name === payload.name) {
          e.quantity++;
        }
      });
      state.cart = [...state.cart];
    },
    removeOne(state, payload) {
      state.cart.forEach((e) => {
        if (e.name === payload.name) {
          e.quantity--;
        }
      });
      state.cart = [...state.cart.filter((e) => e.quantity > 1)];
    },
  },
  actions: {},
  modules: {},
});
