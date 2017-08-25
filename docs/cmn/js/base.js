(function() {
  $(function() {
    var telLink, tt, w;
    w = $(window);
    $('#sp-menu').mmenu({
      offCanvas: {
        position: 'right',
        pageSelector: "#spBtn"
      }
    });
    telLink = function() {
      var tel, ww;
      ww = $(window).width();
      if (ww > 640) {
        tel = $('a[href^="tel:"]');
        return tel.each(function() {
          $(this).attr("href", "javascript:void(0)");
          $(this).css({
            "cursor": "default"
          });
          return console.log(ww + "u");
        });
      }
    };
    telLink();
    tt = $("#totop");
    return w.scroll(function() {
      var y;
      y = window.pageYOffset;
      if (y > 200) {
        return tt.fadeIn();
      } else {
        return tt.fadeOut();
      }
    });
  });

}).call(this);

