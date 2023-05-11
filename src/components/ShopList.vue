<template>
  <div class="shopList">
    <el-row class="shopList__wrap">
      <ProductListItem
        v-for="product in getProducts"
        :key="product.id"
        :product="product"
      />
    </el-row>
  </div>
</template>

<script setup>
import { onMounted, computed } from "vue";
import ProductListItem from "./ProductListItem.vue";
import { useShoppingStore } from "../stores";
const store = useShoppingStore();

const getProducts = computed(() => {
  return store.getProducts;
});

onMounted(() => {
  store.fetchProducts();
});
</script>

<style lang="scss" scoped>
.shopList {
  padding-top: 50px;
}
</style>
