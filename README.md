magnify.jquery
==============

Magnify preview pictures under the mouse (on mouseenter event).

Example:

  `$('div.image').magnify();`

## How it works ##

Outer container should be a *DIV* with or without an ID aatribute. Something like "<div class='image'></div>".

This DIV must contain an *A* element with path to full size image like "<a href='/imgages/abc.jpg'></a>".

In this A element you will place an *IMG* element with SRC attribute to a small preview image like "<img src='/images/preview/abc.jpg'>".

Together:

`
<div class='image'><a href='/imgages/abc.jpg'><img src='/images/preview/abc.jpg'></a></div>
`

You can also write some text in this `div` and should set `title` and `alt` attributes to tell the user what it is. If JavaScript is not enabled user will see the whole image after click.
