<script setup lang="ts">
import { RouterView } from 'vue-router';
import ButtomDarkMode from './components/darkMode/ButtomDarkMode.vue';


</script>

<template>
  <main>
    <RouterView />
  </main>


  <div class="hidden">
    <ButtomDarkMode/>
  </div>
</template>
