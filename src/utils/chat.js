export const whichText = (route) => {
    return (route.path == '/chat/') ? 'Geral' : (route.path == '/chat/redaction/') ? 'Redação' : (route.path == '/chat/math/') ? 'Matemática' : (route.path == '/chat/humans/') ? 'Ciências Humanas' : (route.path == '/chat/nature/') ? 'Ciências Naturais' : (route.path == '/chat/languages/') ? 'Linguagens' : 'Planos Mensais'
};

export const whichColor = (route) => {
    return (route.path == '/chat/') ? 'background-color: #DCDCDC; color: #000;' : (route.path == '/chat/redaction/') ? 'background-color: #B89E35; color: #FDFDFD;' : (route.path == '/chat/math/') ? 'background-color: #7A1F40; color: #FDFDFD;' : (route.path == '/chat/humans/') ? 'background-color: #343275; color: #FDFDFD; width: 165px;' : (route.path == '/chat/nature/') ? 'background-color: #1D6828; color: #FDFDFD; width: 165px;' : (route.path == '/chat/languages/') ? 'background-color: #A32287; color: #FDFDFD;' : 'background-color: #DCDCDC; color: #000; width: 165px;'
};

export const createUrl = (path) => {
    const url = new URL(path.replace('@', '/src'), import.meta.url).href;
    return url;
};

export const getPathsAndTexts = (pathRoute) => {
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

    return (pathRoute == '/chat/') ? { paths: paths[0].general, texts: texts[0].general } : (pathRoute == '/chat/redaction/') ? { paths: paths[0].redaction, texts: texts[0].redaction } : (pathRoute == '/chat/math/') ? { paths: paths[0].math, texts: texts[0].math } : (pathRoute == '/chat/nature/') ? { paths: paths[0].nature, texts: texts[0].nature } : (pathRoute == '/chat/humans/') ? { paths: paths[0].humans, texts: texts[0].humans } : { paths: paths[0].languages, texts: texts[0].languages }
}