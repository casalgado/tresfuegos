<template>
  <div>
    <h2>Direccion de Envio</h2>
    <input class="txt-input" v-model="nombre" placeholder="nombre" />
    <input class="txt-input" v-model="apellido" placeholder="apellido" />
    <input class="txt-input" v-model="direccion" placeholder="direccion" />
    <input class="txt-input" v-model="telefono" placeholder="telefono" />
    <h2>Medio de Pago</h2>
    <input type="radio" id="one" value="efectivo" v-model="medioPago" />
    <label for="efectivo">Efectivo</label>

    <input type="radio" id="two" value="credito" v-model="medioPago" />
    <label for="credito">T. Credito</label>

    <input type="radio" id="two" value="debito" v-model="medioPago" />
    <label for="debito">T. Debito</label>
  </div>
</template>

<script>
export default {
  name: "TheCheckoutClientInfo",
  data() {
    return {
      nombre: "",
      apellido: "",
      direccion: "",
      telefono: "",
      medioPago: "",
    };
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
