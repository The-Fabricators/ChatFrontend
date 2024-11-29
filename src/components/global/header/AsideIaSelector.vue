<script setup>
import { ref } from "vue";

const showMenu = ref(false) // Variavel para esconder/mostrar o aside

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

</script>

<template>
    <div class="icon" @click="showMenu = !showMenu">
        <img src="@/assets/images/header/widget.png" alt="menu">
    </div>
    <div class="background" :class="showMenu ? 'active' : 'disable'">
        <!-- O elemento recebe a classe 'active' ou 'disable' baseado no valor de showMenu -->
        <div class="aside"> 
            <div class="icon close-icon" @click="showMenu = !showMenu">
                <img src="@/assets/images/header/closeX.png" alt="X">
            </div>
            <div class="user-image">
                vinyescolas@gmail.com
            </div>
            <div class="ias-list">
                <ul>
                    <li class="ia-item" v-for="item in iasTypes" :key="item.Text">
                        <img :src="item.Icon" alt="">{{item.Text}}
                    </li>
                </ul>
            </div>
            <div class="logout-button">
                <button><img src="@/assets/images/header/log-out.png" alt="">Log Out</button>
            </div>
        </div>
    </div>
</template>

<style scoped>
    @import '@/assets/sass/global/_asideIaSelector.scss';
</style>