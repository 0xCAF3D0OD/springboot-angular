# Use Java 21 base image
FROM eclipse-temurin:21-jdk

# Set working directory
WORKDIR /app

# Install Maven
RUN apt-get update && \
    apt-get install -y maven && \
    apt-get clean

# Copy pom.xml separately to cache dependencies
COPY pom.xml .

# Download dependencies
RUN mvn dependency:go-offline

# Copy source code
COPY src ./src

# Expose ports
EXPOSE 8080
EXPOSE 35729

# Run the application with DevTools enabled
CMD ["mvn", "spring-boot:run"]