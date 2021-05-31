#!/bin/bash

echo "# # # Start import coins # # #"

sudo docker exec -t coins-server NODE_ENV=production yarn workspace coins-server ts-node --transpile-only ./src/tasks/run-import-coins.ts

echo "# # # Finished import coins # # #"
