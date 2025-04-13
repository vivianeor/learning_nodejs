///Use o módulo fs para:
///Ler um arquivo input.txt
///Criar um novo arquivo output.txt com o conteúdo em maiúsculas

//const fs = require("fs");, -> outra forma de fazer o import
import { readFile, writeFile } from "fs";

//Lê o conteúdo do input.txt
readFile("input.txt", "utf8", (err, data) => {
    //se houver erro retorna a mensagem de erro no prompt
    if (err) {
        console.error("Erro ao ler o arquivo: ", err);
        return;
    }
    
    // Transforma em maiúsculas
    const upperContent = data.toUpperCase();

    // Escreve no output.txt
    writeFile("output.txt", upperContent, (err) => {
        if (err) {
            console.error("Erro ao escrever o arquivo: ", err);
            return;
        }
        console.log("Arquivo salvo como output.txt");
    });
});