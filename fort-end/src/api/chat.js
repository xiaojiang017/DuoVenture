import axios from 'axios';
const axiosInstance = axios.create({
    timeout: 200000,
    headers: { 'Authorization': 'Bearer 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' }
});
export const chatApi = async (data) => {
   return await axiosInstance.post('https://api.openai-proxy.com/v1/chat/completions' , {
	"model": "gpt-3.5-turbo",
    "temperature": 0.2,
	// "stream": true,
	"messages": data
}).then((res) => {
       return res
    }).catch((err) => {
        return err
    })
}