/**
 *
 * App Main Module : meteorDesktop
 *
 **/

angular.module('meteorDesktop', [
    'angular-meteor'
    // 'angularMoment',
    // 'ionic',
    // 'ngFileUpload'
]);

onReady = function() {
    angular.bootstrap(document, ['meteorDesktop']);
};

if (Meteor.isCordova) {
    angular.element(document).on('deviceready', onReady);
} else {
    angular.element(document).ready(onReady);
}

console.log('Meteor Desktop | Client Initialized!');
