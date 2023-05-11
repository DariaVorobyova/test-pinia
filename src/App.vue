<script setup>
import { RouterLink, RouterView } from "vue-router";
import { useShoppingStore } from "./stores";
const data = useShoppingStore();
</script>

<template>
  <el-header class="app-header">
    <el-row class="app-wrap">
      <el-col span="12">
        <RouterLink class="link" to="/">Citrus</RouterLink>
      </el-col>
      <el-col span="12" class="app-links">
        <RouterLink class="link" to="/">Home</RouterLink>
        <RouterLink class="link" to="cart"><el-icon-goods />({{ data.countCartItems }})</RouterLink>
      </el-col>
    </el-row>
  </el-header>
  <RouterView />
</template>

<style lang="scss" scoped>
.app-header {
  width: 100%;
  padding: 20px 40px;
  position: absolute;
  top: 0;
  z-index: 2;
}

.app-wrap {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.app-links {
  display: flex;
  align-items: center;

  a {
    &:first-child {
      margin-right: 1rem;
    }
  }
}
</style>
