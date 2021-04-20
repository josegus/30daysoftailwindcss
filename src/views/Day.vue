<template>
  <div class="pb-8">
    <h1 class="font-bold text-white bg-gray-800 p-4 text-4xl text-center">Day #{{ day }}</h1>

    <ChallengeHeader>
      {{ challenge }}
    </ChallengeHeader>

    <div class="bg-white p-4 rounded-lg shadow-md">
      <component
        :is="component"
        :use-card-style="false"
        @challenge="challenge = $event"
      ></component>
    </div>
  </div>
</template>

<script>
import ChallengeHeader from '../components/ChallengeHeader.vue';
import Day1 from '../components/Day1.vue';
import Day2 from '../components/Day2.vue';

export default {
  components: {
    ChallengeHeader,
    Day1,
    Day2,
  },
  data() {
    return {
      challenge: '',
    };
  },
  computed: {
    component() {
      return `Day${this.$route.params.number}`;
    },
    day() {
      return this.$route.params.number;
    },
  },
};
</script>
