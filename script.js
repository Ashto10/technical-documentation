(function() {
  'use strict';

  hljs.initHighlightingOnLoad();

  $(function() {
    $('#main-doc .main-section').each(function() {
      var nameOfSection = $(this).children('header').html();
      var cleanedName = nameOfSection.replace(/\s/g, '_');
      $(this).attr('id', cleanedName);

      var $link = $("<a>", {href: '#' + cleanedName, "class": "nav-link", "html": nameOfSection});    
      $('#navbar #navigation-links').append($link);
    });

    $('#menu-drawer').click(function() {
      $('#navbar').toggleClass('opened');
    });
  });
}());