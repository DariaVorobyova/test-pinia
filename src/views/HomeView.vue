<script setup>
import ShopList from "./../components/ShopList.vue";
</script>

<template>
  <div class="main-banner">
    <el-container class="container">
      <div class="main-content">
        <p class="main-title">Welcome to Citrus</p>
        <p class="main-subtitle">Lets start spring sale</p>
        <a href="#scrolled" class="button app-btn">Shop now</a>
      </div>
    </el-container>
  </div>
  <el-main id="scrolled">
    <ShopList />
  </el-main>
</template>

<style lang="scss" scoped>
.main-banner {
  position: relative;
  min-height: 800px;
  background-image: url('@/assets/images/main-bg.jpeg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  &::after {
    position: absolute;
    z-index: 1;
    content: '';
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    background-color: var(--tertiary-color);
    opacity: 0.5;
  }
}

.main-content {
  position: absolute;
  z-index: 2;
  top: 300px;
  left: 0;
  right: 0;
  margin: auto;
  color: var(--main-color);
  display: flex;
  flex-direction: column;
  align-items: center;
}

.main-title {
  font-size: 1.125rem;
  line-height: 1.25em;
  font-weight: 400;
  text-transform: uppercase;
}

.main-subtitle {
  font-size: 2rem;
  line-height: 1.25em;
  font-weight: 600;
}
</style>