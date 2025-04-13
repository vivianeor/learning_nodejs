///Use o módulo http para criar um servidor que:
///Responde "Hello from server!" ao acessar localhost:3000

const http = require("http");
//import http from "http";

//Cria um servidor
//A função (req, res) => {} é chamada toda vez que alguém acessa o servidor.
//Onde:
//req: representa a requisição (request) do cliente
//res: representa a resposta (response) que vamos enviar
const server = http.createServer((req, res) => {
    //Define o status HTTP (200 = OK)
    //Define o tipo de conteúdo (text/plain, ou seja, texto puro)
    res.writeHead(200, {"Content-Type": "text/plain"});
    //Envia a resposta para o navegador e finaliza a requisição.
    res.end("Hello from server!");
});

//Inicia o servidor e o faz escutar na porta 3000.
//Quando estiver pronto, exibe a mensagem no terminal.
server.listen(3000, () => {
    console.log("Servidor rodando em https://localhost:3000");
});

//localhost é um endereço especial que aponta para o seu próprio computador.
//O número 3000 é a porta onde seu servidor está escutando por conexões.