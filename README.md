---

# 📖 Reading Journal  

O **Reading Journal** é uma aplicação web desenvolvida em **React** para ajudar a gerenciar sua lista de leituras. Com ele, é possível cadastrar livros, visualizar a lista de leituras, acompanhar registros e remover livros da lista.  

## 🚀 Funcionalidades  

✅ **Adicionar livros** com título, autor, gênero e data de leitura.  
📚 **Listar os livros cadastrados** e visualizar detalhes.  
🗑️ **Excluir livros** da lista.  
🛠️ **Testes automatizados** para garantir a qualidade da aplicação.  

---

## 📂 Estrutura do Projeto  

Os componentes estão organizados no diretório `./src/components` e possuem as seguintes funcionalidades:  

### 🏠 Home  
Apresenta a página inicial do sistema, com uma introdução ao **Reading Journal**.  

### ℹ️ About  
Exibe informações sobre o propósito do sistema e suas funcionalidades.  

### 🔗 NavBar  
Barra de navegação utilizando **React Router**, permitindo alternar entre as páginas.  

### 📚 BookList  
Lista os livros cadastrados e permite a exclusão de livros da lista.  

### 📝 BookForm  
Permite adicionar um novo livro com título, autor, gênero e data de leitura.  

---

## ▶️ Como Executar o Projeto  

### 1️⃣ Clone o repositório  
```sh
git clone https://github.com/kapolegar/ReadingJournal.git
```  

### 2️⃣ Instale as dependências  
```sh
npm install
```  

### 3️⃣ Execute a aplicação  
```sh
npm start
```  

### 4️⃣ Acesse no navegador  
```sh
http://localhost:3000
```  

---

## 🖼️ Resultado Esperado  

Após rodar o projeto, o sistema terá a seguinte aparência no navegador:  

![image](https://github.com/user-attachments/assets/4eac7849-b5f7-4802-aaf9-00f2920bb017)

---

## 💡 Como Usar  

1️⃣ Navegue até a página **Cadastrar** para adicionar um novo livro.  
2️⃣ Acesse a **Lista de Livros** para visualizar os livros cadastrados.  
3️⃣ Utilize o botão **"Excluir"** para remover um livro da lista.  


### 🔎 Testes incluídos  
- **BookList.test.js** → Verifica se a lista de livros é renderizada corretamente.  
- **BookForm.test.js** → Testa se o formulário de cadastro de livros envia os dados corretamente.

---

## ✅ Como Executar os Testes  

O projeto contém **testes automatizados** usando **Jest** e **React Testing Library**. Para rodá-los, utilize o comando:  

```sh
npm test
```

