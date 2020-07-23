<template>
  <div class="cart-popup">
    <p>Carrito de Compra</p>
    <CartSnippet v-for="c in cart" :key="c.name" :item="c" />
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
      return `$${numeral(item.price * item.quantity).format("0,0")}`;
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
.cart-popup {
  cursor: auto;
  width: 320px;
  position: absolute;
  top: 90%;
  right: -25px;
  background-color: whitesmoke;
  border: 1px solid rgb(30, 30, 30);
  border-radius: 8px;
}

p:first-child {
  border-bottom: 2px solid lightgray;
  padding-bottom: 10px;
  margin-bottom: 5px;
}

p {
  font-weight: bold;
}
</style>
