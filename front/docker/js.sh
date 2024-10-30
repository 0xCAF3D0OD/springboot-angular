#!/bin/sh
if [ ! -d "node_modules" ]; then
  echo "Installing dependencies with Yarn..."
  yarn install --prefer-offline
else
  echo "Dependencies already installed."
fi
yarn global add @angular/cli@18.2.10
ng serve --host "0.0.0.0" --disable-host-check=true --poll 100
