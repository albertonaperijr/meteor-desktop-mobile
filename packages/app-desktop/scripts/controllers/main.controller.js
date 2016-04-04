angular
    .module('meteorDesktop')
    .controller('MainCtrl', MainCtrl);

MainCtrl.$inject = ['$rootScope', '$scope', '$log'];

function MainCtrl($rootScope, $scope, $log) {

    var vm = this;
    var controllerName = 'MainCtrl';
    $log.log(controllerName);

    vm.device = 'Desktop';

    //----------------------------------------------------------------------
    // Create update delete section
    //----------------------------------------------------------------------

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
