//will give back a promise. //GETs content of one file
// jQuery.ajax('../api/github/users/octocat.json').then(function(data){
//
//   console.log(arguments);
//
// });



$('.tabs').on('click', function(event){
    event.preventDefault(); //stop browser to take action for clicked

  var active = $(this).attr('href'); //targets active tab

  $('#tab2').addClass('active').siblings().removeClass('active').addClass('hide');


  $('header.tabContent section:eq(2)').show().siblings().hide();

  // $('header.tabContent section:eq(1)').show().siblings().hide(); //shows current tab/hides other tabs



}); // END TAB LINKS
