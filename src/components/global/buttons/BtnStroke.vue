<script setup>
import { shallowRef } from 'vue';


const props = defineProps({
    text: {
        type: String,
        default: 'button'
    },
    padding: {
        type: String,
        default: '5px'
    },
    font_size: {
        type: String,
        default: '15px'
    },
    border_radius: {
        type: String,
        default: '10px'
    },
    border: {
        type: String,
        default: '2px solid black'
    },
    width: {
        type: String,
        default: '100px'
    }, 
    font_weight: {
        type: String,
        default: '500'
    },
    height: {
        type: String,
        default: 'white'
    },  
    color: {
        type: String,
        default: 'black'
    },  
    color_hover: {
        type: String,
        default: 'white'
    }
})

const emit = defineEmits([
    'action',
])
const hover = shallowRef(false)
</script>

<template>
    <div @click="emit('action')" @mouseenter="hover = true"
    @mouseleave="hover = false" class="box-button" :style="{padding: props.padding, borderRadius: props.border_radius, border: props.border, width: props.width, height: props.height}">
        <span class="button-body">
            <p :style="{fontSize: props.font_size, fontWeight: props.font_weight, color: hover ? props.color_hover : props.color}" >{{ props.text }}</p>
        </span>
    </div>
</template>
<style scooped>
@import '@/assets/sass/global/_buttonStroke.scss';
</style>
