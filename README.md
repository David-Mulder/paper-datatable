# paper-datatable

A material design implementation of a data table. Let's call this a ~~pre-~~alpha release. I will hopefully be fixing it more and more over time and since upgrading to Polymer 1.2 I have a problem with some of the bindings (Issue #1), but the `card.html` demo seems to be in working order. I will gladly accept pull requests and I think it's pretty solid basis, but stuff like documentation and custom styling is still quite lacking.

Small update: At this point (release 0.1) I am starting to feel relatively comfortable about the basic functionality, but there is little to no cross-browser support (mostly chrome only, will be working on this definitely, but this is currently used on a backend system it doesn't matter *that* much yet).

## Installation

The element can be installed using bower using

    bower install --save David-Mulder/paper-datatable

## Dependencies

Element dependencies are managed via [Bower](http://bower.io/). You can
install that via:

    npm install -g bower

Then, go ahead and download the element's dependencies:

    bower install
