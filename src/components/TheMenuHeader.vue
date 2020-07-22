<template>
  <div id="the-menu-header">
    <p>header</p>
  </div>
</template>

<script>
export default {
  name: "TheMenuHeader",
};
</script>

<style>
#the-menu-header {
  background-color: gray;
  color: black;
  grid-column: span 1;
}

@media only screen and (min-width: 768px) {
  /* For desktop: */
  #the-menu-header {
    grid-column: span 2;
  }
}
</style>
