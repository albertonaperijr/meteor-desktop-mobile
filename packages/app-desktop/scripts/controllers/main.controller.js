angular
    .module('meteorDesktop')
    .controller('MainCtrl', MainCtrl);

MainCtrl.$inject = ['$rootScope', '$scope', '$log'];

function MainCtrl($rootScope, $scope, $log) {

    let vm = this;
    let controllerName = 'MainCtrl';
    $log.log(controllerName);

    vm.device = 'Desktop';

    //----------------------------------------------------------------------
    // Create update delete section
    //----------------------------------------------------------------------

    vm.createTestFromClient = function() {
        let test = {
            text: 'Yes this is a test',
            score: '999999999999'
        }
        $log.log(controllerName, '| createTestFromClient | test :', test);
        Tests.insert(test, function(error, result) {
            $log.log(controllerName, 'result :', result, 'error :', error);
        });
    };

    vm.createTest = function() {
        let test = {
            text: 'Yes this is a test',
            score: '999999999999'
        }
        $log.log(controllerName, '| createTest | test :', test);
        Meteor.call('createTest', test, function(error, result) {
            $log.log(controllerName, 'result :', result, 'error :', error);
        });
    };

    //----------------------------------------------------------------------
    // Data retrieval section
    //----------------------------------------------------------------------

    //----------------------------------------------------------------------
    // generic method section
    //----------------------------------------------------------------------

    //----------------------------------------------------------------------
    // Module specific method section
    //----------------------------------------------------------------------

};
