FROM node:10-alpine

COPY ./webservice/app/index.js /app/
COPY ./webservice/app/package.json /app/

WORKDIR /app
RUN npm install

EXPOSE 3000

CMD ["node", "index.js"]
