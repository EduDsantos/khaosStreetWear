const sqlite3 = require ('sqlite3').verbose();
const path = require('path');

const dbPath = path.join(__dirname, '../../bd/khaos_street.db');

console.log('Caminho correto', dbPath);

const db = new sqlite3.Database(dbPath, (err) => {
    if (err){
        console.error('Erro ao conectar com o Banco de Dados', err.message)
    } else{
        console.log('Conectado com sucesso');
    }
}
);

module.exports = db;
