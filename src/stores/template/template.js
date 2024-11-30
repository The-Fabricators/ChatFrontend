import { defineStore } from 'pinia';
import { human_science, mathematics, reader, natural, writer } from '@/assets/images';

export const useTemplateStore = defineStore('template', () => {
    const iasTypes = [
        {
            Text:'Ciências Naturais',
            Icon: natural,
            Path: '/chat/nature/'
        },
        {
            Text:'Linguagens',
            Icon: reader,
            Path: '/chat/languages/'
        },
        {
            Text:'Redação',
            Icon: writer,
            Path: '/chat/redaction/'
        },
        {
            Text:'Matemática',
            Icon: mathematics,
            Path: '/chat/math/'
        },
        {
            Text:'Ciências Humanas',
            Icon: human_science,
             Path: '/chat/humans/'
        }
    ]

  return {
    iasTypes
  }
});
