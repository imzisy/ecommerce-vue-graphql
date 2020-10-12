<template>
    <div class="product-details">
      <div v-if="product">
        <p>Product details go here:</p>
        <div>
            <h2>{{product.name}}</h2>
            <p>{{product.price}}</p>
            <p>{{product.id}}</p>
            <b>Applicapple promotions for this product</b>
            <ul class="other-product">
                <li v-for="item in product.promos" :key="item.id">
                    {{item.description}}
                </li>
            </ul>
        </div>
      </div>
      <div v-else>No Product Selected...</div>
    </div>
</template>

<script>
import { GET_PRODUCT_QUERY } from "../graphql";

export default {
  name: "product-details",
  props: ["productid"],
  data() {
    return {
      product: null
    };
  },
  apollo: {
    product: {
      // Advanced query with parameters
      // The 'variables' method is watched by vue
      query: GET_PRODUCT_QUERY,
      // Reactive parameters
      variables() {
        // Use vue reactive properties here
        return {
          id: this.productid
        };
      },
      // We use a custom update callback because
      // we need to assign single Book Type Object rather than an array of objects
      update: data => data.product,
      skip() {
        return this.productid === "";
      },
      // Error handling
      error(error) {
        console.error("[ProductDetails.vue] We've got an error!", error);
      }
    }
  }
};
</script>

