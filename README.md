# simple-react

A set of simple React boilerplates without all the crud

create-react-app is great but has too much magic in it, plus a million packages.
In the real world, at some point you will need to explode the configuration.
And you will disover that you need to now understand the struts of create react app.

React is a library and not a framework. This lets you pick and choose other libraries
for flux, routing, css, i18n and testing.

The danger of magical frameworks is that it will comback and bite you when you need
something more than what it provides. It also picks other associated libraries for
you. There is no silver bullet. So it is important that you learn and understand
everything that goes behind creating your application.

Here I will attempt to explain each step in detail of creating a production caliber
react app. We will try to understand every step without any mysteries. In my opinion,
if you add an external npm package in your package, you should know what it does.

No cut and paste installs.

1-basic
Simple React app with a webpack configuration. The goals:

* A simple react component
* Babel traspiling for es6 and jsx.
* Create HTML index file via a plugin
* Package static deployment bundle using webpack
* Run development environment via hot module reloading using webpack

2-routes-jest

* Add react router
* Add Unit Testing using Jest

3-sass-img-font

* Image and fonts
* CSS bundling (Maybe use SASS)

4-redux

* Redux + thunk
* ramda

5-i18n-code-spliting
