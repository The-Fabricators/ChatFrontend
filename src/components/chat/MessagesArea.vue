<script setup>
<<<<<<< HEAD
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { whichColor, whichColorAndWidth, whichLogoResponseAi } from '@/utils';

const route = useRoute();
const colors = ref({});

onMounted(() => {
    colors.value = whichColor(route);
    console.log(colors.value); 
})
=======
import { useRoute } from 'vue-router';
import { whichColor } from '@/utils';

const route = useRoute();
>>>>>>> 24182d0 (FEAT: Create area messages #43)
</script>

<template>
  <div class="container-father-messages">
    <div class="container-day-messages">
        <h2 class="day">29 de Novembro</h2>
        <div class="container-messages">
<<<<<<< HEAD
            <div class="container-father-my-message">
                <div class="container-my-message" :style="colors.user">
                    <p>Artigos científicos sobre redação</p>
                </div>
            </div>
            <div class="container-father-ai-message">
                <div class="container-ai-typing" :style="colors.aiTyping">
                    <p>...</p>
                </div>
                <!-- <div class="container-ai-message">
                    <img :src="whichLogoResponseAi(route)" alt="">
                    <div class="ai-message">
                        <p>Artigos científicos sobre redação são bastante diversos, pois podem abordar temas como técnicas de escrita, redação acadêmica, criatividade na escrita, processos de revisão, entre outros. Para te ajudar, vou sugerir alguns temas e formas de buscar artigos:
                        <strong>Principais temas relacionados à redação: </strong>
                        </p>
                        <ol>
                            <li>Redação acadêmica: 
                            </li>
                        </ol>
                        <ul>
                            <li>Técnicas de escrita científica.</li>
                            <li>Estruturação de textos (introdução, desenvolvimento, conclusão)</li>
                            <li>Normas e padronizações (ex.: ABNT, APA).</li>
                        </ul>
                    </div>
                </div> -->
=======
            <div class="container-my-message" :style="whichColor(route)">
                <p>Artigos científicos sobre redação</p>
>>>>>>> 24182d0 (FEAT: Create area messages #43)
            </div>
        </div>
    </div>
  </div>
</template>

<style scoped>
@import '@/assets/sass/chat/_messages.scss';
</style>