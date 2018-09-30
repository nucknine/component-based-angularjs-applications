(function () {
    'use strict';

    angular.module('courseViewer').component('authorCourses', {
        bindings: {
            author: '<'
        },
        controllerAs: 'vm',
        controller: function (authorService) {
            var vm = this;

            vm.$onChanges = function (changes) {
                if (changes.author.currentValue != null) {
                    authorService.getCourses(vm.author.AuthorId).then(function (courses) {
                        vm.author.Courses = courses;
                    });
                }
            }
        },
        templateUrl: 'course-viewer/author/author-courses.component.html'
    });
})();
