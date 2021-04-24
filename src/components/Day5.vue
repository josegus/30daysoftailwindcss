<template>
  <div class="space-y-4">
    <div class="flex justify-center flex-col md:w-1/3 w-full mx-auto border border-gray-400 rounded p-4">
      <h2 class="font-bold text-xl">Registration form</h2>
      <form @submit.prevent="submit()" class="w-full mt-2 space-y-2" action="#">
        <div>
          <label class="w-full">Name *</label>
          <input class="w-full rounded" type="text" placeholder="John Doe">
          <FormHelpBlock>This value will be used for invoice</FormHelpBlock>
        </div>

        <div>
          <label class="w-full">Description *</label>
          <textarea class="w-full rounded" cols="30" rows="2" placeholder="Max 300 chars"></textarea>
        </div>

        <div>
          <ButtonBase @click.native="upload()" size="sm" button-type="secondary">
            <div v-if="isUploading" class="flex items-center">
              <svg class="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              <span class="ml-2">
                Uploading..
              </span>
            </div>
            <div v-else class="flex items-center">
              <svg class="w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"></path></svg>
              <span class="ml-2">
                Upload avatar
              </span>
            </div>
          </ButtonBase>
        </div>

        <div>
          <label class="inline-flex items-center mt-4">
            <input type="checkbox" checked="">
            <span class="ml-2">I accept the terms & conditions</span>
          </label>
        </div>

        <div>
          <ButtonBase size="sm" button-type="alternative">
            <div class="flex items-center">
              <svg class="w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
              <span class="ml-2">
                Download terms & conditions
              </span>
            </div>
          </ButtonBase>
        </div>

        <div>
          <ButtonBase type="submit" class="w-full mt-4">Submit</ButtonBase>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import FormHelpBlock from '@/components/FormHelpBlock.vue';
import ButtonBase from '@/components/Buttons/ButtonBase.vue';

export default {
  components: {
    ButtonBase,
    FormHelpBlock,
  },
  data() {
    return {
      isUploading: false,
    };
  },
  methods: {
    upload() {
      this.isUploading = true;
    },
    submit() {
      alert('Registration completed!');
    },
  },
};
</script>
