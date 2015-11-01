# paper-datatable

A material design implementation of a data table. Let's call this a ~~pre-~~alpha release. I will hopefully be fixing it more and more over time, but figuring out why it isn't working in Microsoft Edge is a problem that keeps eluding me. To be honest I can only recommend usage in Chrome-heavy environments (although Firefox works as well, albeit a bit slower).

**Important:** This element *does* support custom `<template>`'s for each column, *including* two way binding (so you can place `<paper-input>`'s in your cell and listen for data changes)

## Installation

The element can be installed using bower using

    bower install --save paper-datatable

## Usage

Honestly, the best thing you can do right now is simply check out the two examples. Either way, there are two main elements in this component:

 - `<paper-datatable>` generates the basic datatable
 - `<paper-datatable-card>` wraps the `<paper-datatable>` and simplifies the creation of features like pagination, etc.

### `<paper-datatable>` example

    <paper-datatable data="{{data}}">
      <!-- a plaintext sortable column -->
      <paper-datatable-column header="Title" property="title" sortable></paper-datatable-column>
      <!-- an editable column -->
      <paper-datatable-column header="Author" property="title" editable></paper-datatable-column>
      <!-- a custom column -->
      <paper-datatable-column header="Page" property="page">
        <template>
          <!--
            this template is used for every cell in this column, you have access to:
             - `{{value}}`: The value of the current property (`data.n.page`)
             - `{{item}}`: The value of the current item (`data.n`)
          -->
          <paper-input value="{{value}}">
        </template>
      </paper-datatable-column>
    </paper-datatable>

## Dependencies

Element dependencies are managed via [Bower](http://bower.io/). You can
install that via:

    npm install -g bower

Then, go ahead and download the element's dependencies:

    bower install
