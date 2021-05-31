#!/bin/bash

echo "# # # Start release task # # #"

echo "1. Stop docker instance"
sudo docker-compose --env-file packages/coins-server/.env down

echo "2. Fetch repository ..."
git fetch origin
git reset --hard origin/master

echo "3. make scripts executable"
sudo chmod +x scripts/*.sh

echo "4. Rebuild docker instance"
sudo docker-compose --env-file packages/coins-server/.env build

echo "5. Restart docker instance"
sudo docker-compose --env-file packages/coins-server/.env up -d

echo "# # # Finished release task # # #"