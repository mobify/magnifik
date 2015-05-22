## Usage

    <!-- the magnifik -->
    <a class="magnifik" href="big.jpg">
        <!-- the thumbnail -->
        <img src="thumbnail.jpg">
    </a>

    <!-- include zepto.js or jquery.js -->
    <script src="zepto.js"></script>
    <!-- include magnifik.js -->
    <script src="magnifik.js"></script>
    <!-- construct the magnifik -->
    <script>$('a.magnifik').magnifik()</script>

The element passed to `.magnifik()` should reference a high resolution
image.

When the thumbnail is clicked, the high resolution image will be shown.
Clicking on image again will dimiss it.

## Methods

### .magnifik(options)

Initializes the magnifik with the options (an `object`) given.

    $('.magnifik').magnifik({
        classPrefix: 'm-'
    });

### .magnifik('open')

Opens magnifik.

    $('.magnifik').magnifik('open');

### .magnifik('close')

Closes magnifik.

    $('.magnifik').magnifik('close');

### .magnifik('unbind')

Removes event handlers from the magnifik context.

    $('.magnifik').magnifik('unbind');

### .magnifik('bind')

Restores event handlers for the magnifik context.

    $('.magnifik').magnifik('bind');

### .magnifik('destroy')

Unbinds the events from the magnifik context, and removes it from the DOM.

    $('.magnifik').magnifik('destroy');


## Configuration

Below are the options available in the configuration object:

| Name          | Default        | Description                               |   
|---------------|----------------|-------------------------------------------|
| classPrefix   | `"m-"`         |This prefix is inserted before all class references for conflict avoidance. For example, default close class will be `m-close`. |
| stage         | <body> element | DOM node that will receive generated magnifik markup. |
| classNames    | Object, see below | Contains class names for various parts of magnifik. Classes can be overriden individually. |
| ratio         | `2`            | Zoomed in image is magified to be `ratio` times bigger than the stage. |
| seekImage     | `true`         | If thumbnail image is not found in the anchor element used as context, Magnifik will go up in DOM tree until it finds nearby image. Set to `false` to restrict image lookups to stay within context |
| clickCloses   | `true`         | Specifies if clicking or tapping in place on the magnified image should close magnified view |
| activationEvent | `"click"` | Override to use alternate event for all magnifik control interactions |
| canvasStyle  | Object, see below | Extra CSS properties to be applied to canvas. You can delete default properties by setting their value to `undefined`. | 
| imageStyle   | Object, see below | Extra CSS properties to be applied to low-res and high-res magnified image. You can delete default properties by setting their value to `undefined`. |
| stageHTML | Function | Generates HTML of magnified state of magnifik module. See examples to see how to change it |
| globalStyle | Function | Generates CSS for magnifik acting upon <body>. Typically should be left as-is. |

## Classes

| Name        | Class       | Description                                                                         |           
|-------------|-------------|-------------------------------------------------------------------------------------|
| zooming | m-`zooming` | Applied to stage (usually body element) when magnifik is active |
| close | m-`close` | Should be added to custom close buttons within magnifik markup |
| control | m-`magnifikControl` | Internal, added to all top-level elements injected by magnifik |
| canvas | m-`magnifikCanvas` | Applied to div wrapper that contains both low and high resolution images |
| thumb | m-`magnifikThumb` | Applied to low resolution (thumbnail) image |
| full | m-`magnifikFull` | Applied to high resolution image |

## Default styles

These are the default styles applied to magnified image(s) and their container.

### canvasStyle
    { 
        position: 'absolute'
      , width: '100%'
      , height: '100%'
      , overflow: 'auto'
    }

### imageStyle
    { 
        position: 'absolute'
      , top: '0'
      , left: '0'
      , maxWidth: 'none'
      , maxHeight: 'none'        
    }

## Events

The magnifik emits the following events:

| Name               | Description                               |   
|--------------------|-------------------------------------------|
| magnifik:opening   | Fired before magnifik starts opening      |
| magnifik:open      | Fired when magnifik is fully open         |
| magnifik:closing   | Fired before magnifik starts closing      |
| magnifik:close     | Fired after magnifik finishes closing     |

<!--

## Limitations

Magnifik relies on click event for activation and deactivation. This results 
in about ~300ms delay in iOS, as Mobile Safari waits to ensure that event 
in question is a single tap rather than built-in page zooming double tap. 
We do not bundle a quick tap implementation with magnifik, but you can 
attach a tap event manually. Here is an example of custom binding that 
uses [jQuery tappable](https://github.com/aanand/jquery.tappable.js/blob/master/jquery.tappable.js):

    var el = $('a.magnifik').magnifik();
    el.tappable(function() {
        $(this).magnifik('show');
    });
    
Other quick touch implementations can be used in similar ways.

-->
