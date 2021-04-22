<template>
  <div class="space-y-4">
    <!-- primary -->
    <div>
      <h2 class="text-xl font-bold">Primary</h2>

      <div class="mt-2">
        <h3 class="font-bold">Normal</h3>
        <ButtonBase type="primary" size="sm">Small</ButtonBase>
        <ButtonBase type="primary" class="ml-2" size="base">Default</ButtonBase>
        <ButtonBase type="primary" class="ml-2" size="lg">Large</ButtonBase>
      </div>

      <div class="mt-2">
        <h2 class="font-bold">Disabled</h2>
        <ButtonBase :is-disabled="true" type="primary" size="sm">Small</ButtonBase>
        <ButtonBase :is-disabled="true" type="primary" class="ml-2" size="base">Default</ButtonBase>
        <ButtonBase :is-disabled="true" type="primary" class="ml-2" size="lg">Large</ButtonBase>
      </div>
    </div>

    <!-- secondary -->
    <div>
      <h2 class="text-xl font-bold">Secondary</h2>

      <div class="mt-2">
        <h2 class="font-bold">Normal</h2>
        <ButtonBase type="secondary" size="sm">Small</ButtonBase>
        <ButtonBase type="secondary" class="ml-2" size="base">Default</ButtonBase>
        <ButtonBase type="secondary" class="ml-2" size="lg">Large</ButtonBase>
      </div>

      <div class="mt-2">
        <h2 class="font-bold">Normal</h2>
        <ButtonBase :is-disabled="true" type="secondary" size="sm">Small</ButtonBase>
        <ButtonBase :is-disabled="true" type="secondary" class="ml-2" size="base">Default</ButtonBase>
        <ButtonBase :is-disabled="true" type="secondary" class="ml-2" size="lg">Large</ButtonBase>
      </div>
    </div>

    <!-- alternative -->
    <div>
      <h2 class="text-xl font-bold">Alternative</h2>

      <div class="mt-2">
        <h2 class="font-bold">Normal</h2>
        <ButtonBase type="alternative" size="sm">Small</ButtonBase>
        <ButtonBase type="alternative" class="ml-2" size="base">Default</ButtonBase>
        <ButtonBase type="alternative" class="ml-2" size="lg">Large</ButtonBase>
      </div>

      <div>
        <h2 class="font-bold">Disabled</h2>
        <ButtonBase :is-disabled="true" type="alternative" size="sm">Small</ButtonBase>
        <ButtonBase :is-disabled="true" type="alternative" class="ml-2" size="base">Default</ButtonBase>
        <ButtonBase :is-disabled="true" type="alternative" class="ml-2" size="lg">Large</ButtonBase>
      </div>
    </div>
  </div>
</template>

<script>
import ButtonBase from '@/components/Buttons/ButtonBase.vue';

export default {
  components: {
    ButtonBase,
  },
};
</script>
