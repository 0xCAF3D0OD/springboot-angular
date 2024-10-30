FROM node:18

COPY ./docker/js.sh ./

RUN chmod +x ./js.sh

WORKDIR /usr/src/app

COPY angular-app ./

CMD ["sh",  "-c", "/js.sh"]
