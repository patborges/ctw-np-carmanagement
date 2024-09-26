FROM node:22-alpine3.19

RUN mkdir -p /app
WORKDIR /app
COPY package.json /app/
RUN ["npm", "install"]
COPY ./src /app/src
COPY *.json /app/
COPY *.ts /app/
EXPOSE 4200/tcp
CMD ["npm", "start", "--", "--host", "0.0.0.0", "--poll", "500"]