$(document).ready(function () {

  $(".why__hidden-blocks").hide();
  
  $("#readMore").click(function() {
      $(".why__hidden-blocks").slideToggle( "slow" );
    });
})