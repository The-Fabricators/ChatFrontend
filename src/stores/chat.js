import { ref } from "vue";
import { defineStore } from "pinia";
import ChatChannels from "@/services/chatChannels";

export const useChatStore = defineStore('chat', () => {
    const chatChannels = ref([]);
    const getChatChannels = async () => {
        const data = await ChatChannels.getChatChannels();
        console.log(data);
    };
    const connectWb = () => {
        const socket = new WebSocket('ws://localhost:8000/ws/chatroom/');
        console.log(socket);
    };

    return { chatChannels, getChatChannels, connectWb };
});