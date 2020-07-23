<template>
  <div>
    <button @click="add">agregar</button>
  </div>
</template>

<script>
export default {
  name: "ButtonAddToCart",
  props: {
    itemData: Object,
  },
  methods: {
    add: function() {
      this.$store.commit("addFirst", {
        name: this.itemData.nombre,
        quantity: 1,
        price: this.itemData.precio,
        image: this.itemData.imagen,
      });
    },
  },
};
</script>

<style scoped>
div {
  display: inline-block;
}
button {
  font-family: CiutadellaRoundedW01-Rg;
  cursor: pointer;
  background-color: rgb(30, 30, 30);
  border: 1px solid rgb(0, 0, 0);
  border-radius: 5px;
  font-size: 18px;
  padding-bottom: 3px;
  color: whitesmoke;
}

button:hover {
  background-color: rgb(0, 0, 0);
}

button:active,
button:focus {
  -moz-outline-style: none;
  outline: none;
}
</style>
