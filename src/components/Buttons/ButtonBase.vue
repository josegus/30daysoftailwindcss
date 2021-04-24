<template>
    <button
      type="button"
      class="text-white rounded"
      :class="extraClass"
      :disabled="isDisabled"
    >
      <slot>Button</slot>
    </button>
</template>

<script>
export default {
  props: {
    size: {
      type: String,
      required: false,
      default: 'normal',
    },
    isDisabled: {
      type: Boolean,
      required: false,
      default: false,
    },
    buttonType: {
      type: String,
      required: false,
      default: 'primary',
    },
  },
  data() {
    return {
      buttonTypeClass: {
        primary: {
          backgroundColor: 'red',
          default: 500,
          hover: 600,
        },
        secondary: {
          backgroundColor: 'yellow',
          default: 400,
          hover: 500,
        },
        alternative: {
          backgroundColor: 'green',
          default: 500,
          hover: 600,
        },
      },
    };
  },
  methods: {
    buildButtonTypeClass(type) {
      const button = this.buttonTypeClass[type];

      let classes = `bg-${button.backgroundColor}-${button.default}`;

      if (!this.isDisabled) {
        classes += ` hover:bg-${button.backgroundColor}-${button.hover} transition duration-200`;
      }

      return classes;
    },
  },
  computed: {
    typeClass() {
      let extraClass = this.buildButtonTypeClass('primary');

      switch (this.buttonType) {
        case 'primary':
          break;
        case 'secondary':
          extraClass = this.buildButtonTypeClass('secondary');
          break;
        case 'alternative':
          extraClass = this.buildButtonTypeClass('alternative');
          break;
        default:
          break;
      }

      return extraClass;
    },
    sizeClass() {
      let extraClass = '';

      switch (this.size) {
        case 'lg':
          extraClass = 'px-4 py-3 text-base';
          break;
        case 'base':
          extraClass = 'px-3 py-2 text-sm';
          break;
        case 'sm':
          extraClass = 'px-3 py-2 text-xs';
          break;
        default:
          extraClass = 'px-3 py-2 text-sm';
      }

      return extraClass;
    },
    disabledClass() {
      return this.isDisabled
        ? 'disabled:opacity-70 cursor-not-allowed'
        : '';
    },
    extraClass() {
      return `${this.typeClass} ${this.sizeClass} ${this.disabledClass}`.trim();
    },
  },
};
</script>
