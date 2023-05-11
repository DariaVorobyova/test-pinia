<script setup>
import ShopList from "./../components/ShopList.vue";
import { onMounted } from "vue";

onMounted(() => {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
      });
    });
  });
});
</script>

<template>
  <div class="main-banner" id="top">
    <el-container class="container">
      <div class="main-content">
        <p class="main-title">Welcome to Citrus</p>
        <p class="main-subtitle">Lets start spring sale</p>
        <el-link href="#scrolled" class="button">Shop now</el-link>
      </div>
    </el-container>
  </div>
  <el-main class="main-shop" id="scrolled">
    <el-link href="#top" class="button back-btn">
      Back to top <el-icon-top />
    </el-link>
    <ShopList />
  </el-main>
</template>

<style lang="scss" scoped>
.main-banner {
  position: relative;
  min-height: 800px;
  background-image: url("@/assets/images/main-bg.jpeg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  &::after {
    position: absolute;
    z-index: 1;
    content: "";
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

.main-shop {
  position: relative;
  overflow: initial !important;
}

.back-btn {
  margin-right: 20px;
  position: sticky;
  z-index: 3;
  top: 0;
  right: 0;

  svg {
    width: 16px;
    margin-left: 4px;
  }
}
</style>
