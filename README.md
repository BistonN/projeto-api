# Relatorios Projeto API    

Arquivo referente as atualizações do Projeto de API no Curso de BigData no Agronegócio
  - João V. Biston Nunes
  - Gabriel Santos
  - Adriano Rordriguez
  - Yuri borrasca
  - Paulo Okuda
  
#### Instalação:
Para criar um container com a imagem do banco mariadb:
```sh 
docker run -p 3306:3306 --name projeto-api -e MYSQL_ROOT_PASSWORD=root -d mariadb:10.1.43
```
Para instalar as dependencias do projeto e rodar:
```sh
npm install
npm start
```

#### Atualizações 27/10:
Após a ultima aula, foi definido pelo grupo a arquitetura do projeto que consiste nas seguintes tecnologias:
  - FrontEnd: Angular
  - API: NodeJS
  - Banco de Dados: MariaDB
 
Então no dia 27/10 começou-se a preparar o ambiente de desenvolvimento e foi criado o banco de dados segundo a modelagem abaixo, a estrutura do projeto de API conforme o [commit inicial](https://github.com/BistonN/projeto-api/commit/5f517bfd50e5d8a25ec05152cc633b6078d100ef) e a conexão do projeto como banco de dados.

![](./imagens/modelagem.png)

Após isso foi realizado um teste criando uma rota de 'produtos' com um end-point 'teste' que executava uma query que apenas mostrasse as tabelas do banco de dados, afim de verificar se a conexão com o banco havia sido realizada

![](./imagens/postman.png)


