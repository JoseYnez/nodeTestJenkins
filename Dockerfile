FROM node:alpine

WORKDIR /var/www
ENV PORT=3000
ENV MONGODB_CNN=mongodb+srv://accesoLimitado:gV3VeGNSPVFA0f0J@cluster0.we7o7.mongodb.net/test
COPY package.json .
COPY package-lock.json .
COPY /src .
RUN ls
RUN npm install --production



EXPOSE 3000

CMD ["node", "src/server.js"]