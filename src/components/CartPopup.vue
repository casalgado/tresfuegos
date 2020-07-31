<template>
  <div class="cart-popup">
    <p>Carrito de Compra</p>
    <CartSnippet v-for="c in cart" :key="c.nombre" :item="c" />
    <p class="total">Total: {{ total }}</p>
    <ButtonNavigation route="Checkout" text="checkout" />
  </div>
</template>

<script>
import ButtonNavigation from "./ButtonNavigation";
import numeral from "numeral";
import CartSnippet from "./CartSnippet";
export default {
  name: "CartPopup",
  components: {
    CartSnippet,
    ButtonNavigation,
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
.cart-popup {
  cursor: auto;
  width: 320px;
  position: absolute;
  top: 90%;
  right: -25px;
  background-color: whitesmoke;
  border: 1px solid rgb(30, 30, 30);
  border-radius: 8px;
  z-index: 999;
  padding-bottom: 25px;
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
