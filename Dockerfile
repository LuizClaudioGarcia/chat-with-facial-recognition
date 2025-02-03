
FROM node:alpine3.19

RUN addgroup -g 1001 appgroup && adduser -G appgroup -u 1001 appuser -s /bin/sh -D

WORKDIR /app

COPY package*.json ./

RUN npm install -g nodemon
RUN npm install

# Copia todo o código do projeto para o diretório de trabalho
COPY --chown=appuser:appgroup . /app

USER appuser 

EXPOSE 8080

CMD ["sh", "-c", "if [ \"$NODE_ENV\" = 'development' ]; then npm run dev; else npm start; fi"]
