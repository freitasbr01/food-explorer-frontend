<h2 align="center">Food Explorer</h2>

<h1 align="center">
    <img width="600px" alt="Food Explorer" title="#Food Explorer" src="https://github.com/freitasbr01/food-explorer-frontend/blob/main/src/assets/food-explorer.png" />
</h1>


<p align="center">
 <a href="#-sobre-o-projeto">Sobre</a> •
 <a href="#-tecnologias">Tecnologias</a> • 
 <a href="#-como-rodar-o-projeto">Como Rodar o Projeto</a> •
 <a href="#-autor">Autor</a>
</p>

## 💻 Sobre o projeto

Este projeto é uma aplicação web de restaurante virtual desenvolvida para gerenciar e exibir pratos de um restaurante de forma eficiente e intuitiva. A plataforma oferece uma experiência diferenciada para dois tipos de usuários: admin e customer.

Admin: Tem acesso a funcionalidades avançadas, como a criação e edição de pratos. Pode gerenciar o menu do restaurante, atualizando informações e mantendo o catálogo de pratos sempre atualizado.

Customer: Tem acesso à página inicial, onde pode visualizar todos os pratos disponíveis, e à página de detalhes de cada prato. Os clientes podem adicionar múltiplas quantidades do mesmo prato ao seu pedido, com um contador integrado para gerenciar a quantidade de itens selecionados.

A aplicação inclui um sistema de pedidos que contabiliza os pratos selecionados e os exibe em uma página dedicada. Para garantir a segurança e a personalização da experiência do usuário, foram utilizados cookies para autenticação e um verificador de autorização para assegurar que apenas usuários com as permissões adequadas possam acessar funcionalidades específicas.

Link de acesso - <a href="https://food-explorer01.netlify.app">Food Explorer</a>

---

## 🛠 Tecnologias

As seguintes ferramentas foram usadas na construção do projeto:

- **HTML**
- **CSS**
- **JavaScript**
- **React.js**
- **Styled-Components**
- **Vite**
- **Git**

---

## 🚀 Como Rodar o Front-end e Back-end?

### 1. Clone o repositório
Abra o terminal e execute o comando abaixo para clonar o repositório na sua máquina:

```bash
git clone https://github.com/usuario/nome-do-repositorio.git
```


### 2. Acesse o diretório do projeto
Entre na pasta do projeto:
```bash
cd nome-do-repositorio
```


### 3. Instale as dependências
Execute o comando abaixo para instalar todas as dependências listadas no arquivo package.json:
```bash
npm install
```


### 4. Configuração do banco de dados
Este projeto utiliza SQLite como banco de dados. Certifique-se de que o banco de dados está configurado corretamente:
Se houver um arquivo db.sqlite, ele será utilizado automaticamente.
Caso contrário, o Knex criará o banco de dados.
Se necessário, você pode executar as migrações do banco de dados com o seguinte comando:
```bash
npx knex migrate:latest
```


### 5. Configuração de variáveis de ambiente
Certifique-se de criar um arquivo .env na raiz do projeto e preencher as variáveis necessárias (se houverem). Um exemplo de arquivo .env pode ser encontrado em .env.example.

### 6. Execute o servidor
Com tudo configurado, você pode iniciar o servidor backend com o seguinte comando:
```bash
npm run dev
```


### 8. Acesse o projeto
Agora, você pode acessar o projeto no navegador utilizando a URL:
```bash
http://localhost:3000
```


## 🦸 Autor

 <img src="https://avatars.githubusercontent.com/u/137903019?s=400&u=a5d7cc78d579a664a0b95b010c70d153f0265b60&v=4" width="100px;" style="border-radius: 50%;" alt=""/>

[![Linkedin Badge](https://img.shields.io/badge/-Alan_Freitas-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/alanfreitasbr01/)](https://www.linkedin.com/in/alanfreitasbr01/)
[![Gmail Badge](https://img.shields.io/badge/-freitasbr01@gmail.com-c14438?style=flat-square&logo=Gmail&logoColor=white&link=mailto:freitasbr01@gmail.com)](mailto:freitasbr01@gmail.com)