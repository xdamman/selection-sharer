# selection-sharer

Medium like popover menu to share on Twitter or by email any text selected on the page with support for mobile devices (with a popunder).

![selection sharer screenshot](http://f.cl.ly/items/2a1U1U1Z3U230m0H2J0W/selection-sharer-screenshot.png)
    
## How to use on your site

This script requires jQuery so make sure you have it loaded on your page.

Add the stylesheet in the `<head>` of your page:

    <link rel="stylesheet" href="dist/selection-sharer.css" />
    
and add the Javascript at the bottom of your page near the closing `</body>` tag:

    <script src="dist/selection-sharer.js"></script>
    <script>
    var sharer = new SelectionSharer('p'); // bind mouseup event to all <p> elements
	</script>

Or if you are using [requirejs](http://requirejs.org), you can do:


    require(["dist/selection-sharer"], function(SelectionSharer) {
      var sharer = new SelectionSharer();
      selectionSharer.setElements('p'); // bind mouseup event to all <p> elements
    });

Or more simply:

    require(["dist/selection-sharer!"]);


That's it. 

### Notes 

- Images are included inline in the CSS as SVG (perfect for Retina displays, loading time and to easily create new color schemes)
- Total size gzipped minified: 3.5K (equally split between css and javascript)


## Bookmarklet version

Add a new bookmark to your bookmark bar, edit its url and copy paste the following code:

    javascript:(function(){var s=document.createElement('script');s.src="//xdamman.github.io/selection-sharer/lib/selection-sharer/dist/bookmarklet.js";document.body.appendChild(s);})()


## Building

To recompile the minified versions of the css and javascript in the `dist/` directory, simply run:

    npm install
 

## Contribute

This is still early days so there is still a lot to do and I welcome contributions. 

TODO:

- Make a browser extension
- Make a Wordpress plugin
- Add support for different themes
- Add tests
- Tests across multiple browsers (currently only tested on Chrome, Safari, Firefox on a Mac)
- Remove dependency on jQuery
- Make the CSS more robust against collisions