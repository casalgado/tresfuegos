<template>
  <div class="cont">
    <TheCheckoutOrderSummary />
    <TheCheckoutClientInfo />
  </div>
</template>

<script>
import TheCheckoutClientInfo from "./TheCheckoutClientInfo";
import TheCheckoutOrderSummary from "./TheCheckoutOrderSummary";
export default {
  name: "TheCheckout",
  components: { TheCheckoutClientInfo, TheCheckoutOrderSummary },
  data() {
    return {};
  },
};
</script>

<style scoped>
.cont {
  display: grid;
  grid-template-columns: 1fr 1fr;
}
</style>
