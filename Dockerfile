FROM node:latest

COPY ./node/package.json .

RUN npm i

COPY ./node .

CMD [ "node", "index" ];