FROM node:7
WORKDIR  /Desktop/app
COPY package.json  /Desktop/app
RUN npm install
COPY .  /Desktop/app
CMD [ "node" ,"index.js"]
EXPOSE  4000