//will give back a promise. //GETs content of one file
// jQuery.ajax('../api/github/users/octocat.json').then(function(data){
//
//   console.log(arguments);
//
// });

// $.getJSON('#cmaubanAPI', {
//     tags:
//     });


// check to see if it gets data from file
var cmauban = $.getJSON('../api/github/users/cmauban.json', function(data){
  console.log(arguments);
  console.log(data.name);
});

var cmaubanAPI = '../api/github/users/cmauban.json';
//
// $.getJSON(cmauban, function (data){
//   $.each(data, function() {
//   });
//
// });

$.ajax ({
  url: cmaubanAPI,
  dataType: 'json',
  success: function (data) {

    $('#name').text(data.name);
    $('#login').text(data.login);
    $('#email').text(data.email);
    $('#created').text(data.created_at);
  }
});


//#cmaubanAPI = profile HTML

$('#cmaubanAPI').get();
console.log($cmaubanAPI.get());

// _.templateSettings.interpolate = /{{([\s\S]+?)}}/g;
// var compiled = _.template('hello {{ user }}!');
// compiled({ 'user': 'mustache' });
//
//
//
//
// var compiled = _.template('<template><%- value %></template>');
// compiled({ 'value': '<script>' });






$('.tabs').on('click', function(event){
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
