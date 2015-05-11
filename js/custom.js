(function ($) {
  
  if(!$('html').hasClass('lt-ie9')) {
    var wow = new WOW(
      {
        boxClass:     'wow',      // animated element css class (default is wow)
        animateClass: 'animated', // animation css class (default is animated)
        offset:       0,          // distance to the element when triggering the animation (default is 0)
        mobile:       true,       // trigger animations on mobile devices (default is true)
        live:         true        // act on asynchronously loaded content (default is true)
      }
    );
    wow.init();
  }

	$(window).load(function(){
      $("#navigation").sticky({ topSpacing: 0 });
		  $("#preloader").delay(100).fadeOut("slow");
		  $("#load").delay(100).fadeOut("slow");                  
      //$("#navigation-sticky-wrapper").removeAttr("style");
      var height = $(".navbar-custom ul.nav li").length * 30;
      if(height > 0) {
          $("#navigation-sticky-wrapper").attr("style", "height:"+height+"px;");
      }
    });
	//jQuery for page scrolling feature - requires jQuery Easing plugin
	$(function() {
		$('.navbar-nav li a').bind('click', function(event) {
			var $anchor = $(this);
			$('html, body').stop().animate({
				scrollTop: $($anchor.attr('href')).offset().top
			}, 1500, 'easeInOutExpo');
			event.preventDefault();
		});
		$('.page-scroll a').bind('click', function(event) {
			var $anchor = $(this);
			$('html, body').stop().animate({
				scrollTop: $($anchor.attr('href')).offset().top
			}, 1500, 'easeInOutExpo');
			event.preventDefault();
		});
	});
	
	//parallax
  if ($('.parallax').length) {
			$(window).stellar({
				responsive:true,
                scrollProperty: 'scroll',
                parallaxElements: false,
                horizontalScrolling: false,
                horizontalOffset: 0,
                verticalOffset: 0
      });
  }

  var i = 0, len = execQue.length;
  for(;i < len;i++) {
    execQue[i]();
  }

  (function(){var j=function(a,b){return window.getComputedStyle?getComputedStyle(a).getPropertyValue(b):a.currentStyle[b]};var k=function(a,b,c){if(a.addEventListener)a.addEventListener(b,c,false);else a.attachEvent('on'+b,c)};var l=function(a,b){for(key in b)if(b.hasOwnProperty(key))a[key]=b[key];return a};window.fitText=function(d,e,f){var g=l({'minFontSize':-1/0,'maxFontSize':1/0},f);var h=function(a){var b=e||1;var c=function(){if(a != undefined && a.style != undefined) a.style.fontSize=Math.max(Math.min(a.clientWidth/(b*10),parseFloat(g.maxFontSize)),parseFloat(g.minFontSize))+'px'};c();k(window,'resize',c)};if(d != undefined && d.length)for(var i=0;i<d.length;i++)h(d[i]);else h(d);return d}})();
fitText(document.getElementById('title'), 1)
  
})(jQuery);
