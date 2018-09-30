(function () {
    'use strict';

    angular.module('courseViewer').component('authorHeading', {
        bindings: {
            author: '<'
        },
        controllerAs: 'vm',
        controller: function () {
            var vm = this;

        },
        templateUrl: 'course-viewer/author/author-heading.component.html'
    });
})();
