<template>
  <div id="app">
    <h1>Ecommerce website</h1>
    <product-list />
  </div>
</template>

<script>
import ProductList from "./components/ProductList";

ProductList
export default {
  name: "App",
  components: {
    ProductList,
  }
};
</script>

<style>
@import './app.css'
</style>
