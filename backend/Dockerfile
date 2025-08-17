FROM openjdk:21-jdk-slim

WORKDIR /app

# Copy Maven files
COPY pom.xml .
COPY src ./src

# Install Maven and build the application
RUN apt-get update && apt-get install -y maven
RUN mvn clean package -DskipTests

# Expose port
EXPOSE 8080

# Run the application
CMD ["java", "-jar", "target/product-service-0.0.1-SNAPSHOT.jar"]

# Don't cache the backend
```
docker-compose build --no-cache backend
```