ARG NGINX_VERSION=1.27.5

FROM node:22.14.0 AS build

WORKDIR /client

COPY . .

RUN npm i

RUN npm run build

FROM nginx:${NGINX_VERSION}-alpine AS quiz_nginx

WORKDIR /public

COPY --from=build /client/dist /usr/share/nginx/html

EXPOSE 80