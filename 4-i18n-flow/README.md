Adding new packages:
babel-preset-flow
flow-bin
react-intl

After cloning the repo, run
yarn install
yarn run flow init (creates .flowconfig)
Add flow to .babelrc like so: "presets": ["env", "flow", "react"]

Supported actions (self explanatory:
npm build
npm start
npm test
