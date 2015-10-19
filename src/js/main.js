// will give back a promise. //GETs content of one file
// jQuery.ajax('../api/github/users/octocat.json').then(function(data){
//
//   console.log(arguments);
//
// });



// check to see if it gets data from file
var cmauban = $.getJSON('../api/github/users/cmauban.json', function(data){
  console.log(arguments);
  console.log(data.name);
});



var cmaubanAPI = '../api/github/users/cmauban.json';

$.getJSON('../api/github/users/cmauban.json')
// window.fetch(cmaubanAPI)
    .then(function(data){

    _.templateSettings.interpolate = /{{([\s\S]+?)}}/g;
    var profileTpl = _.template($('.details-user template').html());

    // $('.details-user').append(profileTpl({
    //   company: 'the internet',
    //   email: 'octocat@github.com',
    //   blog: 'http://blog.example.com',
    //   created_at: 'today!'
    // }));

    $('.details-user').append(profileTpl(data));

});




// $.ajax ({
//   url: cmaubanAPI,
//   dataType: 'json',
//   success: function (data) {
//
//     $('.name').text(data.name);
//     $('.login').text(data.login);
//     $('li:eq(2)').text(data.email);
//     $('li:eq(4)').text(data.created_at);
//
//   }
//
// });

// _.templateSettings.interpolate = /{{([\s\S]+?)}}/g;
// var complied = _.template('hello {{name}}!');
//  compiled({ 'name': 'camille' });

// function displayData (cmaubanAPI) {
//   var template = $('#name').html();
//   var complied_html = _.template(template)({
//       cmaubanAPI:data
//   });
//   $('body').append(compiled_html);
//
// $(function(){
//   displayData(cmaubanAPI.name);
// });

// var compiled = _.template('<template><%- value %></template>');
// compiled({ 'value': '<script>' });



//TABS

  $('.tabs > a').on('click', function(event){
    event.preventDefault(); //stop browser to take action for clicked

    var active = $(this).attr('href'); //targets active tab and grabs that href

    $(this).add(active) // if use this, remove both each functions
      .addClass('active')
    .siblings()
      .removeClass('active');


    }).filter('[href="#panel-repo"]')
      .trigger('click');
// }); // END document.ready
// }) (jQuery.noConflict())


;(function(){ //IIFE
  var app = angular.module('TIY-GitHub', [ ]);
    // .controller('GenerticController', function($http, $scope){
    app.run(function($http, $rootScope) {
      $rootScope.name = 'The Octocat';
      $rootScope.login = 'octocat';

      $http.get('../api/github/users/cmauban.json')
        .then(function(response){
          $rootScope.user = response.data;

          console.log(arguments);
        });
    });

})(); // END IIFE
