<template>
  <div class="home">
    <div id="main-image-cont">
      <img alt="Tres Fuegos Branding" src="../assets/branding.jpg" />
      <ButtonWhatsapp id="main-button" msg="HACER PEDIDO" />
      <CaretBottom id="caret" />
    </div>
    <TheMenu />
    <HamburgerSpotlight />
    <TheFooter />
  </div>
</template>

<script>
import HamburgerSpotlight from "./HamburgerSpotlight";
import ButtonWhatsapp from "./ButtonWhatsapp";
import CaretBottom from "./CaretBottom";
import TheMenu from "./TheMenu";
import TheFooter from "./TheFooter";
export default {
  name: "Home",
  components: {
    ButtonWhatsapp,
    TheMenu,
    CaretBottom,
    HamburgerSpotlight,
    TheFooter,
  },
};
</script>
<style scoped>
#caret {
  display: none;
}

#main-image-cont {
  width: 100%;
  margin: 0 auto;
}

#main-image-cont img {
  width: 200%;
  left: -50%;
  position: relative;
  margin: 0 auto;
}

#main-button {
  width: 100%;
  margin-top: 5px;
  margin-bottom: 10px;
}
@media only screen and (min-width: 768px) {
  /* For desktop: */
  #caret {
    fill: rgb(196, 167, 141);
    position: absolute;
    top: 90%;
    left: 47.3%;
  }

  #main-image-cont {
    width: 1410px;
    position: relative;
    margin: 0 auto;
  }

  #main-button {
    position: absolute;
    top: 65%;
    left: 44%;
  }
}
</style>
