<template>
  <div class="dark:bg-gray-700 bg-gray-100 min-h-screen">

    <div class="absolute top-4 left-4">
      <a href="https://github.com/josegus/30daysoftailwindcss" class="dark:bg-gray-900 hover:bg-gray-800 bg-gray-400 transition-colors duration-300 rounded-full p-2 inline-block" title="Open github repository" target="_blank">
        <img class="w-4 filter invert" src="../public/brands/github.svg" alt="Github">
      </a>
    </div>

    <!-- light/dark mode -->
    <div class="absolute right-4 top-4">
      <button v-if="isInDarkMode" @click="toLightMode()" class="text-yellow-500 focus:outline-none" title="Switch to light mode">
        <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>
      </button>

      <button v-else @click="toDarkMode()" class="text-blue-500 focus:outline-none" title="Switch to dark mode">
        <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path></svg>
      </button>
    </div>

    <div id="app" class="max-w-7xl mx-auto sm:px-6 lg:px-8">

      <!-- nav -->
      <div id="nav" class="sm:py-8 py-16 px-8 text-center font-bold text-gray-600 dark:text-white">
        <router-link exact-active-class="dark:text-green-400 text-green-400" to="/">Home</router-link> |
        <router-link exact-active-class="dark:text-green-400 text-green-400" to="/day-1">Day 1</router-link> |
        <router-link exact-active-class="dark:text-green-400 text-green-400" to="/day-2">Day 2</router-link> |
        <router-link exact-active-class="dark:text-green-400 text-green-400" to="/day-3">Day 3</router-link> |
        <router-link exact-active-class="dark:text-green-400 text-green-400" to="/day-4">Day 4</router-link> |
        <router-link exact-active-class="dark:text-green-400 text-green-400" to="/day-5">Day 5</router-link> |
        <router-link exact-active-class="dark:text-green-400 text-green-400" to="/day-6">Day 6</router-link> |
        <router-link exact-active-class="dark:text-green-400 text-green-400" to="/day-7">Day 7</router-link>
      </div>

      <!-- main -->
      <router-view/>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    const usingDarkMode = localStorage.theme === 'dark';

    if (usingDarkMode) {
      this.isInDarkMode = true;
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  },
  data() {
    return {
      isInDarkMode: false,
    };
  },
  methods: {
    toLightMode() {
      localStorage.theme = 'light';
      document.documentElement.classList.remove('dark');
      this.isInDarkMode = false;
    },
    toDarkMode() {
      localStorage.theme = 'dark';
      document.documentElement.classList.add('dark');
      this.isInDarkMode = true;
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
