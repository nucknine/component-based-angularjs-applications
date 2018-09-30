(function () {
    'use strict';
    
    angular.module('courseViewer').component('courseDiscussionList', {
        bindings: {
            courseDiscussion: '<',
        },
        controllerAs: 'vm',
        controller: function () {
            var vm = this;

        },
        templateUrl: 'course-viewer/course/course-discussion-list.component.html'
    });    
})();