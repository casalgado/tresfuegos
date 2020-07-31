<template>
  <div>
    <button @click="sendMessage">Checkout</button>
  </div>
</template>

<script>
export default {
  name: "ButtonWhatsapp",
  props: {},
  methods: {
    sendMessage: function() {
      let i = this.$store.state.info;
      let firstname = i.firstname || "(por definir)";
      let lastname = i.lastname || "";
      let address = i.address || "(por definir)";
      let payment = i.payment || "(por definir)";
      let order = `Nombre: ${firstname} ${lastname},%0aDireccion: ${address}.%0aPedido:%0a`;
      this.$store.state.cart.forEach((c) => {
        order += `${c.cantidad} ${c.nombre},%0a`;
      });
      order += `Total: ${this.$store.getters.totalPrice},%0a`;
      order += `Medio Pago: ${payment},`;
      order.replace("#", "no");

      window.open("https://wa.me/+573152574690?text=" + order);
    },
  },
  computed: {
    getState: function() {
      return this.$store.state;
    },
  },
};
</script>

<style scoped>
button {
  font-family: CiutadellaRoundedW01-Rg;
  cursor: pointer;
  background-color: rgb(237, 22, 38);
  border: 1px solid rgb(209, 19, 32);
  border-radius: 5px;
  width: 180px;
  height: 45px;
  color: seashell;
  font-size: 20px;
}

button:hover {
  background-color: rgb(209, 19, 32);
}

button:active,
button:focus {
  -moz-outline-style: none;
  outline: none;
}
</style>
