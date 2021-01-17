# desafiogm
 Desafio fornecido pela empresa Greenmile

Inicialmente é importante garantir que todas as dependências do node estejam instaladas

No terminal, dentro do diretório do projeto (desafiogm) utilizar o seguinte comando:
- npm i

Após isso, vá para o diretório server, dentro dele há um arquivo chamado de server.js, serve para hospedar a aplicação localmente (porta 3000). No diretório server digite o seguinte comando no terminal:
- node server.js

Volte ao diretório anterior (desafiogm), digite o seguinte comando para iniciar o cypress:

-npx cypress open // Há outras opções (npm run open)

Na interface do cypress irá aparecer o teste "desafio.spec.js"


Observações importantes: Estou rodando localmente a aplicação de teste, pois o cypress apresentava problemas para utilizar o site do codepen e a biblioteca hammer.js, fiz um servidor simples que pega o arquivo page.js (este arquivo contém todo o código do objeto de teste, mas a pasta ainda contém arquivos separados).
A aplicação está marcada para rodar na porta 3000, caso a porta já esteja sendo utilizada é preciso modificar a url em desafiogm/cypress/components/desafio.spec.js e a porta no arquivo server em desafiogm/server/server.js