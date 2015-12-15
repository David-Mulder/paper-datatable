Events
===
All properties with a `notifies` label in the API reference will trigger a `propertyName-changed` event. Beyond that the
element also exposes a fair number of custom events which are documented here. One of the best ways to find events is
simply be exploring the [event explorer](events.html).

`<paper-datatable>` and `<paper-datatable-column>`
===
Taps
---
There is a `row-tap` event for when a users taps on a row, and a `cell-tap` event for a specific cell. `cell-tap` can be
listened for both on `paper-datatable` and `paper-datatable-column`. Row tap can be cancelled using
`event.preventDefault()` which will prevent the row from getting selected.

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