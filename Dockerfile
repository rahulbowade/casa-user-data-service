FROM node:16-alpine as builder
COPY . ./
RUN npm i
EXPOSE 3000
CMD ["npm", "run", "start:dev"]