var express = require('express');
var router = express.Router();

const axios = require('axios');


const apiKey = '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'; // 替换为你的ChatGPT API密钥
const apiEndpoint = 'https://api.chatgpt.com/completion/v1';

router.post('/chat', async (req, res) => {
    const userInput = req.body.userInput;
    try {
        const response = await axios.post(apiEndpoint, {
            model: "gpt-3.5-turbo",
            messages: [{ role: "user", content: userInput}],
            max_tokens: 50,
            temperature: 0.7,
            // 其他参数
        }, {
            headers: {
                Authorization: `Bearer ${apiKey}` // 在请求头中包含API密钥
            }
        });

        const generatedText = response.data.choices[0].text.trim();
        res.json({ reply: generatedText });
    } catch (error) {
        console.error('ChatGPT请求错误:', error);
        res.status(500).json({ error: error });
    }
});

module.exports = router;
