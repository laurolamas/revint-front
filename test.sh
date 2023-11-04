#!/bin/bash

# Write a script that changes every line of every file in the current directory that contains "localhost:8080" to "localhost:8080"

find . -type f -exec sed -i 's/localhost:8080/localhost:8080/g' {} \;

