#!/bin/bash

echo "Build script"

# add the commands here

npm install
cd ./client
npm install
cd ..
npm run build
cd ./client
npm run build