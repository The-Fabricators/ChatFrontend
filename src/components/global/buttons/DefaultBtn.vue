<template>
  <router-link :to="props.to">
    <div @mouseenter="hover = true" @mouseleave="hover = false" class="container">
      <span
        :style="{
          text: props.text,
          fontSize: props.fontSize,
          background: hover ? props.backgroundHover : props.background,
          padding: props.padding,
          borderRadius: props.borderRadius,
          color: hover ? props.colorHover : props.color,
          width: props.width,
          height: props.height,
          cursor: props.cursor,
          border: hover ? props.borderHover : props.border
        }"
      >
        {{ props.text }}
      </span>
      <span class="line"></span>
    </div>
  </router-link>
</template>

<script setup>
import { shallowRef } from 'vue'

const hover = shallowRef(false)

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
    default: '7A1F40',
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
  colorHover: {
    type: String,
    default: 'black',
  },
  backgroundHover: {
    type: String,
    default: 'white',
  },
  cursor: {
    type: String,
    default: 'pointer',
  },
  borderHover: {
    type: String,
    default: '2px solid black',
  },
  border: {
    type: String,
    default: '2px solid black',
  }
})
</script>

<style scoped>
@import '@/assets/sass/btn.scss';
</style>
