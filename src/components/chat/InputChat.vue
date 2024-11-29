<script setup>
</script>

<template>
    <div class="container-form">
        <img class="clip-icon" src="@/assets/images/chat/paperclip.png" alt="">
        <form @submit.prevent="">
            <input class="input-prompt" type="text" placeholder="Envie uma mensagem para βias">
        </form>
        <button type="submit" class="submit-button">
            <img src="@/assets/images/chat/arrow-top-2.png" alt="">
        </button>
    </div>
</template>


<style scoped>
@import '@/assets/sass/chat/_input.scss';
</style>