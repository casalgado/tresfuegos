<template>
  <div id="ham-cont">
    <img class="ham" alt="Hamburgers" src="../assets/ham1.jpg" />
    <img class="ham" alt="Hamburgers" src="../assets/ham0.jpg" />
    <ButtonNavigation id="ham-button" text="VER MENU" route="Menu" />
    <img class="ham" alt="Hamburgers" src="../assets/ham2.jpg" />
    <img class="ham" alt="Hamburgers" src="../assets/ham3.jpg" />
    <img class="ham" alt="Hamburgers" src="../assets/ham4.jpg" />
    <img class="ham" alt="Hamburgers" src="../assets/ham5.jpg" />
  </div>
</template>

<script>
import ButtonNavigation from "./ButtonNavigation";
export default {
  name: "HamburgerSpotlight",
  components: { ButtonNavigation },
};
</script>

<style scoped>
.ham {
  width: 100%;
}
#ham-button {
  width: 100%;
  margin-top: 5px;
  margin-bottom: 10px;
}
@media only screen and (min-width: 768px) {
  /* For desktop: */
  #ham-cont {
    width: 100%;
    margin: 0 auto;
  }

  .ham {
    margin: 21px;
    width: 30%;
  }
  #ham-button {
    display: none;
  }
}
</style>
