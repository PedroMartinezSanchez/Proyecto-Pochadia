$(document).ready(function(){
    $("#uno").mouseenter(function(){
      $("#uno").css("display", "inline").fadeIn(2000);
      $("#uno").css("color", "yellow");
        });

    $("#dos").mouseenter(function(){
        $("#dos").css("display", "inline").fadeIn(2000);
        $("#dos").css("color", "yellow");
  
        $("#uno").css("display", "inline").fadeIn(2000);
        $("#uno").css("color", "yellow");
      });

    $("#tres").mouseenter(function(){
        $("#tres").css("display", "inline").fadeIn(2000);
        $("#tres").css("color", "yellow");
  
        $("#uno").css("display", "inline").fadeIn(2000);
        $("#uno").css("color", "yellow");
        $("#dos").css("display", "inline").fadeIn(2000);
        $("#dos").css("color", "yellow");
      });

      $("#cuatro").mouseenter(function(){
        $("#cuatro").css("display", "inline").fadeIn(2000);
        $("#cuatro").css("color", "yellow");
  
        $("#uno").css("display", "inline").fadeIn(2000);
        $("#uno").css("color", "yellow");
        $("#dos").css("display", "inline").fadeIn(2000);
        $("#dos").css("color", "yellow");
        $("#tres").css("display", "inline").fadeIn(2000);
        $("#tres").css("color", "yellow");     
      });

      $("#cinco").mouseenter(function(){
        $("#cinco").css("display", "inline").fadeIn(2000);
        $("#cinco").css("color", "yellow");
  
        $("#uno").css("display", "inline").fadeIn(2000);
        $("#uno").css("color", "yellow");
        $("#dos").css("display", "inline").fadeIn(2000);
        $("#dos").css("color", "yellow");
        $("#tres").css("display", "inline").fadeIn(2000);
        $("#tres").css("color", "yellow");
        $("#cuatro").css("display", "inline").fadeIn(2000);
        $("#cuatro").css("color", "yellow");
      });

        /*$('#uno').mouseout(function()
        {
            $('#uno').css("color", "white");
            $('#dos').css("color", "white");
            $('#tres').css("color", "white");
            $('#cuatro').css("color", "white");
            $('#cinco').css("color", "white");
        });

        $('#dos').mouseout(function()
        {
            $('#uno').css("color", "white");
            $('#dos').css("color", "white");
            $('#tres').css("color", "white");
            $('#cuatro').css("color", "white");
            $('#cinco').css("color", "white");
        });

        $('#tres').mouseout(function()
        {
            $('#uno').css("color", "white");
            $('#dos').css("color", "white");
            $('#tres').css("color", "white");
            $('#cuatro').css("color", "white");
            $('#cinco').css("color", "white");
        });

        $('#cuatro').mouseout(function()
        {
            $('#uno').css("color", "white");
            $('#dos').css("color", "white");
            $('#tres').css("color", "white");
            $('#cuatro').css("color", "white");
            $('#cinco').css("color", "white");
        });

        $('#cinco').mouseout(function()
        {
            $('#uno').css("color", "white");
            $('#dos').css("color", "white");
            $('#tres').css("color", "white");
            $('#cuatro').css("color", "white");
            $('#cinco').css("color", "white");
        });*/
          $('[data-toggle="offcanvas"]').click(function () {
              $('.sidebar').toggleClass('active');
              $('.overlay').toggleClass('active');
              return true;
          });
          $('.btn-group-fab').on('click', '.btn', function() {
              $('.btn-group-fab').toggleClass('active');
          });
      
          $('.btn-group-fab').on('click', '.btn-warning', function() { 
              scrollToTop();
          });
          $('.btn-group-fab').on('click', '.btn-info', function() {
              $('#faqlist .collapse').collapse('hide');
              scrollToTop();
          });
          $('.btn-group-fab').on('click', '.btn-primary', function() { 
              $('#faqlist .collapse').collapse('show');
              scrollToTop();
          });
      function scrollToTop (duration=1000) {
          // cancel if already on top
          if (document.scrollingElement.scrollTop === 0) return;
      
          const totalScrollDistance = document.scrollingElement.scrollTop;
          let scrollY = totalScrollDistance, oldTimestamp = null;
          function step (newTimestamp) {
              if (oldTimestamp !== null) {
                  // if duration is 0 scrollY will be -Infinity
                  scrollY -= totalScrollDistance * (newTimestamp - oldTimestamp) / duration;
                  if (scrollY <= 0) return document.scrollingElement.scrollTop = 0;
                  document.scrollingElement.scrollTop = scrollY;
              }
              oldTimestamp = newTimestamp;
              window.requestAnimationFrame(step);
          }
          window.requestAnimationFrame(step);
      }
  });