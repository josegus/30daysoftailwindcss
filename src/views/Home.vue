<template>
  <div class="text-center">
    <img class="object-fill h-48 w-full inline-block" alt="Vue logo" src="../assets/tailwindcss.svg">

    <div class="dark:text-white mt-16 text-2xl">30 days of tailwindcss challenge</div>

    <div class="dark:text-white mt-12">
      <a class="hover:text-green-600 hover:underline" href="https://30daysoftailwindcss.com/" target="_blank">Original challenge link</a>
      <span> | </span>
      <a class="hover:text-green-600 hover:underline" href="https://tailwindcss.com/" target="_blank">TailwindCSS docs</a>
    </div>

    <div class="mt-4 flex flex-wrap -m-4">
      <router-link
        v-for="(challenge, index) in challenges"
        :key="index"
        :to="`/day-${index}`"
        class="p-4 md:w-1/3 sm:w-full"
      >
        <CardChallenge
          :number="index"
          :challenge="challenge"
          class="h-full"
        />
      </router-link>
    </div>
  </div>
</template>

<script>
import CardChallenge from '@/components/CardChallenge.vue';
import challenges from '../challenges';

export default {
  components: {
    CardChallenge,
  },
  data() {
    return {
      challenges,
    };
  },
};
</script>
