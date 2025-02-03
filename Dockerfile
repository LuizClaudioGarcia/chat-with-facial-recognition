
FROM node:19

WORKDIR /app

COPY package*.json ./

RUN npm install; npm install -g nodemon

# Copia todo o código do projeto para o diretório de trabalho
COPY . .

EXPOSE 8080

CMD ["sh", "-c", "if [ \"$NODE_ENV\" = 'development' ]; then npm run dev2; else npm start; fi"]
