<template>
  <div class="cont">
    <img :alt="item.nombre" :src="src" />
    <p class="name">{{ item.nombre }}</p>
    <p>{{ item.cantidad }} <span class="letter">X</span> ${{ priceFormat }}</p>
    <ButtonChangeCartQuantities :itemData="item" />
  </div>
</template>

<script>
import ButtonChangeCartQuantities from "./ButtonChangeCartQuantities";
import numeral from "numeral";
export default {
  name: "CartSnippet",
  components: { ButtonChangeCartQuantities },
  props: {
    item: Object,
  },
  computed: {
    src: function() {
      return require(`../assets/menu/${this.item.imagen}.jpg`);
    },
    priceFormat: function() {
      return numeral(this.item.precio).format("0,0");
    },
  },
};
</script>

<style scoped>
.letter {
  opacity: 0.5;
}
.cont {
  padding-left: 10px;
  padding-right: 10px;
  display: grid;
  grid-template-columns: 2fr 4fr;
  grid-template-rows: 1fr 1fr 1fr;
  gap: 0px 15px;
  padding-bottom: 5px;
  border-bottom: 2px solid lightgray;
  margin-bottom: 5px;
}

p.name {
  text-transform: capitalize;
}

p {
  margin: 0px;
  align-self: center;
}

img {
  width: 100%;
  grid-row: span 3;
}
</style>
