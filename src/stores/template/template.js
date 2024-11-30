import { defineStore } from 'pinia';
import { human_science, mathematics, reader, natural, writer } from '@/assets/images';

export const useTemplateStore = defineStore('template', () => {
    const iasTypes = [
        {
            Text:'Ciências Naturais',
            Icon: natural
        },
        {
            Text:'Linguagens',
            Icon: reader
        },
        {
            Text:'Redação',
            Icon: writer
        },
        {
            Text:'Matemática',
            Icon: mathematics
        },
        {
            Text:'Ciências Humanas',
            Icon: human_science
        }
    ]

  return {
    iasTypes
  }
});
