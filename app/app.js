const app = angular.module("app", ["firebase"]);

// Begin Router



//Begin Controller Functions
app.controller("appCtrl", function ($scope, $http) {

  // Opens and closes the sidebar menu
  // $scope.menuController = function () {
  //   $(".menu-toggle").click(function (e) {
  //     e.preventDefault();
  //     $("#sidebar-wrapper").toggleClass("active");
  //     $(".menu-toggle > .fa-bars, .menu-toggle > .fa-times").toggleClass("fa-bars fa-times");
  //     $(this).toggleClass("active");
  //   });
  // }
})

  //Controls form data input and submission by email
app.controller("formCtrl", function ($scope, $http, $timeout) {

  $scope.formData = {};

  $scope.submitForm = function(){}


  })