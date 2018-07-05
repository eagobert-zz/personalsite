"use strict";

const app = angular.module("app", ["firebase"]);


//Begin Controller Functions
app.controller("appCtrl", function ($scope) {

    $scope.tech = [
        {url: 'https://firebasestorage.googleapis.com/v0/b/personal-site-82611.appspot.com/o/Technologies%2FAngular.png?alt=media&token=7b4fe120-746f-46c5-a117-915ddd880084', name: 'Angular 5'},
        {url: 'https://firebasestorage.googleapis.com/v0/b/personal-site-82611.appspot.com/o/Technologies%2Fbrowserify.png?alt=media&token=513158d3-28ca-4251-a27e-75efd837e70b', name: 'Browserify'},
        {url: 'https://firebasestorage.googleapis.com/v0/b/personal-site-82611.appspot.com/o/Technologies%2FAngularJs.png?alt=media&token=7ed143ec-2927-4398-b97e-507e87df0cba', name: 'AngularJs'},
        {url: 'https://firebasestorage.googleapis.com/v0/b/personal-site-82611.appspot.com/o/Technologies%2FIonic.png?alt=media&token=a466d98d-d6ad-4346-9c8b-4e8ad8a532e9', name: 'Ionic 3'},
        {url: 'https://firebasestorage.googleapis.com/v0/b/personal-site-82611.appspot.com/o/Technologies%2FJavascript.png?alt=media&token=bbd85713-bd43-4113-b5a8-bc6da11dd2ac', name: 'JavaScript'},
        {url: 'https://firebasestorage.googleapis.com/v0/b/personal-site-82611.appspot.com/o/Technologies%2FC_Sharp.png?alt=media&token=2ec8e6a3-0d74-4a70-85ec-3b409fd01d1e', name: 'C#'},
        {url: 'https://firebasestorage.googleapis.com/v0/b/personal-site-82611.appspot.com/o/Technologies%2FJQuery.png?alt=media&token=b9b4d106-d58f-459c-9270-8c9435ae37e0', name: 'jQuery'},
        {url: 'https://firebasestorage.googleapis.com/v0/b/personal-site-82611.appspot.com/o/Technologies%2FMaterialize.png?alt=media&token=be4f362b-bd26-4e6b-96b1-ddc4e71d1b2d', name: 'Materialize'},
        {url: 'https://firebasestorage.googleapis.com/v0/b/personal-site-82611.appspot.com/o/Technologies%2FOctocat_GitHub.png?alt=media&token=13ddf264-a80b-4bb0-b7cc-e5768a60ae06', name: 'GitHub'},
        {url: 'https://firebasestorage.googleapis.com/v0/b/personal-site-82611.appspot.com/o/Technologies%2FVisualStudio.png?alt=media&token=c14790bf-bba0-4904-8f80-789f1fad00ee', name: 'Visual Studio'},
        {url: 'https://firebasestorage.googleapis.com/v0/b/personal-site-82611.appspot.com/o/Technologies%2FBootstrap.png?alt=media&token=110cf5d7-2759-4bc3-9d1e-bf84ae68f08c', name: 'Bootstrap 4'},
        {url: 'https://firebasestorage.googleapis.com/v0/b/personal-site-82611.appspot.com/o/Technologies%2Fgrunt.png?alt=media&token=478b13e0-be9e-4cca-bf52-1c5972d4490a', name: 'Grunt'},
    ];

});