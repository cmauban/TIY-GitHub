//will give back a promise. //GETs content of one file
// jQuery.ajax('../api/github/users/octocat.json').then(function(data){
//
//   console.log(arguments);
//
// });



$('.tabs').on('click', function(event){

  var active = $('#repo').attr('href');

  $(this).addClass('active').siblings().removeClass('active').addClass('hide');
  $('header.tabContent section:eq(1)').show().siblings().hide();

event.preventDefault();
}); // END TAB LINKS
