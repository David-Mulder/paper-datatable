Supported browsers
===
First of all let's be clear about one thing here: This data table is in certain ways more complex than anything out there.
To make this component possible at all cutting edge libraries like Polymer were used and support were limited to 
the newest version of browsers that actually care about implementing new technologies, so this left us the following
browsers:

 - Chrome (Primary target)
 - Edge
 - Firefox
 - Opera

Which covers more than three quarters of users and seems quite acceptable as data tables are mostly used on
back end/admin systems where it's relatively more OK to instruct users to use certain browsers. Notable not supported
browsers are IE and Safari. IE because it doesn't support *a lot* of new technologies and Edge is practically the newest
version of IE. Safari because it's consistently lagging behind other browsers in technology adoption<sup>1</sup>
and because buying Apple products is a conscious decision to buy into a closed ecosystem on which outsiders can not
develop and test.

<sup>1</sup> <small>Some stats to back this up: caniuse.com is a site which covers technology adoption in browsers. Considering JS API's
  Safari only supports 50% (like IE) of the covered API's compared to the next worst browser (Edge) which covers 71%.
  And just for comparisons sake the most recent versions of Firefox cover 89% and Chrome 82%. That's simply a HUGE
  difference.</small>