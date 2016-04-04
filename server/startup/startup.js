/**
 *
 * Startup
 *
 **/

Meteor.startup(function() {

    Future = Npm.require('fibers/future'); // To Synchronous Method

    console.log('Meteor Desktop | Server Initialized!');

});
