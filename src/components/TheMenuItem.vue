<template>
  <div id="menu-item">
    <img :alt="itemData.nombre" :src="src" />
    <div class="item-details">
      <h2>{{ itemData.nombre }}</h2>
      <p>{{ itemData.descripcion || "" }}</p>
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
        if (e.nombre === this.itemData.nombre) {
          console.log(`${e.nombre}==${this.itemData.nombre}`);
          inCart = true;
        }
      });
      return inCart;
    },
  },
};
</script>

<style scoped>
#menu-item {
  display: grid;
  grid-template-columns: 1fr;
  padding: 15px;
  background-color: whitesmoke;
  border: 1px solid gray;
  color: rgb(30, 30, 30);
  border-radius: 10px;
}

#menu-item img {
  width: 100%;
  max-width: 300px;
  margin: 0 auto;
  border-radius: 5px;
  margin-bottom: 15px;
}

@media only screen and (min-width: 768px) {
  /* For desktop: */
  #menu-item {
    grid-template-columns: 2fr 5fr;
  }
  #menu-item img {
    height: 180px;
    width: 180px;
    border-radius: 5px;
    margin-bottom: 0px;
  }
}

.item-details {
  margin-right: 10px;
  margin-left: 10px;
  text-align: left;
}

.item-details h2 {
  margin-top: 0px;
  text-transform: capitalize;
}

.item-details p {
  margin: 0px;
}

.price {
  margin-bottom: 0px;
  margin-left: 20px;
  text-align: right;
  display: inline-block;
}
</style>
