# README

# todo_app

## Descrição

`todo_app` é uma aplicação de lista de tarefas simples construída com Ruby on Rails para o backend e React para o frontend. A aplicação permite que os usuários adicionem, visualizem, editem, e excluam tarefas. 

## Funcionalidades

- Adicionar novas tarefas
- Listar todas as tarefas
- Marcar tarefas como concluídas
- Excluir tarefas
- Filtrar tarefas por palavras-chave

## Pré-requisitos

Antes de começar, certifique-se de ter as seguintes ferramentas instaladas em sua máquina:

- **Ruby**: Versão 2.7.6
- **Rails**: Versão 6.x ou superior
- **Node.js**: Versão 14.x ou superior
- **Yarn**: Versão 1.x ou superior
- **Git**: Para clonar o repositório
- **Docker**: (Opcional) Para rodar a aplicação dentro de containers

## Instruções de Instalação

### 1. Clonar o Repositório

```bash
git clone https://github.com/thiaguspda/todo_app.git
cd todo_app
```

### 2. Configurar o Backend (Ruby on Rails)

#### 2.1. Instalar Dependências

Se você estiver usando Docker, pule para a seção **2.3**.

Instale as dependências do Ruby on Rails:

```bash
bundle install
```

#### 2.2. Configurar o Banco de Dados

1. **Copiar o exemplo de arquivo de configuração**:

   ```bash
   cp config/database.yml.example config/database.yml
   ```

2. **Configurar as credenciais do banco de dados** no arquivo `config/database.yml`.

3. **Criar e migrar o banco de dados**:

   ```bash
   rails db:create
   rails db:migrate
   ```

#### 2.3. Usar Docker (Opcional)

Se preferir rodar o backend usando Docker:

1. **Construir e iniciar os containers**:

   ```bash
   docker-compose up --build
   ```

2. **Executar migrações dentro do container Docker**:

   ```bash
   docker-compose exec web rails db:create db:migrate
   ```

### 3. Configurar o Frontend (React)

#### 3.1. Instalar Dependências

No diretório `frontend`, instale as dependências do Node.js:

```bash
cd frontend
yarn install
```

### 4. Rodar a Aplicação

#### 4.1. Rodar o Backend (Rails)

Se você não estiver usando Docker:

```bash
rails server
```

O servidor estará disponível em `http://localhost:3000`.

Se você estiver usando Docker, o backend já estará rodando na porta `3000`.

#### 4.2. Rodar o Frontend (React)

Em uma nova aba do terminal, navegue até o diretório `frontend` e rode:

```bash
yarn start
```

O servidor de frontend estará disponível em `http://localhost:3001`.

### 5. Configuração Adicional

#### 5.1. Configurar Variáveis de Ambiente

Certifique-se de configurar as variáveis de ambiente necessárias para o Rails, como `DATABASE_URL`, `SECRET_KEY_BASE`, etc., no arquivo `.env` ou através do sistema de gerenciamento de ambiente de sua escolha.

### 6. Testes

Para rodar os testes, utilize o seguinte comando no diretório raiz do projeto:

```bash
rails test
```

### 7. Deploy

Para fazer deploy em produção, recomendamos o uso de serviços como AWS Elastic Beanstalk, Heroku, ou qualquer outro serviço que suporte Rails e React.

### 8. Contribuição

Contribuições são bem-vindas! Siga os passos abaixo para contribuir:

1. Faça um fork do projeto.
2. Crie uma nova branch (`git checkout -b feature/nova-funcionalidade`).
3. Commit suas mudanças (`git commit -m 'Adiciona nova funcionalidade'`).
4. Envie para a branch (`git push origin feature/nova-funcionalidade`).
5. Abra um Pull Request.

### 9. Licença

Este projeto está licenciado sob os termos da [MIT License](LICENSE).

### 10. Contato

Para mais informações, entre em contato através de:

- GitHub: [thiaguspda](https://github.com/thiaguspda)
- Email: thiago@exemplo.com

---

Este README fornece todas as instruções necessárias para que qualquer pessoa clone, instale e execute sua aplicação `todo_app` localmente. Se houver algo mais que precise ser incluído ou ajustado, sinta-se à vontade para editar conforme necessário.
