$(document).ready(function() {
    $('#current-center').magnificPopup({
        delegate: 'a', // child items selector, by clicking on it popup will open
        gallery: {
            // options for gallery
            enabled: true
          },
        type: 'image'
        // other options
      });
  });