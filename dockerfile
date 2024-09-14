FROM node:18

WORKDIR /app-docker

COPY . .

RUN npm install 

EXPOSE 3000

CMD [ "npm","start" ]

