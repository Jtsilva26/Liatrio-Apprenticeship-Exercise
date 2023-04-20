FROM node:18
WORKDIR /usr/src/liatrio
COPY package*.json index.js ./
RUN npm install
EXPOSE 80
CMD ["node", "index.js"]
