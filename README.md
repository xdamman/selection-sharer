# selection-sharer

Popover menu to share on Twitter or by email any text selected on the page with support for mobile devices (with a popunder).

![selection sharer screenshot](http://f.cl.ly/items/282u1E2K0C2K0i1W3P0G/selection-sharer-screenshot.png)
    
## How to add it to your site

This script requires jQuery so make sure you have it loaded on your page.

Add the stylesheet in the `<head>` of your page:

    <link rel="stylesheet" href="dist/selection-sharer.css" />
    
and add the Javascript at the bottom of your page near the closing `</body>` tag:

    <script src="dist/selection-sharer.js"></script>
    <script>
    $('p').selectionSharer();
	</script>

If you want to add Facebook share, please make sure that your page has a Facebook App ID meta tag:
    
    <meta property="fb:app_id" content="123456789" />

The url shared can be set using the og:url tag:

    <meta property="og:url" content="http://your.url/to/share" />


Or if you are using [requirejs](http://requirejs.org), you can do:


    require(["dist/selection-sharer"], function(SelectionSharer) {
      var sharer = new SelectionSharer();
      selectionSharer.setElements('p'); // bind mouseup event to all <p> elements
    });

Or more simply:

    require(["dist/selection-sharer!"]);


That's it. 

Please let me know if you install this script on your site. Just star this repo and ping me on Twitter [@xdamman](https://twitter.com/intent/tweet?status=%40xdamman%20Thanks%20for%20http%3A%2F%2Fxdamman.github.io%2Fselection-sharer%20-%20It%20looks%20great%20on%20my%20site:%20). Thank you!

### Notes 

- Images are included inline in the CSS as SVG (perfect for Retina displays, loading time and to easily create new color schemes)
- Total size gzipped minified: 3.5K (equally split between css and javascript)

## Demos

There is a `demos/` directory with some examples using `jquery`, `requirejs` or simple javascript. 

You can also try it directly on my blog on http://xdamman.com.


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
- Make a Wordpress plugin - done by @jcvangent http://wordpress.org/plugins/selection-sharer/ 
- Add support for different themes
- Add tests
- Tests across multiple browsers (currently only tested on Chrome, Safari, Firefox on a Mac)
- Remove dependency on jQuery
- Make the CSS more robust against collisions
