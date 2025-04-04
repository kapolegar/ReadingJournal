---

📖 Adicionar livros com título, autor, gênero e data de cadastro.

📚 Listar os livros cadastrados.

❌ Excluir livros da lista.

# Componentes

Os componentes estão no diretório ./src/components e possuem as seguintes funcionalidades:

### Home

Apresenta a página inicial do sistema, com uma introdução ao Reading Journal.

### About

Exibe informações sobre o propósito do sistema e suas funcionalidades.

### NavBar

Exibe a barra de navegação utilizando Link do React Router para facilitar a troca de páginas.

### BookList

Lista os livros cadastrados e permite excluir livros da lista.

### BookForm

Permite adicionar um novo livro com título, autor, gênero e data de cadastro.


# Como Executar o Projeto

Clone o repositório:

```
git clone https://github.com/kapolegar/ReadingJournal.git
```  

## Instale as dependências:

```
npm install
```

## Execute a aplicação:

```
npm start
```

## Acesse no navegador:

http://localhost:3000
```  



## 🖼️ Resultado Esperado  

Após rodar o projeto, o sistema terá a seguinte aparência no navegador:  

![image](https://github.com/user-attachments/assets/4eac7849-b5f7-4802-aaf9-00f2920bb017)

## Uso

Navegue até a página Cadastrar para adicionar um novo livro.

Acesse a Lista de Livros para visualizar os livros adicionados.


### 🔎 Testes incluídos  
- **BookList.test.js** → Verifica se a lista de livros é renderizada corretamente.  
- **BookForm.test.js** → Testa se o formulário de cadastro de livros envia os dados corretamente.



## ✅ Como Executar os Testes  

O projeto contém **testes automatizados** usando **Jest** e **React Testing Library**. Para rodá-los, utilize o comando:  

```sh
npm test
```

