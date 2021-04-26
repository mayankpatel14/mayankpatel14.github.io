!(function($) {
    "use strict";
  
    // Preloader
    $(window).on('load', function() {
      if ($('#preloader').length) {
        $('#preloader').delay(125).fadeOut('slow', function() {
          $(this).remove();
        });
      }
    });
  
  })(jQuery);