Getting started
===
First of all you have to set up a `<paper-datatable>` element. You provide it with a
`data` attribute which should be an array of `object`'s. Additionally you decide
whether you want the `data-table` to be `selectable`. At this point we get something
like

	<paper-datatable data="{{data}}" selectable multi-selection>
	</paper-datatable>

Next we have to define our columns, this is done by adding child elements of the type
`<paper-datatable-column>`. A fairly minimal example would be

	<paper-datatable data="{{data}}" selectable multi-selection>
		<paper-datatable-column header="Title" property="title" sortable>
		</paper-datatable-column>
	</paper-datatable>

If we want to format our content in a custom way we can easily do this by adding a `<template>`
element like so:

	<paper-datatable data="{{data}}" selectable multi-selection>
		<paper-datatable-column header="Title" property="title" sortable editable>
			<template>
				<paper-input value="{{value}}">
			</template>
		</paper-datatable-column>
	</paper-datatable>

Before you start there is one choice you have to make: Whether you wish to use the `<paper-datable>` on it's own or
whether you wish to use the full `<paper-datatable-card>` element. The `<paper-datatable-card>` element wraps a 
 `<paper-datatable>` element and handles things like pagination and lazy loading of data. So there is a very simple rule
 of thumb:
 
  - Use the `<paper-datatable>` if your table is going to show a fixed number of rows.
  - Use the `<paper-datatable-card>` if your table has a dynamic number of rows. 

And it's also a cool idea to check [the different `resize-behavior`s](resize-behavior.html) and pick one you like.

Editable columns
===
There are two ways to define editable columns, the easiest way is to just set the `editable` attribute like

	<paper-datatable-column header="Author" property="title" type="String" editable>
	</paper-datatable-column>

which uses default `<template>`'s for simple `type="String"` and `type="Number"` cases. You can always set your own
`<template>` as well in which case `[editable]` will indicate to the system that a tap inside the cell should not select
the row.

	<paper-datatable-column header="Author" property="title" editable>
		<template>
			 <paper-input value="{{value}}" no-label-float></paper-input>
		</template>
	</paper-datatable-column>

Inside the template you can access the following 3 bindings:

 - `{{value}}` which is the value of the current cell;
 - `{{item}}` which is the entire row; 
 - and `{{column}}` which references the current column.

Additionally it's possible to load the `<template>` instead of inline. The will cause a small dialog to be shown when
 the user taps on the cell. See the first table in [this demo](editable.html) for an example of this. The big advantage
 of this is performance as not every cell needs to be initalized.

Polymer Keys and Selections
===
You might encounter keys that look like `#1` whilst working with `<paper-datatable>` these keys are Polymer's internal
keys on the `paperDatatable.data` collection. You can use those just like they would be a normal index in Polymer
functions, so stuff like the following works:

	this.$.paperDatatable.set('data.#1.author', 'Tom');
