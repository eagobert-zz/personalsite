const myApp = angular.module('myApp', [])

// Begin Router



//Begin Controller Functions
myApp.controller("MyAppCtrl", function($scope){
    
    // Opens and closes the sidebar menu
    $scope.MenuHandler = function(){$(".menu-toggle").click(function(e) {
        e.preventDefault();
        $("#sidebar-wrapper").toggleClass("active");
        $(".menu-toggle > .fa-bars, .menu-toggle > .fa-times").toggleClass("fa-bars fa-times");
        $(this).toggleClass("active");
      });
    }
  })