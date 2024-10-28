FROM openjdk:24-jdk-slim

WORKDIR /app

RUN apt-get update && apt-get install -y entr

COPY .mvn/ .mvn
COPY mvnw pom.xml ./
COPY watch-and-run.sh ./

RUN chmod +x mvnw watch-and-run.sh
RUN ./mvnw dependency:go-offline

COPY src ./src

CMD ["./watch-and-run.sh"]


