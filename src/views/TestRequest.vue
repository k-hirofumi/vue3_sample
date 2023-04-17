<script setup lang="ts">
  import router from '@/router';
  import { useMainStore } from '@/stores/main';
  import axios from 'axios'
  import { ref } from 'vue';

  type User = {
  firstName: string;
  lastName: string;
  age: number;
};

  const mainStore = useMainStore()

  const result = ref()
  async function get (){
    await axios.get("https://httpbin.org/get").then(response => {
      result.value = response.data as User //型を変更する必要あり
      console.log(result.value)
    }).catch((e) => {
      console.log('error!!')
    })
    console.log('get!!!')
  }
</script>
<template>
  <div class="about">
    <h1>Request!!!
    </h1>
    <button @click="get">get!</button>
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
