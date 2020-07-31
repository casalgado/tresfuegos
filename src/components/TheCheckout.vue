<template>
  <div class="cont">
    <TheCheckoutOrderSummary />
    <TheCheckoutClientInfo />
    <ButtonWhatsapp id="checkoutButton" />
  </div>
</template>

<script>
import ButtonWhatsapp from "./ButtonWhatsapp";
import TheCheckoutClientInfo from "./TheCheckoutClientInfo";
import TheCheckoutOrderSummary from "./TheCheckoutOrderSummary";
export default {
  name: "TheCheckout",
  components: {
    TheCheckoutClientInfo,
    TheCheckoutOrderSummary,
    ButtonWhatsapp,
  },
  data() {
    return {};
  },
};
</script>

<style scoped>
.cont {
  display: grid;
  grid-template-columns: 1fr;
}

#checkoutButton {
  grid-column: span 1;
  margin-top: 25px;
}

@media only screen and (min-width: 768px) {
  /* For desktop: */
  .cont {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
  #checkoutButton {
    grid-column: span 2;
    margin-top: 25px;
  }
}
</style>
