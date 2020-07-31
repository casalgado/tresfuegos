<template>
  <div>
    <h2>Direccion de Envio</h2>
    <input
      class="txt-input"
      v-model="info.firstname"
      @change="onChange"
      placeholder="nombre"
    />
    <input
      class="txt-input"
      v-model="info.lastname"
      @change="onChange"
      placeholder="apellido"
    />
    <input
      class="txt-input"
      v-model="info.address"
      @change="onChange"
      placeholder="direccion"
    />
    <input
      class="txt-input"
      v-model="info.phone"
      @change="onChange"
      placeholder="telefono"
    />
    <h2>Medio de Pago</h2>
    <input
      type="radio"
      id="one"
      value="efectivo"
      @change="onChange"
      v-model="info.payment"
    />
    <label for="efectivo">Efectivo</label>

    <input
      type="radio"
      id="two"
      value="credito"
      @change="onChange"
      v-model="info.payment"
    />
    <label for="credito">T. Credito</label>

    <input
      type="radio"
      id="two"
      value="debito"
      @change="onChange"
      v-model="info.payment"
    />
    <label for="debito">T. Debito</label>
  </div>
</template>

<script>
export default {
  name: "TheCheckoutClientInfo",
  data() {
    return {
      info: {
        firstname: "",
        lastname: "",
        address: "",
        phone: "",
        payment: "",
      },
    };
  },
  methods: {
    onChange: function() {
      this.$store.commit("updateClientInfo", this.info);
    },
  },
};
</script>

<style scoped>
.txt-input {
  display: block;
  margin: 0 auto;
  padding: 25px;
}
</style>
