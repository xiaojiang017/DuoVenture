var express = require('express');
var router = express.Router();
const { Configuration, OpenAIApi } = require("openai");

const OPENAI_API_KEY = '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'
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);
router.post('/', async function (req, res, next) {
    const completion = await openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: [{"role": "system", "content": "You are a helpful assistant."}, {role: "user", content: "Hello world"}],
      });
      console.log(completion.data.choices[0].message)
      res.send({
        projectList: completion.data.choices[0].message
      });
});

module.exports = router;