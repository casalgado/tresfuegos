<template>
  <div
    class="cart-icon"
    @mouseenter="hover = true"
    @mouseleave="hover = false"
    @mouseover="hover = true"
    @click="hover = !hover"
  >
    <img alt="" src="../assets/cart-icon.svg" />
    <div v-if="quantity > 0" class="q-indicator">
      <p>{{ quantity }}</p>
    </div>
    <CartPopup v-if="hover" />
  </div>
</template>

<script>
import CartPopup from "./CartPopup";
export default {
  name: "CartIcon",
  components: {
    CartPopup,
  },
  data() {
    return {
      hover: false,
    };
  },
  computed: {
    quantity: function() {
      return this.$store.getters.totalQuantity;
    },
  },
};
</script>

<style scoped>
.cart-icon {
  cursor: pointer;
  margin-right: 25px;
  justify-self: end;
  position: relative;
}

.q-indicator {
  position: absolute;
  top: 5px;
  left: -5px;
  cursor: pointer;
  color: white;
  background-color: black;
  vertical-align: middle;
  padding-bottom: 0px;
  height: 30px;
  width: 30px;
  border-radius: 15px;
}

.q-indicator p {
  padding: 0px;
  margin: 0px;
  margin-top: 5px;
  line-height: 20px;
}

img {
  width: 80px;
}
</style>
