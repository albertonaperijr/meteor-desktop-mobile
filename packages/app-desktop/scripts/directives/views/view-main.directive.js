/**
 *
 * Directive : viewMain
 *
 **/

angular
    .module('meteorDesktop')
    .directive('viewMain', viewMain);

viewMain.$inject = [];

function viewMain() {

    return {
        restrict: 'E',
        templateUrl: '/packages/app-desktop/templates/directives/views/view-main.directive.html',
        replace: true
    };

}
