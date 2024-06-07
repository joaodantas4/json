//pacote que faz ler o arquivo
const fs = require('fs');

fs.readFile('tenis.json', 'utf8', (error, data) => {
    if (error){
        console.error('Erro ao ler o arquivo', error)
        return
        
    } 
    
    let json = JSON.parse(data)
        
    const novotenis = {
        nome: "AllStar", 
        cor: "preto"
    }

    json.tenis.push(novaFruta);

    const novoJson = JSON.stringify(json, null, 2);

    fs.writeFile('tenis.json', novoJson, 'utf8', (erro) => {
        if (error){
            console.error('Erro ao ler o arquivo', error)
            return
        }
        console.log('Dados atualizados com sucesso!')
    })

})