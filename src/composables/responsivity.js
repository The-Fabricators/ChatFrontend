import { ref, computed, onMounted, onUnmounted } from "vue"

export const useResponsivity = () => {
    const width = ref(window.innerWidth);
    const height = ref(window.innerHeight);

    const updateSize = () => {
        width.value = window.innerWidth;
        height.value = window.innerHeight;
    };

    const currentSize = computed(() => {
        return (width.value) < 768 ? 'mobile' : 'desktop';
    });

    onMounted(() => {
        window.addEventListener('resize', updateSize);
    });

    onUnmounted(() => {
        window.removeEventListener('resize', updateSize);
    });

    return currentSize;
};