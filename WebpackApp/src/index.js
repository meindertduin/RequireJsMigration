 // initialization ...
 require(['jquery', './app/views/AppView'], function($, AppView) {
     $(function(){
         new AppView().render();
     });
 });