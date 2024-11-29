import { defineStore } from 'pinia';

export const useTemplateStore = defineStore('template', () => {
    const iasTypes = [
        {
            Text:'Ciências Naturais',
            Icon:'src/assets/images/header/natural-sciences.png'
        },
        {
            Text:'Linguagens',
            Icon:'src/assets/images/header/writer.png'
        },
        {
            Text:'Redação',
            Icon:'src/assets/images/header/reader.png'
        },
        {
            Text:'Matemática',
            Icon:'src/assets/images/header/mathematics.png'
        },
        {
            Text:'Ciências Humanas',
            Icon:'src/assets/images/header/human-sciences.png'
        }
    ]

  return {
    iasTypes
  }
});
