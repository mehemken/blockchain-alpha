<template>
  <h1>Hello</h1>
  <button
    @click="click"
  >
  Increment
  </button>
  <p>
    {{ store.state.count }}
  </p>
</template>

<script setup>
import { useStore } from 'vuex'
//import { ref } from 'vue'

const store = useStore()

function click() {
  store.commit('increment')
}
</script>

<style scoped>
a {
  color: #42b983;
}
</style>
