# LeapNode
Repositório organizado para o projeto de interpretação de linguagem de sinal por meio do sensor Leap Motion e a plataforma Node.js

Este README precisa ser atualizado.

Antes de fazer deploy da aplicação, defina as variaveis de ambiente de forma a corresponderem as propriedades do objeto production no arquivo ./config/environment.js

Para instalação, não esqueça de instalar Node.js e MongoDB e aplicar os seguintes comandos no terminal estando no diretório raiz do projeto:

npm install -g bower && npm install && bower install

Para executar a aplicação para testes entre o seguinte comando no terminal enquanto no diretório raiz do projeto:

node server.js

Futuramente será programado testes unitários e fim-a-fim de modo que possa executar o comando de teste do Node.js

Para executar a aplicação para uso, não esqueça de setar a variavel de ambiente NODE_ENV para "production" antes de entrar o comando acima.