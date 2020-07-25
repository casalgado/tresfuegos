import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    cart: [],
  },
  getters: {
    totalQuantity: (state) => {
      return state.cart.reduce((totalq, currentItem) => {
        return totalq + currentItem.cantidad;
      }, 0);
    },
    totalPrice: (state) => {
      return state.cart.reduce((totalp, currentItem) => {
        return totalp + currentItem.cantidad * currentItem.precio;
      }, 0);
    },
  },
  mutations: {
    addFirst(state, payload) {
      state.cart.push(Object.assign({}, payload));
      state.cart = [...state.cart];
    },
    addOne(state, payload) {
      state.cart.forEach((e) => {
        if (e.nombre === payload.nombre) {
          e.cantidad++;
        }
      });
      state.cart = [...state.cart];
    },
    removeOne(state, payload) {
      state.cart.forEach((e) => {
        if (e.nombre === payload.nombre) {
          e.cantidad--;
        }
      });
      state.cart = [...state.cart.filter((e) => e.cantidad >= 1)];
    },
  },
  actions: {},
  modules: {},
});
