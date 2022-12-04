FROM node:alpine

WORKDIR /var/www
ENV PORT=3000
COPY package.json .
RUN npm install --production

COPY . .

EXPOSE 3000

CMD ["node", "src/server.js"]