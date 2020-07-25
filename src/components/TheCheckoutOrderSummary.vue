<template>
  <div class="order-summary">
    <h2>Resumen de Pedido</h2>
    <CartSnippet v-for="c in cart" :key="c.nombre" :item="c" />
    <p class="total">Total: {{ total }}</p>
  </div>
</template>

<script>
import numeral from "numeral";
import CartSnippet from "./CartSnippet";
export default {
  name: "CartPopup",
  components: {
    CartSnippet,
  },
  methods: {
    totalPerItem(item) {
      return `$${numeral(item.precio * item.cantidad).format("0,0")}`;
    },
  },
  computed: {
    cart: function() {
      return this.$store.state.cart;
    },
    total: function() {
      return `$${numeral(this.$store.getters.totalPrice).format("0,0")}`;
    },
  },
};
</script>

<style scoped>
.order-summary {
  width: 80%;
  margin: 0 auto;
}
</style>
