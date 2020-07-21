<template>
  <div>
    <img alt="Menu1" src="../assets/menu1.jpg" />
    <img alt="menu2" src="../assets/menu2.jpg" />
  </div>
</template>

<script>
export default {
  name: "TheMenu",
};
</script>

<style scoped>
img {
  width: 100%;
}

@media only screen and (min-width: 768px) {
  /* For desktop: */
  img {
    width: 48%;
    margin: 20px 10px 5px 10px;
  }
}
</style>
