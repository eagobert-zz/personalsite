const myApp = angular.module('myApp', [])

// Begin Router



//Begin Controller Functions
myApp.controller("appCtrl", function ($scope, $http) {

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
myApp.controller("formCtrl", ["$scope", "$http", function ($scope, $http, $httpParamSerializerJQLike) {

  $scope.formData = {};


  $scope.formSubmit = function(contactForm){
    $http({
      method : 'POST',
      url : 'contactform.php',
      data : $httpParamSerializerJQLike($scope.formData),
      headers : {'Content-Type': 'application/x-www-form-urlencoded'}
    })
    .success(function(data){
      console.log(data);

      if(!data.success){
        $scope.errorFirstName = data.errors.firstName;
        $scope.errorLastName = data.errors.lastName;
        $scope.errorEmail = data.errors.email;
        // $scope.errorPhone = data.errors.phone;
        // $scope.errorComments = data.errors.comments;
      } else {
        $scope.message = data.message;
      }
    })
  }

  }])