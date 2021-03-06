define([
    'angular',
    'angular-couch-potato',
    'angular-ui-router',
    'angular-resource'
], function (ng, couchPotato) {
    'use strict';

    var module = ng.module('app.home', [
        'ui.router',
        'ngResource'
    ]);

    module.config(function ($stateProvider, $couchPotatoProvider) {
        $stateProvider
            .state('app.home', {
                url: '/home',
                views: {
                    "content@app": {
                        controller: 'HomeCtrl',
                        templateUrl: 'app/home/home.html',
                        resolve: {
                            deps: $couchPotatoProvider.resolveDependencies([
                                // 'home/HomeCtrl'
                            ])
                        }
                    }
                },
                data:{
                    title: 'DashHome',
                    requireLogin: true  // See http://brewhouse.io/blog/2014/12/09/authentication-made-simple-in-single-page-angularjs-applications.html
                }
            });
    });

    couchPotato.configureApp(module);

    module.run(function($couchPotato){
        module.lazy = $couchPotato;
    });

    return module;
});
