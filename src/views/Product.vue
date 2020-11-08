<template>
  <ProductDetails :product="product"/>
</template>

<script>
import axios from 'axios';
import ProductDetails from "@/components/product/Index";

export default {
  name: "Product",
  components: {ProductDetails},
  data: () => ({
    product: {}
  }),
  mounted() {
    axios.get('https://hackathon-db-api.azurewebsites.net/product/get/' + this.$route.params.productId)
        .then(response => {
          this.product = response.data
        })
  }
}
</script>

<style scoped>

</style>