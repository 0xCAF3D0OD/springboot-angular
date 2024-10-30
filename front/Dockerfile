FROM node:23

COPY ./docker/js.sh ./

RUN chmod +x ./js.sh

WORKDIR /usr/src/app

COPY angular-app ./

CMD ["sh", "/js.sh"]