<template>
  <div class="max-w-2xl mx-auto mt-8 mb-8">

    <!-- pins -->
    <div class="flex items-center justify-around relative">
      <span class="bg-red-500 border-4 border-gray-800 h-12 w-8 absolute -top-6 left-20"></span>
      <span class="bg-red-500 border-4 border-gray-800 h-12 w-8 absolute -top-6 right-20"></span>
    </div>

    <!-- card -->
    <div class="dark:bg-gray-600 dark:border-black sm:flex-row sm:p-8 p-2 flex-col border-8 border-gray-800 rounded-3xl flex items-center">

      <!-- image -->
      <div class="sm:w-1/3 w-2/3 sm:mt-0 mt-8">
        <img class="rounded-full border-8 border-gray-800 bg-gray-200 p-4" src="../../public/day-6-avatar.png" alt="">
      </div>

      <!-- info -->
      <div class="sm:w-2/3 sm:ml-8 sm:text-left sm:mt-0 mt-4 text-center w-full ml-0">
        <div class="dark:text-white sm:text-2xl text-xl font-bold">Gustavo Vasquez</div>
        <div class="dark:font-bold dark:text-white text-purple-600 text-sm italic">Fullstack Laravel developer</div>

        <div class="animate-pulse flex-1 space-y-4 py-1 mt-2">
          <div class="h-3 dark:bg-gray-800 bg-gray-700 rounded w-3/4"></div>
          <div class="space-y-2">
            <div class="h-3 dark:bg-gray-800 bg-gray-700 rounded"></div>
            <div class="h-3 dark:bg-gray-800 bg-gray-700 rounded w-5/6"></div>
          </div>
          <div class="h-3 dark:bg-gray-800 bg-gray-700 rounded w-1/4"></div>
        </div>

        <!-- social networks -->
        <div class="mt-4 sm:flex justify-between">
          <a class="sm:inline-block hidden hover:bg-purple-800 transition-colors duration-200 bg-purple-600 py-2 px-8 text-white rounded-full text-sm" href="https://gustavovasquez.me" target="_blank">Hire me</a>

          <div class="space-x-2 sm:flex items-center text-center">
            <a class="dark:bg-blue-400 hover:bg-blue-400 bg-gray-400 transition-colors duration-300 rounded-full p-2 inline-block" title="My Twitter" href="https://twitter.com/gusvasquezdev" target="_blank">
              <img class="w-4 filter invert" src="../../public/brands/twitter.svg" alt="Twitter">
            </a>

            <a href="https://github.com/josegus/" class="dark:bg-gray-900 hover:bg-gray-800 bg-gray-400 transition-colors duration-300 rounded-full p-2 inline-block" title="My Github" target="_blank">
              <img class="w-4 filter invert" src="../../public/brands/github.svg" alt="Github">
            </a>

            <a class="dark:bg-blue-600 hover:bg-blue-600 bg-gray-400 transition-colors duration-300 rounded-full p-2 inline-block" title="My Linkedin" href="https://www.linkedin.com/in/gustavo-vasquez/" target="_blank">
              <img class="w-4 filter invert" src="../../public/brands/linkedin.svg" alt="Linkedin">
            </a>
          </div>
        </div>

        <a class="sm:hidden w-full block text-center mt-4 hover:bg-purple-800 transition-colors duration-200 bg-purple-600 py-2 px-8 text-white rounded-full text-sm" href="https://gustavovasquez.me" target="_blank">Hire me</a>
      </div>
    </div>
  </div>
</template>
