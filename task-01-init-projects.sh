#!/bin/bash
mkdir -p ./projects/my-project/
chmod -R 755 ./projects  
cd ./projects/my-project/
mkdir -p ./directory1/subdirectory1 ./directory2 ./directory3/subdirectory2
touch ./directory2/hello.txt && echo "Hello from JS" > ./directory2/hello.txt
cat ./directory2/hello.txt
