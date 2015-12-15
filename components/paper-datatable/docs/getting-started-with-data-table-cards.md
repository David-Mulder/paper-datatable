Getting started with data tables in cards
===
This documentation still isn't as complete as I would like it to be, so if anything is unclear please start with checking
out the source code from the demo's.

Data sources
---
This component uses an object with a set number of functions to retrieve and save data. A `data-source` looks like

    {
        get: function(sort, page, pageSize){ return new Promise(...) },
        set: function(item, property, value){ return new Promise(...) },
        length: Number
    }

Alternatively you can use `queryForIds(sort, page, pageSize)` which returns an array of `ids` + `getByIds(ids)` instead
of a simple `get`. Advantages are better caching, better cross page selections, but the big disadvantage is that you
have two do two AJAX requests and the added complexity of the API calls.

Note: If you wonder why the functions aren't directly available to the element and instead are grouped like this, the
reason for this is that this allows you to create a

    <my-api-datasource for="users" data-source="{{dataSource}}"></my-api-datasource>

object which in turn you bind to this element. I have however been considering allowing manual binding directly as well.

Using `<paper-datatable-card>` without a `data-source`
===
Sometimes it might make sense to do your own implementation of pagination. Sadly extending custom elements is not possible
yet, but you can simply use a `<paper-datatable-card>` without a `data-source` and next listen for events like
`page-changed`, `sort`, etc. to handle all the data switchery. It's good to note that a lot of events (like `sort`) do 
support `event.preventDefault()`.

Toolbars
===
Main toolbar
---
The main toolbar is located to the right of the heading and can be filled by specifying an element with `[toolbar-main]`.

	<div toolbar-main>
	 	<paper-input value="{{searchQuery}}">
		<paper-icon-button icon="search" on-tap="search"></paper-icon-button>
	</div>

Selection toolbar
---
The selection toolbar is shown when any items are selected and shows the number of selected items. Items in the toolbar
can be specified by adding an element with `[toolbar-select]`. Additionally it's often required to show different icons
when a single item is selected from when multiple items are selected. For this there exists `[toolbar-select-single]`
and `[toolbar-select-multi]`

	<div toolbar-select-single>
		<paper-icon-button icon="info" on-tap="info"></paper-icon-button>
	</div>
	<div toolbar-select>
		<paper-icon-button icon="delete" on-tap="delete"></paper-icon-button>
	</div>
	
Of course you do not need to use this and you can simply check the `length` of the elements `selectedIds` as well.