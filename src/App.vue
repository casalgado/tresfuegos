<template>
  <div id="app">
    <TheHeader />
    <router-view id="view" />
  </div>
</template>
<script>
import TheHeader from "./components/TheHeader";
export default {
  components: {
    TheHeader,
  },
};
</script>

<style>
@import url(//db.onlinewebfonts.com/c/8d8f2ae3f36a79b31483ea6ff88eda3f?family=CiutadellaRoundedW01-Rg);
@font-face {
  font-family: "CiutadellaRoundedW01-Rg";
  src: url("//db.onlinewebfonts.com/t/8d8f2ae3f36a79b31483ea6ff88eda3f.eot");
  src: url("//db.onlinewebfonts.com/t/8d8f2ae3f36a79b31483ea6ff88eda3f.eot?#iefix")
      format("embedded-opentype"),
    url("//db.onlinewebfonts.com/t/8d8f2ae3f36a79b31483ea6ff88eda3f.woff2")
      format("woff2"),
    url("//db.onlinewebfonts.com/t/8d8f2ae3f36a79b31483ea6ff88eda3f.woff")
      format("woff"),
    url("//db.onlinewebfonts.com/t/8d8f2ae3f36a79b31483ea6ff88eda3f.ttf")
      format("truetype"),
    url("//db.onlinewebfonts.com/t/8d8f2ae3f36a79b31483ea6ff88eda3f.svg#CiutadellaRoundedW01-Rg")
      format("svg");
}
#app {
  font-family: CiutadellaRoundedW01-Rg;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  overflow: hidden;
  color: rgb(196, 167, 141);
}

#view {
  max-width: 1280px;
  padding-left: 10px;
  padding-right: 10px;
  margin: 0 auto;
}

body {
  margin: 0px;
  background-color: rgb(15, 15, 15);
}
</style>
