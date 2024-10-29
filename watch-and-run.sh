#!/bin/bash

# Navigate to the workspace directory
cd /app

# Find all Java files and watch them for changes
find src -name "*.java" | entr -r -n ./mvnw spring-boot:run
