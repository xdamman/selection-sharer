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

### For Webpack
__Note__ : This package has a peer dependency on jQuery so it expects jQuery to
already be available in your page or in your bundling step.

*Without CSS bundling*

```js
var Selection = require('selection-sharer');
var selection = new Selection('p');
```

*With CSS bundling*

```js
require('selection-sharer/dist/selection-sharer.css');
var Selection = require('selection-sharer');
var selection = new Selection('p');
```

### For Browserify

```js
var Selection = require('selection-sharer');
var selection = new Selection('p');
```

__Note__: Browserify does not do css bundling so you would have to resort to package like
[browserify-css](https://www.npmjs.com/package/browserify-css)

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

    npm build

## Other Builds
For Ruby On Rails applications you can use selection-sharer gem. We have a gem with selection-sharer js build and it is very easy to use.
https://rubygems.org/gems/selection-sharer

	gem 'selection-sharer'

## Contribute

This is still early days so there is still a lot to do and I welcome contributions. 

TODO:

- Make a browser extension
- Make a Wordpress plugin - done by @jcvangent http://wordpress.org/plugins/selection-sharer/ ,@ishansharma https://wordpress.org/plugins/epic-selection-sharer/
- Add support for different themes
- Add tests
- Tests across multiple browsers (currently only tested on Chrome, Safari, Firefox on a Mac)
- Remove dependency on jQuery
- Make the CSS more robust against collisions


## Backers

Support us with a monthly donation and help us continue our activities. [[Become a backer](https://opencollective.com/selection-sharer#backer)]

<a href="https://opencollective.com/selection-sharer/backer/0/website" target="_blank"><img src="https://opencollective.com/selection-sharer/backer/0/avatar.svg"></a>
<a href="https://opencollective.com/selection-sharer/backer/1/website" target="_blank"><img src="https://opencollective.com/selection-sharer/backer/1/avatar.svg"></a>
<a href="https://opencollective.com/selection-sharer/backer/2/website" target="_blank"><img src="https://opencollective.com/selection-sharer/backer/2/avatar.svg"></a>
<a href="https://opencollective.com/selection-sharer/backer/3/website" target="_blank"><img src="https://opencollective.com/selection-sharer/backer/3/avatar.svg"></a>
<a href="https://opencollective.com/selection-sharer/backer/4/website" target="_blank"><img src="https://opencollective.com/selection-sharer/backer/4/avatar.svg"></a>
<a href="https://opencollective.com/selection-sharer/backer/5/website" target="_blank"><img src="https://opencollective.com/selection-sharer/backer/5/avatar.svg"></a>
<a href="https://opencollective.com/selection-sharer/backer/6/website" target="_blank"><img src="https://opencollective.com/selection-sharer/backer/6/avatar.svg"></a>
<a href="https://opencollective.com/selection-sharer/backer/7/website" target="_blank"><img src="https://opencollective.com/selection-sharer/backer/7/avatar.svg"></a>
<a href="https://opencollective.com/selection-sharer/backer/8/website" target="_blank"><img src="https://opencollective.com/selection-sharer/backer/8/avatar.svg"></a>
<a href="https://opencollective.com/selection-sharer/backer/9/website" target="_blank"><img src="https://opencollective.com/selection-sharer/backer/9/avatar.svg"></a>
<a href="https://opencollective.com/selection-sharer/backer/10/website" target="_blank"><img src="https://opencollective.com/selection-sharer/backer/10/avatar.svg"></a>
<a href="https://opencollective.com/selection-sharer/backer/11/website" target="_blank"><img src="https://opencollective.com/selection-sharer/backer/11/avatar.svg"></a>
<a href="https://opencollective.com/selection-sharer/backer/12/website" target="_blank"><img src="https://opencollective.com/selection-sharer/backer/12/avatar.svg"></a>
<a href="https://opencollective.com/selection-sharer/backer/13/website" target="_blank"><img src="https://opencollective.com/selection-sharer/backer/13/avatar.svg"></a>
<a href="https://opencollective.com/selection-sharer/backer/14/website" target="_blank"><img src="https://opencollective.com/selection-sharer/backer/14/avatar.svg"></a>
<a href="https://opencollective.com/selection-sharer/backer/15/website" target="_blank"><img src="https://opencollective.com/selection-sharer/backer/15/avatar.svg"></a>
<a href="https://opencollective.com/selection-sharer/backer/16/website" target="_blank"><img src="https://opencollective.com/selection-sharer/backer/16/avatar.svg"></a>
<a href="https://opencollective.com/selection-sharer/backer/17/website" target="_blank"><img src="https://opencollective.com/selection-sharer/backer/17/avatar.svg"></a>
<a href="https://opencollective.com/selection-sharer/backer/18/website" target="_blank"><img src="https://opencollective.com/selection-sharer/backer/18/avatar.svg"></a>
<a href="https://opencollective.com/selection-sharer/backer/19/website" target="_blank"><img src="https://opencollective.com/selection-sharer/backer/19/avatar.svg"></a>
<a href="https://opencollective.com/selection-sharer/backer/20/website" target="_blank"><img src="https://opencollective.com/selection-sharer/backer/20/avatar.svg"></a>
<a href="https://opencollective.com/selection-sharer/backer/21/website" target="_blank"><img src="https://opencollective.com/selection-sharer/backer/21/avatar.svg"></a>
<a href="https://opencollective.com/selection-sharer/backer/22/website" target="_blank"><img src="https://opencollective.com/selection-sharer/backer/22/avatar.svg"></a>
<a href="https://opencollective.com/selection-sharer/backer/23/website" target="_blank"><img src="https://opencollective.com/selection-sharer/backer/23/avatar.svg"></a>
<a href="https://opencollective.com/selection-sharer/backer/24/website" target="_blank"><img src="https://opencollective.com/selection-sharer/backer/24/avatar.svg"></a>
<a href="https://opencollective.com/selection-sharer/backer/25/website" target="_blank"><img src="https://opencollective.com/selection-sharer/backer/25/avatar.svg"></a>
<a href="https://opencollective.com/selection-sharer/backer/26/website" target="_blank"><img src="https://opencollective.com/selection-sharer/backer/26/avatar.svg"></a>
<a href="https://opencollective.com/selection-sharer/backer/27/website" target="_blank"><img src="https://opencollective.com/selection-sharer/backer/27/avatar.svg"></a>
<a href="https://opencollective.com/selection-sharer/backer/28/website" target="_blank"><img src="https://opencollective.com/selection-sharer/backer/28/avatar.svg"></a>
<a href="https://opencollective.com/selection-sharer/backer/29/website" target="_blank"><img src="https://opencollective.com/selection-sharer/backer/29/avatar.svg"></a>


## Sponsors

Become a sponsor and get your logo on our README on Github with a link to your site. [[Become a sponsor](https://opencollective.com/selection-sharer#sponsor)]

<a href="https://opencollective.com/selection-sharer/sponsor/0/website" target="_blank"><img src="https://opencollective.com/selection-sharer/sponsor/0/avatar.svg"></a>
<a href="https://opencollective.com/selection-sharer/sponsor/1/website" target="_blank"><img src="https://opencollective.com/selection-sharer/sponsor/1/avatar.svg"></a>
<a href="https://opencollective.com/selection-sharer/sponsor/2/website" target="_blank"><img src="https://opencollective.com/selection-sharer/sponsor/2/avatar.svg"></a>
<a href="https://opencollective.com/selection-sharer/sponsor/3/website" target="_blank"><img src="https://opencollective.com/selection-sharer/sponsor/3/avatar.svg"></a>
<a href="https://opencollective.com/selection-sharer/sponsor/4/website" target="_blank"><img src="https://opencollective.com/selection-sharer/sponsor/4/avatar.svg"></a>
<a href="https://opencollective.com/selection-sharer/sponsor/5/website" target="_blank"><img src="https://opencollective.com/selection-sharer/sponsor/5/avatar.svg"></a>
<a href="https://opencollective.com/selection-sharer/sponsor/6/website" target="_blank"><img src="https://opencollective.com/selection-sharer/sponsor/6/avatar.svg"></a>
<a href="https://opencollective.com/selection-sharer/sponsor/7/website" target="_blank"><img src="https://opencollective.com/selection-sharer/sponsor/7/avatar.svg"></a>
<a href="https://opencollective.com/selection-sharer/sponsor/8/website" target="_blank"><img src="https://opencollective.com/selection-sharer/sponsor/8/avatar.svg"></a>
<a href="https://opencollective.com/selection-sharer/sponsor/9/website" target="_blank"><img src="https://opencollective.com/selection-sharer/sponsor/9/avatar.svg"></a>


