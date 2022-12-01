<!-- como rodar o projeto baixado -->
<!-- comando para instalar todas as dependências inicializadas pelo package.json -->
###  npm install

<!-- rodar o projeto -->
<!-- nome da pasta e nome do arquivo raiz(app.js) -->
### node app.js

<!-- Sequencia para criar o PROJETO -->
<!-- criar o arquivo package -->
### npm init

<!-- Gerencia as requisições, rotas e URLs, entre as funcionalidades -->
### npm install express

<!-- acessar o projeto no navegador -->
### http://localhost:8081

<!-- instalar o módulo para reiniciar o servidor sempe que houver alteração no código fonte, g significa globalmente -->
### npm install -g nodemon

<!-- rodar o projeto com o nodemon -->
<!-- nodemon e arquivo raiz(app.js) -->
### nodemon app.js

<!-- O QUE É UMA API -->
<!-- é um software que pode compartilhar informações(receber requisições), pode ser um site ou servidor pedindo requisições para a API. A API processa as requisições confee no banco de dados e retorna a informação para o cliente-->

<!-- PRINCIPAIS REQUISIÇÕES DA API -->
<!-- POST-CRIAR
     significa que o  usuário deseja cadastrar um novo registro -->
<!-- GET-VISUALIZAR
     visualizarou listar o cadastro -->
<!-- PUT-EDITAR
     quando o usuário deseja editar o registro -->
<!-- DELETE-DELETAR
     quando o usuário deseja apaga um registro -->

<!-- INSOMNIA -->
<!-- serve para simular uma requisição para nossa aplicação -->

<!-- solicitar uma requisição do tipo GET para mostrar os contatos -->
### http://localhost:8081/Contatos

<!-- solicitar uma requisição com id -->
### http://localhost:8081/Contatos/3

<!-- solicitar uma requisição com uma variável -->
### http://localhost:8081/Contatos/3?sit=ativo

<!-- otimizar o acesso da URL no insomnia -->
### "URL": "http://localhost:8081 "

<!-- MIDDLEWARES -->
<!-- é uma instrução que é executada antes das outras instruções -->

<!-- INSTALAR O BANCO DE DADOS MYSQL -->

<!-- verificar o banco de dados MYSQL no cmd -->
### mysql -h localhost -u root -p

<!-- Instalar o Workbench para gerenciar o banco de dados de forma gráfica -->

<!-- COMANDOS BÁSICOS DO MYSQL -->
<!-- criar a base de dados -->
### create database celke character set utf8mb4 collate utf8mb4_unicode_ci;

<!-- criar a tabela -->
### create table `users` (
### `id` int not null auto_increment,
### `name` varchar(220) collate utf8mb4_unicode_ci default null,
### `email` varchar(220) collate utf8mb4_unicode_ci default null,
### primary key(`id`)
### )engine=innoDB default charset=utf8mb4 collate=utf8mb4_unicode_ci;

<!-- Selecionar regitro no banco de dados -->
### select id, name, email from users;

<!-- Inserir valores na tabela -->
### insert into users(name, email) values(
### 'Hyv3', 'hyv3@gmail.com'
### );

<!-- Limitar a quantidade de resgistros selecionados no banco de dados -->
### select id, name, email from users limit 3;

<!-- Limitar a quantidade de resgistros selecionado no banco de dados e indicar o inicio -->
### select id, name, email from users limit 2 offset 4;
EXEMPLO
pg 1 = 1,2
pg 2 = 3,4
pg 3 = 5,6

<!-- Acrescentar condição na busca de registros -->
### select id, name, email from users where email = 'hyv3@gmail.com' limit 1;

<!-- Acrescentar mais uma condição na busca de registros -->
### select id, name, email from users where email = 'hyv3@gmail.com' and name = 'Hyv3'limit 1;
### select id, name, email from users where email = 'hyv3@gmail.com' or name = 'Hyv3'limit 1;

<!-- Ordernar os registros do banco de dados -->
### select id, name, email from users order by id asc;
### select id, name, email from users order by id desc;

<!-- Editar registros do banco de dados -->
### ### select id, name, email from users order by id asc;

<!-- Deletar registros -->
### delete from users where id = 7;

<!-- COMANDO PARA INSTALAR O SEQUELIZE -->
<!-- O seqquelize é um bibilhoteca js que facilita o gerenciamento de um banco de dados sql -->
### npm install --save sequelize

<!-- Instalar o drive do banco de dados -->
### npm install --save mysql2