<template>
  <button @click="sendMessage">{{ msg }}</button>
</template>

<script>
export default {
  name: "ButtonWhatsapp",
  props: {
    msg: String,
  },
  methods: {
    sendMessage: function() {
      window.open("https://api.whatsapp.com/send?phone=+573046675581");
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
