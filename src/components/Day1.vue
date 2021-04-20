<template>
  <div class="space-y-4">
    <p>
      I read the docs and installing Tailwindcss is a little bit overwhelming on some project.
    </p>

    <p>This is what I did:</p>

    <div>
      <div>1. Create package.json executing:</div>
      <code>npm init</code>
    </div>

    <div>
      2. Follow steps from <a class="hover:underline text-blue-600 font-bold" href="https://flaviocopes.com/tailwind-setup/" target="_blank">this tutorial</a>.
    </div>

    <div>
      3. Install a <span class="italic underline">watcher</span> and create a command
      in <span class="italic underline">scripts</span> inside package.json file
    </div>

    <div>
      I found this approach too "do it/install it from zero", so I decided to leave this option because everything was "very manual"
      and continue the challenge by creating a new project with <span class="underline">vue-cli</span>.
    </div>
  </div>
</template>

<script>
export default {
  created() {
    this.$emit('challenge', this.challenge);
  },
  data() {
    return {
      challenge: 'Install Tailwind CSS without any Javascript Framework locally with purgeCSS, enable the dark mode option, preferences or class is up to you.',
    };
  },
};
</script>
