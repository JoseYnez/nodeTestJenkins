FROM node:alpine

WORKDIR /var/www
ENV PORT=3000
COPY package.json .
RUN npm install

COPY . .

EXPOSE 3000

CMD ["node", "server.js"]