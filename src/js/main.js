//will give back a promise. //GETs content of one file
// jQuery.ajax('../api/github/users/octocat.json').then(function(data){
//
//   console.log(arguments);
//
// });



$('.tab').on('click', function(event){
    event.preventDefault(); //stop browser to take action for clicked

  var active = $(this).attr('href'); //targets active tab

  $(this).addClass('active').removeClass('hide').siblings().removeClass('active').addClass('hide');

  $('#tab2').show().siblings().hide();


  // $('header.tabContent section:eq(1)').show().siblings().hide(); //shows current tab/hides other tabs



}); // END TAB LINKS


// function tabContent () {
//   $('#tab1').show().siblings().hide();
//   $('#tab2').show().siblings().hide();
//   $('#tab3').show().siblings().hide();
// }
