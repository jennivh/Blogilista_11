#!/bin/bash

echo "Build script"

# add the commands here
echo "Building the project"
npm install
echo "Building the client"
cd ./client
npm run build