#!/bin/sh
cd typescript-with-example
npm prune
npm install
CI=true ./node_modules/.bin/react-scripts test --env=jsdom
npm run build