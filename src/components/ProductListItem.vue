<template>
  <el-col :span="6" class="product">
    <div class="product-wrap">
      <el-image style="width: 100%; height: 250px; margin-bottom: 16px;" fit="cover" :src="product.images[0]" class="card-img-top"
        :alt="product.title" />
      <div class="product-body">
        <p class="product-title">
          {{ product.brand }}
        </p>
        <h5 class="product-subtitle">{{ product.title }} ${{ product.price }}</h5>
        <el-button @click="data.addToCart(product)" class="button">
          add to cart
        </el-button>
      </div>
    </div>
  </el-col>
</template>

<script setup>
import { useShoppingStore } from "../stores";
import { defineProps, toRefs } from "vue";
const props = defineProps({
  product: {
    type: Object,
    required: true,
  },
});
const { product } = toRefs(props);
const data = useShoppingStore();
</script>

<style lang="scss" scoped>
.product {
  padding: 20px;
}
.product-wrap {
  border: 2px solid var(--secondary-light-color);
  color: var(--tertiary-color);
  padding: 16px;
}
.product-title {
  font-size: 0.75rem;
  font-weight: 400;
  text-transform: uppercase;
  margin-bottom: 1rem;
}

.product-subtitle {
  font-size: 1rem;
  font-weight: 600;
  margin: 0 0 1.5rem;
}
</style>
