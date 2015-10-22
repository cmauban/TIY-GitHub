//TABS
$('.tabs').each(function(){ //iterates through each ahref
  $('.tabContent').each(function(){ //iterates through the corresponding content


  $('a').on('click', function(event){
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
  });
});





;(function(){ //IIFE
  var app = angular.module('TIY-GitHub', [ ]);
    // .controller('GenerticController', function($http, $scope){
    app.run(function($http, $rootScope) {

      $http.get('../api/github/users/cmauban.json')
        .then(function(response){
          $rootScope.user = response.data;

          console.log(arguments);
        });


    });

    app.run(function($http, $rootScope) {

      $http.get('../api/github/users/cmauban/repositories.json')
        .then(function(response){
          $rootScope.repos = response.data;
          console.log(response.data);
        });
    });

    //FETCHES CACHED COMMENTS FROM LOCAL COMMENTS.JSON
    // app.run(function($http, $rootScope) {
    //
    //   $http.get('../api/github/users/cmauban/comments.json')
    //     .then(function(response){
    //       $rootScope.comments = response.data;
    //     });
    // });

    //FETCHES COMMENTS FROM GITHUB API
    app.run(function($http, $rootScope) {

      $http.get('https://api.github.com/repos/TIY-Durham/2015-FALL-FEE/issues/503/comments')
        .then(function(response){
          $rootScope.comments = response.data;

        });
    });

    app.run(function($http, $rootScope) {

      $http.post('https://api.github.com/repos/TIY-Durham/2015-FALL-FEE/issues/503')
        .then(function(response){

          $rootScope.comment = {};

          // $rootScope.comment = {};
          // $rootScope.add = response.data;
        });
    });


})(); // END IIFE



// ;(function(){
//   angular.module('TIY-GitHub', ['ngRoute'], function($routeProvider){
//
//     $routeProvider.when('/index.html', {
//       // templateUrl:'https://api.github.com/repos/TIY-Durham/2015-FALL-FEE/issues/503/comments'
//     });
//   });
//
// })(); // END IIFE









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
