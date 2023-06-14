var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

			$(document).ready(function() {

				$('a.panel').click(function () {

					$('a.panel').removeClass('selected');
					$(this).addClass('selected');
		
					current = $(this);
		
					$('#wrapper').scrollTo($(this).attr('href'), 800);		
			
					return false;
				});

				// $(window).resize(function () {
				// 	resizePanel();
				// });
	
			});

}
/*
     FILE ARCHIVED ON 05:20:04 May 18, 2014 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 17:38:19 Aug 12, 2020.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  exclusion.robots.policy: 0.246
  PetaboxLoader3.resolve: 383.28
  esindex: 0.022
  load_resource: 2268.713
  exclusion.robots: 0.262
  CDXLines.iter: 27.494 (3)
  captures_list: 814.116
  RedisCDXSource: 47.172
  PetaboxLoader3.datanode: 2299.905 (4)
  LoadShardBlock: 734.779 (3)
*/