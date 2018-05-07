Adding new packages:
babel-preset-flow
flow-bin
react-i18next

After cloning the repo, run
yarn install
yarn run flow init (creates .flowconfig)
Add flow to .babelrc like so: "presets": ["env", "flow", "react"]

Supported actions (self explanatory:
npm build
npm start
npm test

The translation boilerplate is very thin here. It just uses the translation function passed in via
a React Context
We can expand it later with xhr support, serviceworkers etc later. Its important to have the hook right now.
