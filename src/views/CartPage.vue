<template>
  <el-row class="cart-wrap">
    <el-col :span="24">
      <el-table :data="getProducts" class="cart-table">
        <el-table-column width="100" prop="id" label="#"></el-table-column>
        <el-table-column width="150" label="Image">
          <template #default="product">
            <img
              :src="product.row.images[0]"
              class="fluid rounded"
              width="60"
              height="60"
              :alt="product.row.title"
            />
          </template>
        </el-table-column>
        <el-table-column prop="title" label="Name"></el-table-column>
        <el-table-column label="Quantity">
          <template #default="product">
            <button class="button-icon --quantity" @click="store.incrementQ(product.row)">
              <el-icon-plus />
            </button>
            <span>{{ product.row.quantity }}</span>
            <button class="button-icon --quantity" @click="store.decrementQ(product.row)">
              <el-icon-minus />
            </button>
          </template>
        </el-table-column>
        <el-table-column prop="price" label="Price"></el-table-column>
        <el-table-column label="Subtotal">
          <template #default="product">
            <span>{{ product.row.price * product.row.quantity }}</span>
          </template>
        </el-table-column>
        <el-table-column label="Remove from cart">
          <template #default="product">
            <button
              class="button-icon"
              @click="store.removeFromCart(product.row)"
            >
              <el-icon-delete />
            </button>
          </template>
        </el-table-column>
      </el-table>
      <el-container class="container">
        <p class="cart-price">
          Total: ${{
            store.cartItems.reduce(
              (acc, item) => (acc += item.price * item.quantity),
              0
            )
          }}
        </p>
      </el-container>
    </el-col>
  </el-row>
</template>

<script setup>
import { onMounted, computed } from "vue";
import { useShoppingStore } from "../stores";
const store = useShoppingStore();

const getProducts = computed(() => {
  return store.cartItems;
});

onMounted(() => {
  store.fetchProducts();
});
</script>

<style lang="scss" scoped>
.cart-wrap {
  padding-top: 200px;
  height: 100vh;
  background-color: var(--secondary-color);
}

.cart-price {
  color: var(--main-color);
  font-size: 1rem;
  font-weight: 400;
  text-transform: uppercase;
  margin-top: 1rem;
  margin-left: auto;
  margin-right: 0;
}
</style>
