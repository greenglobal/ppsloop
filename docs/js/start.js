 $(window).scroll(function() {
   let scrollTop = $(window).scrollTop();
   let fromWidgetToTop = $('#widgetTechTeam').offset().top;
   if(!PPSW.isStarted() &&  scrollTop > fromWidgetToTop) {
     PPSW.start();
   }
 });

