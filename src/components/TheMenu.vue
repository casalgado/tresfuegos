<template>
  <div class="menu">
    <TheMenuItem v-for="i in menu" :key="i.nombre" :itemData="i" />
  </div>
</template>

<script>
import TheMenuItem from "./TheMenuItem";
import { menu } from "../lib/menu";
export default {
  name: "TheMenu",
  components: { TheMenuItem },
  data() {
    return {
      menu: menu,
    };
  },
};
</script>

<style scoped>
.menu {
  display: grid;
  grid-template-columns: 1fr;
  gap: 15px 15px;
  margin: 0px;
}

@media only screen and (min-width: 768px) {
  /* For desktop: */
  .menu {
    grid-template-columns: 1fr 1fr;
    margin: 10px 30px 10px 30px;
  }
}
</style>
