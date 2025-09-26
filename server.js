import express from "express";
import ClientGemini from "./client.js";

const app = express();
const port = 3000;

app.get("/", async(req, res) => {
  try {
    const response = await ClientGemini("quem é voce? qual sua utilidade?");
    res.send(`
<html>
<head>
    <title>Document</title>
</head>

<body style = "font-family: sans-serif";>
    <h1>Resposta do Gemini</h1>
    <p>${response}</p>
</body>
</html>`);
  } catch (error) {
    console.log(error);
  }
});
app.listen(port, () => {
  console.log(`Servidor rodado em http://localhost:${port}`);
});
