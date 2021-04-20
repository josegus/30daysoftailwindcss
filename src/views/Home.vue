<template>
  <div class="text-center">
    <img class="object-fill h-48 w-full inline-block" alt="Vue logo" src="../assets/tailwindcss.svg">

    <div class="mt-12">
      <a class="hover:text-green-600 hover:underline" href="https://30daysoftailwindcss.com/" target="_blank">Original challenge link</a> |
      <a class="hover:text-green-600 hover:underline" href="https://tailwindcss.com/" target="_blank">TailwindCSS docs</a>
    </div>

    <div class="mt-4 flex space-x-4">
      <Day1/>
      <Day2/>
    </div>
  </div>
</template>

<script>
import Day1 from '@/components/Day1.vue';
import Day2 from '@/components/Day2.vue';

export default {
  components: {
    Day1,
    Day2,
  },
};
</script>
