import axios from 'axios';
const axiosInstance = axios.create({
    timeout: 200000,
    headers: { 'Authorization': 'Bearer  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' }
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