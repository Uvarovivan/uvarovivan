$(function(){
            $.stellar({
                horizontalScrolling: false,
            });
        });

$(function(){
    var url = window.location.pathname, 
        urlRegExp = new RegExp(url == '/' ? window.location.origin + '/?$' : url.replace(/\/$/,'')); // create regexp to match current url pathname and remove trailing slash if present as it could collide with the link in navigation in case trailing slash wasn't present there
        // now grab every link from the navigation
        $('.menu a').each(function(){
            // and test its normalized href against the url pathname regexp
            if(urlRegExp.test(this.href.replace(/\/$/,''))){
                $(this).addClass('active');
            }
        });
});

var h_hght = 480; // высота шапки
  var h_mrg = 0;     // отступ когда шапка уже не видна
    window.load=$(".fixed_menu").fadeOut(0);
  $(function(){
   $(window).scroll(function(){
      var top = $(this).scrollTop();
      var elem = $('.fixed_menu');
      if (top+h_mrg < h_hght) {
        elem.fadeOut(0);
       elem.css('top', (h_hght-top));
      } else {
        elem.fadeIn(250, "swing");
       elem.css('top', h_mrg);
      }
    });
  });