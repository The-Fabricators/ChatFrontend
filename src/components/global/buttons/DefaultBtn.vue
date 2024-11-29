<template>
  <router-link :to="props.to">
    <div class="container">
      <div class="container-children">
        <span
          :style="{
            text: props.text,
            fontSize: props.fontSize,
            background: props.background,
            color: props.color,
            padding: props.padding,
            borderRadius: props.borderRadius,
            width: props.width,
            height: props.height,
          }"
        >
          {{ props.text }}
        </span>
      </div>
    </div>
  </router-link>
</template>

<script setup>
const props = defineProps({
  text: {
    type: String,
    default: 'Button',
  },
  fontSize: {
    type: String,
    default: '16px',
  },
  to: {
    type: String,
    default: '/',
    Required: true,
  },
  padding: {
    type: String,
    default: '15px 100px 15px 100px',
  },
  background: {
    type: String,
    default: 'black',
  },
  color: {
    type: String,
    default: 'white',
  },
  borderRadius: {
    type: String,
    default: '52px',
  },

  width: {
    type: String,
    default: '324.81px',
  },
  height: {
    type: String,
    default: '71px',
  },
})
</script>

<style scoped>
@import '@/assets/sass/btn.scss';
</style>
