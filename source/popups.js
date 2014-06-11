$(document).ready(function(){ 
        
        // Get name and description from img tags and build pic-caption divs with them.
		var thumbs = $("ul#tiles img");	
        var blurbs = $("#blurbs div.popup");
        
 		for (var i = 0, ii = thumbs.length; i < ii; i++){
            var caption = thumbs[i].title;
		    var imgname = $(thumbs[i]).attr('src');
            var imgID = imgname.substr(7, imgname.length).replace(".jpg","");
            var imgtitle = imgID.replace(/_/g, " ");
          
		    if (thumbs[i].src && thumbs[i].src.length > 0) 
			   {
                $(thumbs[i]).wrap('<li class="photos"><div class="wrapper"><a href="#' + imgID + '" id="' + imgID + '-pic" rel="popup"></a></div></li>');
                
                 if (thumbs[i].title && thumbs[i].title.length > 0) {
                
                    $(thumbs[i]).after('<div class="caption">' + imgtitle + ":\n" + caption + '</div></a></div></li>');
                } else {
                
                    $(thumbs[i]).after('<div class="caption">' + imgtitle + "\n" + caption + '</div></a></div></li>');
                
                };    
                
                // Add IDs and <h3> titles to blurbs from img attributes
                $(blurbs[i]).attr("id", imgID);
                $(blurbs[i]).find('img').after("<h3>" + imgtitle + "</h3><h4>" + caption + "</h4>");
			               
               };           
       };
       		 			 
	  // Show photo caption on thumbnail hover
      $('.wrapper').mouseenter(function(){
			$(this).find('img').animate({opacity: ".5"}, 100);		
			$(this).find('.caption').fadeIn(100);			
		});				
	  $('.wrapper').mouseleave(function(){
			$(this).find('img').animate({opacity: "1.0"}, 100);					
			$(this).find('.caption').fadeOut(100);
		}); 
	
      // Fancybox popup call    
	  $("a[rel^='popup']").fancybox({
		maxWidth	: 580,
		maxHeight	: 700,
		fitToView	: false,
		width		: '60%',
		height		: '80%',
		autoSize	: false,
		closeClick	: false,
		openEffect	: 'none',
		closeEffect	: 'none'
	});    
  })