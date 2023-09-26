(function($,sr){

  // debouncing function from John Hann
  // http://unscriptable.com/index.php/2009/03/20/debouncing-javascript-methods/
  var debounce = function (func, threshold, execAsap) {
      var timeout;

      return function debounced () {
          var obj = this, args = arguments;
          function delayed () {
              if (!execAsap)
                  func.apply(obj, args);
              timeout = null;
          };

          if (timeout)
              clearTimeout(timeout);
          else if (execAsap)
              func.apply(obj, args);

          timeout = setTimeout(delayed, threshold || 100);
      };
  }
  // smartresize 
  jQuery.fn[sr] = function(fn){  return fn ? this.bind('resize', debounce(fn)) : this.trigger(sr); };

})(jQuery,'smartresize');


// JavaScript code to open and close the drawer
document.addEventListener('DOMContentLoaded', function () {
    var drawer = document.getElementById('drawer-right');
    var toggleButton = document.querySelector('.toggleDrawer');

    toggleButton.addEventListener('click', function (e) {
        e.preventDefault();
        drawer.classList.toggle('open');
    });
});




(function(){

	$wrapper = $('#wrapper');
	$drawerRight = $('#drawer-right');
	$services = $('#services');
	$blog = $('#blog');
	$contact = $('#contact');


	///////////////////////////////
	// Set Home Slideshow Height
	///////////////////////////////

	/*function setHomeBannerHeight() {
		var windowHeight = jQuery(window).height();	
		jQuery('#header').height(windowHeight);
	}*/

	///////////////////////////////
	// Center Home Slideshow Text
	///////////////////////////////

	/*function centerHomeBannerText() {
			var bannerText = jQuery('#header > .center');
			var bannerTextTop = (jQuery('#header').actual('height')/2) - (jQuery('#header > .center').actual('height')/2) - 40;		
			bannerText.css('padding-top', bannerTextTop+'px');		
			bannerText.show();
	}*/



	///////////////////////////////
	// SlideNav
	///////////////////////////////

	function setSlideNav(){
		jQuery(".toggleDrawer").click(function(e){
			//alert($wrapper.css('marginRight'));
			e.preventDefault();

			if($wrapper.css('marginLeft')=='0px'){
				$drawerRight.animate({marginRight : 0},500);
				$wrapper.animate({marginLeft : -300},500);
				$services.animate({marginLeft : -300},500);
				$blog.animate({marginLeft : -300},500);
				$contact.animate({marginLeft : -300},500);

			}
			else{
				$drawerRight.animate({marginRight : -300},500);
				$wrapper.animate({marginLeft : 0},500);
				$services.animate({marginLeft : 0},500);
				$blog.animate({marginLeft : 0},500);
				$contact.animate({marginLeft : 0},500);
			}
			
		})
	}

	function setHeaderBackground() {		
		var scrollTop = jQuery(window).scrollTop(); // our current vertical position from the top	
		
		if (scrollTop > 300 || jQuery(window).width() < 700) { 
			jQuery('#header .top').addClass('solid');
		} else {
			jQuery('#header .top').removeClass('solid');		
		}
	}




	///////////////////////////////
	// Initialize
	///////////////////////////////


	setSlideNav();
	/*jQuery.noConflict();
	setHomeBannerHeight();
	centerHomeBannerText();*/
	setHeaderBackground();

	//Resize events
	/*jQuery(window).smartresize(function(){
		setHomeBannerHeight();
		centerHomeBannerText();
		setHeaderBackground();
	});*/


	//Set Down Arrow Button
	jQuery('#scrollToContent').click(function(e){
		e.preventDefault();
		jQuery.scrollTo("#portfolio", 1000, { offset:-(jQuery('#header .top').height()), axis:'y' });
	});

	jQuery('nav > ul > li > a').click(function(e){
		e.preventDefault();
		jQuery.scrollTo(jQuery(this).attr('href'), 400, { offset:-(jQuery('#header .top').height()), axis:'y' });
	})

	jQuery(window).scroll( function() {
	   setHeaderBackground();
	});

// POPUP JOB WINDOW
	(function () {
	  var $modal = document.getElementById('myModal');
	  var $pixelArtistLink = document.getElementById('pixelArtistLink');
	  var $closeBtn = document.getElementsByClassName('close')[0];

	  // Function to open the modal
	  function openModal() {
	    $modal.style.display = 'block';
	  }

	  // Function to close the modal
	  function closeModal() {
	    $modal.style.display = 'none';
	  }

	  // Attach click event listeners
	  $pixelArtistLink.addEventListener('click', function (e) {
	    e.preventDefault();
	    openModal();
	  });

	  $closeBtn.addEventListener('click', function () {
	    closeModal();
	  });

	  // Close the modal if the user clicks outside of it
	  window.addEventListener('click', function (e) {
	    if (e.target === $modal) {
	      closeModal();
	    }
	  });
	})();

		// Define a variable to store the current language
	var currentLanguage = 'en'; // Default language is English

	// Function to load the language JSON file and update content
	function loadLanguage(language) {
	  $.getJSON(language + '.json', function (data) {
	    $('[data-translate]').each(function () {
	      var key = $(this).data('translate');
	      if (data[key]) {
	        $(this).text(data[key]);
	      }
	    });
	  });
	}

	// Function to toggle between languages
	function toggleLanguage() {
	  if (currentLanguage === 'en') {
	    currentLanguage = 'fr';
	  } else {
	    currentLanguage = 'en';
	  }
	  loadLanguage(currentLanguage);
	}

	// Attach a click event listener to the language toggle button
	$('.fr-toggle').on('click', function (e) {
	  e.preventDefault();
	  console.log('asdfasdf');
	  toggleLanguage();
	});

	// Load the initial language
	loadLanguage(currentLanguage);


})();