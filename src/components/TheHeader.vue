<template>
  <div id="the-header">
    <div class="content">
      <img class="logo-symbol" alt="" src="../assets/logo-symbol.svg" />
      <CartIcon />
    </div>
  </div>
</template>

<script>
import CartIcon from "./CartIcon";
export default {
  name: "TheHeader",
  components: { CartIcon },
};
</script>

<style scoped>
#the-header {
  margin-bottom: 15px;
  background-color: gray;
  color: black;
}

.content {
  padding-top: 10px;
  padding-bottom: 10px;
  max-width: 1280px;
  min-height: 85px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
}

.logo-symbol {
  justify-self: start;
  margin-left: 25px;
}

img {
  width: 80px;
}

@media only screen and (min-width: 768px) {
  /* For desktop: */
}
</style>
