# Secure Auth API - Node.js & MySQL

Este projeto é uma API de autenticação completa e segura, desenvolvida para gerenciar o cadastro e login de usuários, utilizando as melhores práticas de segurança de mercado.

## 🚀 Tecnologias
- **Node.js** & **Express**
- **MySQL** (Banco de Dados Relacional)
- **Bcrypt** (Criptografia de senhas)
- **JWT (JSON Web Token)** (Autenticação Stateless)
- **Cookies (HttpOnly)** (Armazenamento seguro do token)

## 🛠️ Funcionalidades
- **User Signup:** Cadastro de usuários com verificação de e-mail duplicado e hash de senha.
- **Secure Login:** Autenticação de usuários comparando a senha via Bcrypt e gerando tokens JWT.
- **Security First:** Utilização de Cookies HttpOnly para prevenir ataques XSS.

## 📋 Como rodar o projeto
1. Clone o repositório:
   ```bash
   git clone [https://github.com/rielisson/autenticao_api.git]
