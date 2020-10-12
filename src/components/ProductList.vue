<template>
  <div>
    <div v-if="$apollo.loading">Loading...</div>
    <ul id="product-list">
      <li v-for="product in products" :key="product.id" @click="onBookClick(product.id)">{{product.name}}</li>
    </ul>
    <product-details :productid="selectedProduct" />
  </div>
</template>

<script>
import ProductDetails from "./ProductDetails";
import { GET_ALL_PRODUCTS_QUERY } from "../graphql";

export default {
  name: "product-list",
  components: {
    ProductDetails
  },
  data() {
    return {
      products: [],
      selectedProduct: ""
    };
  },
  apollo: {
    products: {
      query: GET_ALL_PRODUCTS_QUERY,
      // Error handling
      error(error) {
        console.error("[ProductList.vue] We've got an error!", error);
      }
    }
  },
  methods: {
    onBookClick(productId) {
      this.selectedProduct = productId;
    }
  }
};
</script>


