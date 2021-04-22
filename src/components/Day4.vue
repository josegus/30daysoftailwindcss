<template>
  <div class="space-y-4">
    <!-- simple -->
    <div class="w-1/2">
      <h2 class="text-xl font-bold">Normal</h2>
      <select class="bg-white border border-gray-400 rounded p-2 w-full">
        <option>--Select your country--</option>
        <option>USA</option>
        <option>Brazil</option>
        <option>England</option>
        <option>Japan</option>
      </select>
    </div>

    <!-- solid -->
    <div class="w-1/2">
      <h2 class="text-xl font-bold">Solid</h2>
      <select class="bg-gray-100 border-transparent rounded p-2 focus:bg-white border focus:border-gray-400 focus:ring-0 w-full">
        <option>--Select your country--</option>
        <option>USA</option>
        <option>Brazil</option>
        <option>England</option>
        <option>Japan</option>
      </select>
    </div>

    <!-- underline -->
    <div class="w-1/2">
      <h2 class="text-xl font-bold">Underline</h2>
      <select class="w-full px-0.5 bg-white border-0 border-b-2 border-gray-400 focus:ring-0">
        <option>--Select your country--</option>
        <option>USA</option>
        <option>Brazil</option>
        <option>England</option>
        <option>Japan</option>
      </select>
    </div>

    <!-- explanation -->
    <div>
      <h2 class="text-xl font-bold">Explanation</h2>
      <p class="mt-2">
        Most browsers apply default styles to form elements, such as inputs, selects, etc. This collapse when we want to apply our own styles.
      </p>

      <p class="mt-2">
        To fix this, Tailwindcss's team has released a plugin called "tailwindcss-forms". It was necessary to install it to override
        the styles applied by the browser.
      </p>

      <div class="mt-2">
        <a class="text-blue-600 font-bold hover:underline" href="https://github.com/tailwindlabs/tailwindcss-forms" target="_blank">tailwindcss-forms</a>
      </div>

      <div class="mt-2">
        <p>Don't forget to add the plugin in <span class="bg-gray-200 rounded text-sm p-1">tailwind.config.js</span> file.</p>
          <code class="w-full">
            <pre>
// tailwind.config.js
module.exports = {
  theme: {
    // ...
  },
  plugins: [
    require('@tailwindcss/forms'),
    // ...
  ],
}
          </pre>
        </code>
      </div>
    </div>
  </div>
</template>
