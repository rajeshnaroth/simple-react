# simple-react
A set of simple React boilerplates without all the crud

create-react-app is great but has too much magic in it, plus a million packages.
In the real world, at some point you will need to explode the configuration. 
And you will disover that you need to now understand the struts of create react app.

The danger of magical frameworks is that it will comback and bite you when you need
something more than what it provides. There is no silver bullet. SO it is important
that you learn and understand everything that goes behind creating your application.

Here I will attempt to explain each step in detail of creating a production caliber
react app. We will try to understand every step without any mysteries. In my opinion,
if you add an external npm package in your package, you should know what it does.

No cut and paste installs.

Phase 1.
Simple React app with a webpack configuration. The goals:
- A simple react component
- Babel traspiling for es6 and jsx.
- Create HTML index file via a plugin
- Package static deployment bundle using webpack
- Run development environment via hot module reloading using webpack

Phase 2.
- Add react router
- Add Unit Testing using Jest

In the future.
- Include a utility such as lodash/ramda
- Image and fonts
- CSS bundling (Maybe use SASS)
- I18n and L10n
- 
