(function () {
    'use strict';

    angular.module('courseViewer').component('home', {
        controllerAs: 'vm',
        controller: function (authenticationService) {
            var vm = this;

            vm.authenticationService = authenticationService;
        },
        templateUrl: 'course-viewer/home.component.html'
    });
})();
