<template>
  <div @click.prevent.stop="click()">
    <button id="remove" @click="removeOne">-</button>
    <button id="quantity">{{ currentQuantity }}</button>
    <button id="add" @click="addOne">+</button>
  </div>
</template>

<script>
export default {
  name: "ButtonChangeCartQuantities",
  props: {
    itemData: Object,
  },
  methods: {
    addOne: function() {
      this.$store.commit("addOne", {
        nombre: this.itemData.nombre,
      });
    },
    removeOne: function() {
      this.$store.commit("removeOne", {
        nombre: this.itemData.nombre,
      });
    },
    click: function() {
      console.log("test");
    },
  },
  computed: {
    currentQuantity: function() {
      let cart = this.$store.state.cart;
      let q = 0;
      cart.forEach((e) => {
        if (e.nombre === this.itemData.nombre) {
          q = e.cantidad;
        }
      });
      return q;
    },
  },
};
</script>

<style scoped>
* {
  display: inline-block;
}

#add {
  border-top-left-radius: 0px;
  border-bottom-left-radius: 0px;
  border-left: none;
}

#quantity {
  border-top-right-radius: 0px;
  border-bottom-right-radius: 0px;
  border-right: none;
  border-top-left-radius: 0px;
  border-bottom-left-radius: 0px;
  border-left: none;
}

#remove {
  border-top-right-radius: 0px;
  border-bottom-right-radius: 0px;
  border-right: none;
}

button {
  font-family: CiutadellaRoundedW01-Rg;
  cursor: pointer;
  background-color: rgb(255, 140, 40);
  border: 1px solid rgb(226, 126, 38);
  border-radius: 5px;
  font-size: 18px;
  padding-bottom: 3px;
}

button:hover {
  background-color: rgb(226, 126, 38);
}

button:active,
button:focus {
  -moz-outline-style: none;
  outline: none;
}

#quantity:hover {
  background-color: rgb(255, 140, 40);
}
</style>
