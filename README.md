<h3 align="center">
	Background jobs in Node.js with Redis.
</h3>

-  Express — A web framework for Node.js
-  Bull — Premium Queue package for handling distributed jobs

---

> Iniciar Docker
- docker run --name redis -p 6379:6379 -d -t redis:alpine

> iniciar o servidor:
- npm run start:server

> iniciar o serviço de fila
- npm start:queue

> consulta das queues via browser Bull Dashboard
- localhost:8080/admin/queues

>  POST via Postman
- localhost:8080/users
```json
{
    "name": "Seu Nome",
    "email": "seuemail@mail.com"
}
```
- Caixa postal para testes das queues

    mailtrap.io/inboxes
