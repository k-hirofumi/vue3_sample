<script setup lang="ts">
  import router from '@/router';
  import { useMainStore } from '@/stores/main';

  const mainStore = useMainStore()
  const login = () => {
    mainStore.authorized = true
    router.push('/')
  }
</script>
<template>
  <div class="about">
    <h1>This is an login page</h1>
    <button @click="login">HomeForm</button>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
