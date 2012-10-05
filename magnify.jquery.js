/*!
 * jQuery magnify
 * Author: Kolatzek
 * Licensed under the MIT license
 */

(function( $ ) {
	
	 var settings = {
		  preload: true,
			imgDivClass: 'fullIMG',
			maxX: 450,
			maxY: 300
		};
		var methods = {
    init : function( options ) {
			return this.each(function(){
				$.extend(settings, options);
				if($(this).children('a').length != 0) {
					$(this).bind('mouseenter.magnify', methods.showFullImg);
					$(this).bind('mouseleave.magnify', methods.hideFullImg);
					if(settings.preload){
						var img = $(this).children('a').first().attr('href');
						var tmpimg = '<img src="'+img+'" id="tmp_img_magnify_"/>';
						$('body').append(tmpimg);
						$('#tmp_img_magnify_').remove();
					}
				}
			});
		},
		destroy : function( ) {
			return this.each(function(){
				$(window).unbind('.magnify');
			})
		},
    showFullImg : function( event ) {
			$.extend(settings, {});
			var img = $(event.target).children('a').first().attr('href');
			if(img) {
				var id = $(event.target).attr('id');
				if(!id) {
					id = $(event.target).children('a').first().attr('href').replace(/[^a-zA-Z]/g, '');
					$(event.target).attr('id', id)
				}
				
				if( $('#'+id+'_prev').length == 0 ) {
					var newDIV = $('<div class="'+settings.imgDivClass+'" id="'+id+'_prev"><img src="'+img+'" style="max-width: '+settings.maxX+'; max-height: '+settings.maxY+';"/></div>').css('position','absolute').hide();
					$('#'+id).append(newDIV);
				}
				
				var pos = $(event.target).offset();
				if( (pos.left + $('#'+id).outerWidth(true) + $('#'+id+'_prev').outerWidth(true)) > $(document).outerWidth(true)) {
					pos.left=pos.left-$('#'+id+'_prev').outerWidth(true);
				}
				else {
					pos.left=pos.left+$('#'+id).outerWidth(true);
				}
				$('#'+id+'_prev').css('top', Math.round(pos.top)).css('left', Math.round(pos.left));
				$('#'+id+'_prev, #'+id+'_prev img').fadeIn();
			}
    },
    hideFullImg : function( event ) {
			$.extend(settings, {});
			$('.'+settings.imgDivClass).hide();
    }
  };
	
	$.fn.magnify = function(method){
		if ( methods[method] ) {
				return methods[method].apply( this, Array.prototype.slice.call( arguments, 1 ));
		} else if ( typeof method === 'object' || ! method ) {
				return methods.init.apply( this, arguments );
		} else {
				$.error( 'Method ' + method + ' does not exist on jQuery.myplugin' );
		}
	}
})( jQuery );