<template>
  <div>
    <!-- large browser -->
    <div
      :class="isSticky ? 'sticky top-0' : ''"
      class="hidden md:flex justify-between items-center bg-blue-400 text-white h-24 p-5 text-sm"
    >
      <a href="#" class="flex items-center">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9"></path></svg>
        <span class="ml-2">Im-a-<span class="italic">{{ navbarTypeText }}</span>-navbar</span>
        <a @click.prevent="toggleSticky" class="underline ml-2" href="#">(change)</a>
      </a>

      <div class="flex items-center space-x-2">
        <a class="p-2" href="#">Services</a>
        <a class="p-2" href="#">About us</a>
        <a class="p-2" href="#">Contact</a>
        <a class="p-2 border-2 rounded border-blue-600 flex items-center" href="#">
          <span>Schedule a call</span>
          <svg class="w-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
        </a>
      </div>
    </div>

    <!-- mobile -->
    <div
      :class="isSticky ? 'sticky top-0' : ''"
      class="md:hidden h-auto flex flex-col justify-between bg-blue-400 text-white p-5 text-sm"
    >
      <div class="flex items-center justify-between">
        <a href="#" class="flex items-center">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9"></path></svg>
          <span class="ml-2">{{ navbarTypeText }}</span>
          <a @click.prevent="toggleSticky" class="underline ml-2" href="#">(change)</a>
        </a>

        <button class="p-1 rounded border inline-block focus:outline-none">
          <svg v-if="mobileMenuIsOpen" @click="toggleMobileMenuState" class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
          <svg v-else @click="toggleMobileMenuState" class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
        </button>
      </div>

      <div v-if="mobileMenuIsOpen" class="border border-blue-300 my-4"></div>

      <div v-if="mobileMenuIsOpen" class="flex flex-col space-y-2">
        <a class="p-2" href="#">Services</a>
        <a class="p-2" href="#">About us</a>
        <a class="p-2" href="#">Contact</a>
        <div>
          <a class="p-2 border-2 rounded border-blue-600 inline-flex" href="#">
            <span>Schedule a call</span>
            <svg class="w-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
          </a>
        </div>
      </div>
    </div>

    <div class="space-y-32 mt-8">
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis repellendus et iste dolorum, soluta iusto ab est, provident itaque dicta veniam voluptas placeat, corrupti perspiciatis? Repudiandae nemo distinctio repellat suscipit.</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid distinctio id iusto? Quis natus, officia quia ducimus aperiam ea consequatur incidunt totam, dolorem, repellat nam consequuntur beatae asperiores vitae sint!</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias reprehenderit quis commodi ratione pariatur molestiae quia repellendus asperiores. Excepturi tenetur nostrum obcaecati inventore reiciendis quia debitis dolorum commodi. Similique, ex?</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque fugit nihil atque explicabo ab molestias odio non quos dolores? Provident iusto voluptate rem? Exercitationem, dignissimos explicabo officia nulla delectus velit.</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, omnis deleniti, maiores veritatis adipisci et magni obcaecati, ipsam perferendis ad vero quo est ratione non placeat ut! Ipsum, voluptates earum!</p>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Exercitationem maiores unde sed adipisci deserunt harum perspiciatis, consequatur expedita debitis nihil optio officiis incidunt quaerat tempora? Voluptatum voluptate quia perspiciatis fugit.</p>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi, quidem maxime ut nostrum optio blanditiis qui atque laboriosam itaque fugiat ab quam deserunt nihil natus similique aperiam fuga voluptate expedita!</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat aut, nostrum possimus, esse repellendus unde ratione ea porro debitis mollitia in dicta provident eos accusantium vitae tempore id temporibus praesentium!</p>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus molestiae aperiam illum recusandae accusantium, iusto repellat totam eaque maxime deserunt consequuntur animi obcaecati nesciunt labore! Amet fugit aspernatur nemo aliquid.</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isSticky: false,
      mobileMenuIsOpen: false,
    };
  },
  methods: {
    toggleSticky() {
      this.isSticky = !this.isSticky;
    },
    toggleMobileMenuState() {
      this.mobileMenuIsOpen = !this.mobileMenuIsOpen;
    },
  },
  computed: {
    navbarTypeText() {
      return this.isSticky ? 'sticky' : 'normal';
    },
  },
};
</script>
