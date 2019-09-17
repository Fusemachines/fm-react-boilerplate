#!/bin/sh
cd typescript-with-redux
npm prune
npm install
CI=true ./node_modules/.bin/react-scripts test --env=jsdom