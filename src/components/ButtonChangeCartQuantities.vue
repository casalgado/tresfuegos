<template>
  <div>
    <button id="remove" @click="removeOne">-</button>
    <p>{{ currentQuantity }}</p>
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
        name: this.itemData.nombre,
      });
    },
    removeOne: function() {
      this.$store.commit("removeOne", {
        name: this.itemData.nombre,
      });
    },
  },
  computed: {
    currentQuantity: function() {
      let cart = this.$store.state.cart;
      let q = 0;
      cart.forEach((e) => {
        if (e.name === this.itemData.nombre) {
          q = e.quantity;
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

p {
  background-color: rgb(255, 140, 40);
  width: 20px;
  text-align: center;
  border-top: 1px solid rgb(226, 126, 38);
  border-bottom: 1px solid rgb(226, 126, 38);
  padding-top: 2px;
  padding-bottom: 4px;
  margin-bottom: 0px;
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
</style>
