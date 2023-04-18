<script setup lang="ts">
  import router from '@/router';
  import { useMainStore } from '@/stores/main';
  import axios from 'axios'
  import { onBeforeMount,onMounted, onBeforeUpdate, ref } from 'vue';

  type User = {
  firstName: string;
  lastName: string;
  age: number;
  };

  const count = ref(0)

  //initiate処理(beforeCreate,createdの処理は直接書く、画面表示時のAPI処理はここ)
  count.value++
  //DOMマウント前の処理
  onBeforeMount(() => {
    console.log("on before mount")
  })
  //DOMマウント後の処理
  onMounted(() => {
    console.log("on mount")
  })
  //アップデート前の処理
  onBeforeUpdate(() => {
    console.log("on before update")
  })

  const mainStore = useMainStore()

  const result = ref<User>()
  async function get (){
    // await axios.get("https://httpbin.org/get").then(response => {
    //   result.value = response.data as User //型を変更する必要あり
    //   console.log(result.value)
    // }).catch((e) => {
    //   console.log('error!!')
    // })
    // console.log('get!!!')
  }
</script>
<template>
  <div class="about">
    <h1>Request!!!
    </h1>
    <button @click="get">get!</button>
    <div>{{ count }}</div>
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
