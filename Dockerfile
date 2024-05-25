FROM node:latest
WORKDIR /src
COPY package.json package-lock.json ./
RUN npm install
COPY . .
EXPOSE 5000
CMD [ "npm", "start"]

