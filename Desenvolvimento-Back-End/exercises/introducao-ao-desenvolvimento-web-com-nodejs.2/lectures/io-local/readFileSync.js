const fileSystem = require('fs');

const nomeDoArquivo = 'meu-arquivo.txt';

try {
  const data = fileSystem.readFileSync(nomeDoArquivo, 'utf8');
  console.log(data);
} catch (err) {
  console.error(`Erro ao ler o arquivo: ${err.path}`);
  console.log(err);
}