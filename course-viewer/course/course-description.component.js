(function () {
    'use strict';

    angular.module('courseViewer').component('courseDescription', {
        bindings: {
            course: '<'
        },
        controllerAs: 'vm',
        controller: function () {
            var vm = this;

        },
        templateUrl: 'course-viewer/course/course-description.component.html'
    });
})();
