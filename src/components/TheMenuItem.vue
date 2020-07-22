<template>
  <div class="menu-item">
    <img :alt="itemData.nombre" :src="src" />
    <div class="item-details">
      <h2>{{ itemData.nombre }}</h2>
      <p>{{ itemData.descripcion }}</p>
      <div class="">
        <ButtonAddToCart v-if="!inCart" :itemData="itemData" />
        <ButtonChangeCartQuantities v-else :itemData="itemData" />
        <h4 class="price">{{ formattedPrice }}</h4>
      </div>
    </div>
  </div>
</template>

<script>
import ButtonAddToCart from "./ButtonAddToCart";
import ButtonChangeCartQuantities from "./ButtonChangeCartQuantities";
import numeral from "numeral";
export default {
  name: "MenuItem",
  props: { itemData: Object },
  components: { ButtonAddToCart, ButtonChangeCartQuantities },
  computed: {
    src: function() {
      return require(`../assets/menu/${this.itemData.imagen}.jpg`);
    },
    formattedPrice: function() {
      return `$${numeral(this.itemData.precio).format("0,0")}`;
    },
    inCart: function() {
      let cart = this.$store.state.cart;
      let inCart = false;
      cart.forEach((e) => {
        if (e.name === this.itemData.nombre) {
          console.log(`${e.name}==${this.itemData.nombre}`);
          inCart = true;
        }
      });
      return inCart;
    },
  },
};
</script>

<style scoped>
.menu-item {
  display: grid;
  grid-template-columns: 2fr 5fr;
  padding: 15px;
  background-color: whitesmoke;
  border: 1px solid gray;
  color: rgb(30, 30, 30);
  border-radius: 10px;
}

.menu-item img {
  height: 180px;
  width: 180px;
  border-radius: 5px;
}

.item-details {
  margin-right: 10px;
  margin-left: 10px;
  text-align: left;
}

.item-details h2 {
  text-transform: capitalize;
}

.item-details p {
  margin: 0px;
}

.price {
  margin-left: 20px;
  text-align: right;
  display: inline-block;
}
</style>
