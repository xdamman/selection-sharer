# share-selection

Medium like popover menu to share on Twitter or by email any text selected on the page

![](http://f.cl.ly/items/1i0v3l2b3P342D2b302J/share-selection.png)

## How to use

This script requires jQuery so make sure you have it loaded on your page.

Load the stylesheet in the `<head>` of your page

    <link rel="stylesheet" href="share-selection.css" />
    
And the Javascript at the bottom of your page near the closing `</body>` tag

    <script src="share-selection.js" async></script>

That's it. 

## Notes 

- Only `<p>` paragraphs are taken into consideration
- Images are included inline in the CSS as SVG (perfect for Retina displays and loading time)

## Contribute

This is still early days so there is still a lot to do and I welcome contributions. 

TODO:

- Support for different themes
- Tests
- Remove dependency on jQuery