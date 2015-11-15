# paper-datatable

A [material design implementation of a data table](https://www.google.com/design/spec/components/data-tables.html). Let's call this a pretty solid alpha release, or maybe even a beta.

Documentation **and demos** can be found here: http://david-mulder.github.io/paper-datatable/components/paper-datatable/

**Important:** This element *does* support custom `<template>`'s for each column, *including* two way binding (so you can place `<paper-input>`'s in your cells and listen for data changes), as far as I know this is pretty unique, but it's also the reason why it can be a bit slow on Firefox and Edge.

## Features

 - Custom `<template>`'ing of every cell.

		<paper-datatable-column header="Page" property="page">
			<template>
				<span>{{value}}</span>
			</template>
		</paper-datatable-column>

 - Two way binding directly into the `paper-datatable`

		<paper-datatable-column header="Page" property="page">
			<template>
				<paper-input value="{{value}}">
			</template>
		</paper-datatable-column>
 - Extremely simple to set up ([simple demo](http://david-mulder.github.io/paper-datatable/components/paper-datatable/demo/simple.html))
 - Pretty good styling support ([demo](http://david-mulder.github.io/paper-datatable/components/paper-datatable/demo/theming.html))
 - Pagination and external data sources ([demo](http://david-mulder.github.io/paper-datatable/components/paper-datatable/demo/users-card.html))
 - Add new items on the fly ([unpolished demo](http://david-mulder.github.io/paper-datatable/components/paper-datatable/demo/paper-datatable-card.html))
 - [Delightful details](https://www.google.com/design/spec/animation/delightful-details.html) in sorting and partial selections. If you have ideas for more: let me know.

## Installation

The element can be installed using bower using

    bower install --save paper-datatable

**Important:** If you wish to use `<paper-datatable-card>` you need the paper elements listed in `devDependencies` as well. They are not listed as normal dependencies to prevent them from being pulled in on production if you do not need them.

## Usage

Honestly, the best thing you can do right now is simply check out [the demos](http://david-mulder.github.io/paper-datatable/components/paper-datatable/demo/). Either way, there are two main elements in this component:

 - `<paper-datatable>` generates the basic datatable
 - `<paper-datatable-card>` wraps the `<paper-datatable>` and simplifies the creation of features like pagination, etc.

And you can find the full documentation [here](http://david-mulder.github.io/paper-datatable/components/paper-datatable/)

### `<paper-datatable>` example

```html
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
```