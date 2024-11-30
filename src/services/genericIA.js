import axios from "axios"

class GenericAIService {
    async postMessage(message) {
        try {
            const response = await axios.post('http://191.52.56.92:8000/classify_message/', message)
            return response
        }catch(error){
            console.log(error)  
        }
    }
}


export default new GenericAIService()