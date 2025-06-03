FROM node:22.14.0

WORKDIR /client

COPY . .

RUN npm i

RUN npm run build

CMD ["npm", "run", "build"]
