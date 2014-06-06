### A template for a thumbnail grid with popups

This template creates a grid of thumbnails with on-hover captions. When you click on a thumbnail, it brings up a lightbox-style popup with more information.

[See it in action here](http://www.montrealgazette.com/news/interactives/couillard-cabinet/index.html).

Just add `img` tags with descriptive file names and the desired caption as the `title` attribute.

The jQuery does most of the work of wrapping elements in their divs and pulling caption info from the file names.

##### Dependencies
You'll need:
1. jQuery
2. [FancyBox](http://fancyapps.com/fancybox/)

*Note: FancyBox is free for non-commercial use. For use in commercial websites, you must [pay a licence](http://sites.fastspring.com/fancyapps/product/store).*

##### Instructions

First, add your dependencies in the head:

```html

<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js"></script>
<link rel="stylesheet" href="css/popups.css" type="text/css" media="screen" />
<link rel="stylesheet" href="source/jquery.fancybox.css?v=2.1.5" type="text/css" media="screen" />
<script type="text/javascript" src="source/jquery.fancybox.pack.js?v=2.1.5"></script>

```

In your body, create a `ul` with `id="tiles"` and add each `img` tag. These will be your thumbnails.

* The images must be jpegs and stored in a folder `img/tn`.
* The optimal size is 185px x 185px, but this can be changed in the CSS.
* The file name should be short with words separated by underscores. It will be the first part of the caption and also the `id` of its corresponding popup div.
* The title should be a few words, and it will be the second part of the thumbnail caption.

Example:

```html
<img src="img/tn/Limestone_bricks.jpg" title="What built Montreal"/>
```

Close your `ul` and create a `div` with `id="blurbs"`. In that div, create another div with `class="popup"`. This will be hidden in your page, and only appear in the FancyBox popup. You can add pretty much any content to it. 

Example:

```html

<div class="popup" >
<img src="img/limestone.jpg" />
<p>Many of Montreal’s most famous buildings (Windsor Station, Notre-Dame Basilica, and the Redpath Museum) are constructed with a very distinct looking limestone commonly referred to as Montreal greystone. Formed millions of years ago near the surface on the eastern end of the island, it was the material of choice for the city’s early property developers.<br />
</p>
</div>

```

Make one of these popup divs for each of the thumbnails you created earlier. ** These divs must be in the same order as the thumbnails. Their id's will be the name of the thumbnail image files and this is how they'll be connected. **

The jQuery script will also add the image file name as an `<h3>` element and the caption as `<h4>` below it.

That's all.
