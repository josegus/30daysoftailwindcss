<template>
  <div class="pb-8">
    <h1 class="font-bold text-white bg-gray-800 p-4 text-4xl text-center">Day #{{ day }}</h1>

    <ChallengeHeader class="sm:px-0 px-4">
      {{ challenge }}
    </ChallengeHeader>

    <div class="bg-white p-4 rounded-lg shadow-md">
      <component
        :is="component"
      ></component>
    </div>
  </div>
</template>

<script>
import challenges from '@/challenges';
import ChallengeHeader from '../components/ChallengeHeader.vue';
import Day1 from '../components/Day1.vue';
import Day2 from '../components/Day2.vue';
import Day3 from '../components/Day3.vue';
import Day4 from '../components/Day4.vue';
import Day5 from '../components/Day5.vue';
import Day6 from '../components/Day6.vue';
import Day7 from '../components/Day7.vue';

export default {
  components: {
    ChallengeHeader,
    Day1,
    Day2,
    Day3,
    Day4,
    Day5,
    Day6,
    Day7,
  },
  computed: {
    day() {
      return this.$route.params.number;
    },
    component() {
      return `Day${this.$route.params.number}`;
    },
    challenge() {
      return challenges[this.day];
    },
  },
};
</script>
