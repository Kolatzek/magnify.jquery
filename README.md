magnify.jquery
==============

Show big preview of picture on mouseenter event right or left of the thumbnail. With fallback for bowser without JavaScript.

Example:

  `$('div.image').magnify();`

## How it works ##

Outer container should be a **DIV** with or without an ID atribute. Something like "&lt;div class='image'>&lt;/div>".

This DIV must contain an **A** element with path to full size image in **HREF** like "&lt;a href='/imgages/abc.jpg'>&lt;/a>".

In this A element you will place an **IMG** element with **SRC** attribute to a small preview image like "&lt;img src='/images/preview/abc.jpg'>".

Together:

  `<div class='image'><a href='/imgages/abc.jpg'><img src='/images/preview/abc.jpg'></a></div>`

You can also write some text in this `div` and should set `title` and `alt` attributes to tell the user what it is. If JavaScript is not enabled user will see the whole image after click.

## Settings ##

 * **preload**: boolean, default = true

Append and remove full size images to body element to start a download. Set to false to save bandwith.
 
 * **imgDivClass**: string, default = 'fullIMG'
 
Set this class name to preview divs. In this way you can make an margin or shadow in pure CSS.

 * **maxX**: int, default = 450
 
To prevent showing an full size image in real size you can set max-width css value in style attribute of img element.

 * **maxY**: int, default = 300
 
To prevent showing an full size image in real size you can set max-height css value in style attribute of img element.

### Examples ###

In head element:

  `<script language="JavaScript" type="text/javascript" src="js/jquery.js"></script> <script language="JavaScript" type="text/javascript" src="js/magnify.jquery.js"></script>`

In body element:

  `<div class='image'><a href='/imgages/abc.jpg' title='ABC Image'><img src='/images/preview/abc.jpg' alt='chars A, B and C'></a><br/>ABC</div> <div class='image'><a href='/imgages/cde.jpg' title='C, D and E'><img src='/images/preview/cde.jpg' alt='three chars after B'></a><br/>C, D and E</div>`
  
In script element (in head):

  `$(document).ready(function(){ $('div.image').magnify({'imgDivClass': 'bigImageDiv', 'maxX': 600}); });`