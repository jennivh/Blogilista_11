#!/bin/bash

echo "Build script"

# add the commands here
echo "Building the project"
npm install
npm i dotenv
echo "Building the client"
cd ./client
npm install
npm run build