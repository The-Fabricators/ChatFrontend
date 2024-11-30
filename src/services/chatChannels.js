import api from "@/plugins/api";

class ChatChannel {
    async getChatChannels() {
        try {
            const { data } = await api.get('/chats/');
            return data;
        } catch(error) {
            console.error('Error in GET Chats: ', error);
            return false;
        }
    };
};

export default new ChatChannel();