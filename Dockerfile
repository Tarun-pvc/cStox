FROM node:18.13.0-buster-slim

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install
COPY . .
RUN cd client
RUN npm install
RUN npm run build
RUN cd ..

CMD ["node", "server.js"]