#!/bin/sh
cd typescript
npm prune
npm install
CI=true ./node_modules/.bin/react-scripts test --env=jsdom
npm run build