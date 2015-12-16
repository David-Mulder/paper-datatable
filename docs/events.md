Events
===
All properties with a `notifies` label in the API references will trigger a `propertyName-changed` event. Beyond that the
element also exposes a few custom events which are documented here. One of the best ways to find events is
simply be exploring the [event explorer](../demo/events.html).

`<paper-datatable>` and `<paper-datatable-column>`
===
Taps
---

 - `row-tap` is triggered when a user taps anywhere on a row. The `item` of the row can be found in the `detail` object.
   This event can be cancelled using `event.preventDefault()` which will prevent the row from getting selected. 
 - `cell-tap` on `<paper-datatable>` is triggered whenever any cell is tapped containing both the `item` and `column` in
   the `detail` object.
 - `cell-tap` on `<paper-datatable-column>` is triggered whenever a cell in that column is tapped. It contains only the 
   `item` of the current row.

Selections
---

 - `selection-changed` is a generic event when the selection changes and exposes added or removed items from the selection.
 - `toggle-all` is triggered when the 'toggle all' checkbox is tapped and can be cancelled.
  
Other
---
 - `sort` is triggered when a column is tapped and can be cancelled.

`<paper-datatable-card>`
===
Doesn't expose any special events beyond the standard Polymer `*-changed` events which you can find in the API reference.