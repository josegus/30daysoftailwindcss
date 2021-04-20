<template>
  <div class="dark:text-white dark:bg-transparent dark:border-gray-500 bg-white text-sm md:p-4 sm:p-2 border border-gray-300 rounded">
      <h2 class="text-lg">#{{ number }}</h2>

      <div class="mt-2">{{ challenge }}</div>
  </div>
</template>

<script>
export default {
  props: ['number', 'challenge'],
};
</script>
