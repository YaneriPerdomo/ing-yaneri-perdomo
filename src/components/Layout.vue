<script setup>
import Article from "./Article.vue";
import Aside from "./Aside.vue";
</script>
<template>
  <main class="h-100 shadow">
    <div class="container-xl main-content h-100">
      <div class="row h-100 w-100">
        <Aside />
        <Article>
          <slot></slot>
        </Article>
      </div>
    </div>
  </main>
</template>
<style scoped>
.row {
  display: flex;
  width: 100%;
}

.container-xl {
  height: 100%;
  display: flex;
}

main {
  height: 100%;
}
</style>
