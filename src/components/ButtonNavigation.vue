<template>
  <button @click="goToRoute">{{ text }}</button>
</template>

<script>
export default {
  name: "ButtonNavigation",
  props: {
    route: String,
    text: String,
  },
  methods: {
    goToRoute: function() {
      this.$router.push({ name: this.route });
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
