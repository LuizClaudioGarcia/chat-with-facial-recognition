
FROM node:alpine3.21

# Cria um usuário não root para aumentar a segurança da aplicação node
RUN addgroup -g 1001 appgroup && adduser -G appgroup -u 1001 appuser -s /bin/sh -D

WORKDIR /app

COPY package*.json ./

RUN npm install

# Copia todo o código do projeto para o diretório de trabalho definindo o proprietario como appuser
COPY --chown=appuser:appgroup . /app

# Qualquer alteração executada dentro do container agora será com o perfil appuser (não root)
USER appuser 

EXPOSE 8080

CMD ["sh", "-c", "if [ \"$NODE_ENV\" = 'development' ]; then npm run dev; else npm start; fi"]
