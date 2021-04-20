<template>
  <div class="border border-gray-400 rounded bg-white p-2 text-sm">
      {{ shortChallenge }}
  </div>
</template>

<script>
export default {
  props: ['challenge'],
  computed: {
    shortChallenge() {
      return this.challenge.length > 60
        ? `${this.challenge.substring(0, 60)}..`
        : this.challenge;
    },
  },
};
</script>
