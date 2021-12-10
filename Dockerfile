FROM ubuntu:latest
FROM node:16.04
WORKDIR /usr/src
COPY package.json /usr/src/
RUN npm install
COPY . /usr/src/
EXPOSE 8080
CMD ["npm", "start"]
