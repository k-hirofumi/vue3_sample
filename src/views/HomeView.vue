<script setup lang="ts">
import Vue, { reactive, ref } from 'vue'
import { useCounterStore } from '@/stores/counter';
//ローカルステートの宣言
const state = reactive({
  count: 0,
  countColor: 'default' //属性情報
})
const age = ref('')

//グローバルステート
const store = useCounterStore()

//副作用の宣言
const text: string = ''


function increase(): void {
  state.count++
  if(state.count >= 5){
    state.countColor = 'warning'//属性情報を動的に変える
  }

}
const clear = (): void => {
  state.count = 0
  state.countColor = 'default'//属性情報を動的に変える
  age.value = 'clear!!'
}

</script>

<template>
  <div>
    <p>{{ store.count }}</p>
    <input v-model="text" />
    <p>{{ age }}</p>
    <p class="title">count!!</p> <!--通常のクラス設定 -->
    <p :class="state.countColor">{{ state.count }}</p> <!--ステートのみでclassを切り替える -->
    <p :class="[state.count < 7 ? 'default' : 'warning']">{{ state.count }}</p> <!--直接classを切り替える -->
    <div v-if="state.count >= 5">5以上です</div>
    <div>
      <button @click="increase">↑</button>
      <button @click="clear">clear</button>
    </div>
  </div>
 
  <button @click="()=> $router.push('/login')">LoginForm</button>
  

  <!-- <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header> -->

  <!-- <RouterView /> -->
</template>

<style scoped>
.title {
  color:blue
}
.default {
  color: black;
}

.warning {
  color: red;
}
/* header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
} */
</style>
