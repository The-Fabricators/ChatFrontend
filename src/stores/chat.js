import { ref } from "vue";
import { defineStore } from "pinia";
import ChatChannels from "@/services/chatChannels";

export const useChatStore = defineStore('chat', () => {
    const messages = ref([])
    const chatChannels = ref([]);
    const getChatChannels = async () => {
        const data = await ChatChannels.getChatChannels();
        console.log(data);
    };
    const connectWb = () => {
        const socket = new WebSocket('ws://localhost:8000/ws/chatroom/');
        console.log(socket);
    };

    async function sendMessage(message) {
        try {
            messages.value.push(message);
            const index = messages.value.indexOf(message);
            const data = await (message);
            messages.value[index].output = data.output;
            console.log(data);
        } catch (error) {
            console.log(error);
        }
    }

    return { chatChannels, getChatChannels, connectWb, messages, sendMessage };
});