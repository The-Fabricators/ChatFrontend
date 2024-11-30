import { useRoute } from "vue-router";
import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useStaticDetailsStore = defineStore('staticDetails', () => {
    const route = useRoute();

    const whichText = computed(() => {
        return (route.path == '/chat/') ? 'Geral' : (route.path == '/chat/redaction/') ? 'Redação' : (route.path == '/chat/math/') ? 'Matemática' : (route.path == '/chat/humans/') ? 'Ciências Humanas' : (route.path == '/chat/nature/') ? 'Ciências Naturais' : (route.path == '/chat/languages/') ? 'Linguagens' : 'Planos Mensais';
    });

    const whichColor = computed(() => {
        return (route.path == '/chat/') ? {user: 'background-color: #DCDCDC; color: #000;', aiTyping: 'background-color: rgba(220, 220, 220, 0.5); color: #000;'} : (route.path == '/chat/redaction/') ? {user: 'background-color: #B89E35; color: #FDFDFD;', aiTyping: 'background-color: rgba(184, 158, 53, 0.5); color: #FDFDFD;'} : (route.path == '/chat/math/') ? {user: 'background-color: #7A1F40; color: #FDFDFD;', aiTyping: 'background-color: rgba(122, 31, 64, 0.5); color: #FDFDFD;'} : (route.path == '/chat/humans/') ? {user: 'background-color: #343275; color: #FDFDFD', aiTyping: 'background-color: rgba(52, 50, 117, 0.5); color: #FDFDFD;'} : (route.path == '/chat/nature/') ? {user: 'background-color: #1D6828; color: #FDFDFD;', aiTyping: 'background-color: rgba(29, 104, 40, 0.5); color: #FDFDFD;'} : (route.path == '/chat/languages/') ? {user: 'background-color: #A32287; color: #FDFDFD;', aiTyping: 'background-color: rgba(163, 34, 135, 0.5); color: #FDFDFD;'} : {user: 'background-color: #DCDCDC; color: #000;', aiTyping: 'background-color: rgba(220, 220, 220, 0.5); color: #000;'};
    });

    const whichColorAndWidth = computed(() => {
        return (route.path == '/chat/') ? 'background-color: #DCDCDC; color: #000;' : (route.path == '/chat/redaction/') ? 'background-color: #B89E35; color: #FDFDFD;' : (route.path == '/chat/math/') ? 'background-color: #7A1F40; color: #FDFDFD;' : (route.path == '/chat/humans/') ? 'background-color: #343275; color: #FDFDFD;' : (route.path == '/chat/nature/') ? 'background-color: #1D6828; color: #FDFDFD;' : (route.path == '/chat/languages/') ? 'background-color: #A32287; color: #FDFDFD;' : 'background-color: #DCDCDC; color: #000;';
    });

    const getPathsAndTexts = computed(() => {
        const paths = [{
            general: ['@/assets/images/chat/docs.png', '@/assets/images/chat/picture.png', '@/assets/images/chat/graduation.png', '@/assets/images/chat/docs.png'],
            redaction: ['@/assets/images/chat/docs.png', '@/assets/images/chat/picture.png', '@/assets/images/chat/graduation.png', '@/assets/images/chat/docs.png'],
            math: ['@/assets/images/chat/calc.png', '@/assets/images/chat/picture.png', '@/assets/images/chat/graduation.png', '@/assets/images/chat/docs.png'],
            humans: ['@/assets/images/chat/people.png', '@/assets/images/chat/feather.png', '@/assets/images/chat/graduation.png', '@/assets/images/chat/docs.png'],
            nature: ['@/assets/images/chat/calc.png', '@/assets/images/chat/fisic.png', '@/assets/images/chat/graduation.png', '@/assets/images/chat/science.png'],
            languages: ['@/assets/images/chat/languages.png', '@/assets/images/chat/book.png', '@/assets/images/chat/graduation.png', '@/assets/images/chat/languages.png'],
        }];
    
        const texts = [{
            general: ['Resumir texto', 'Analisar imagens', 'Aconselhar', 'Artigos científicos'],
            redaction: ['Repertórios', 'Analisar imagens', 'Aconselhar', 'Artigos científicos'],
            math: ['Equações', 'Analisar imagens', 'Aconselhar', 'Artigos científicos'],
            humans: ['Sociologia', 'Filósofos e escritores', 'Aconselhar', 'Artigos científicos'],
            nature: ['Equações', 'Física', 'Aconselhar', 'Química orgânica'],
            languages: ['Português', 'Movimentos Literários', 'Aconselhar', 'Lingua Estrangeira'],
        }]
    
        return (route.path == '/chat/') ? { paths: paths[0].general, texts: texts[0].general } : (route.path == '/chat/redaction/') ? { paths: paths[0].redaction, texts: texts[0].redaction } : (route.path == '/chat/math/') ? { paths: paths[0].math, texts: texts[0].math } : (route.path == '/chat/nature/') ? { paths: paths[0].nature, texts: texts[0].nature } : (route.path == '/chat/humans/') ? { paths: paths[0].humans, texts: texts[0].humans } : { paths: paths[0].languages, texts: texts[0].languages }
    });

    const whichLogoResponseAi = computed(() => {
        const pathImg = (route.path == '/chat/') ? '@/assets/images/chat/ai-general.svg' : (route.path == '/chat/redaction/') ? '@/assets/images/chat/ai-redaction.svg' : (route.path == '/chat/languages/') ? '@/assets/images/chat/ai-languages.svg' : (route.path == '/chat/humans/') ? '@/assets/images/chat/ai-humans.svg' : (route.path == '/chat/nature/') ? '@/assets/images/chat/ai-nature.svg' : '@/assets/images/chat/ai-math.svg';

        const url = new URL(pathImg.replace('@', '/src'), import.meta.url).href;
        return url;
    })

    return { whichText, whichColor, whichColorAndWidth, getPathsAndTexts, whichLogoResponseAi };
});