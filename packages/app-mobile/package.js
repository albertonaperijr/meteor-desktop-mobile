Package.describe({
  name: 'app-mobile',
  version: '0.0.1',
  summary: 'MyApp mobile package'
});

Package.onUse(function(api) {
  /* Add our packages that we depend on on both mobile/desktop sides */
  api.versionsFrom('1.3');
  api.use([
    'ecmascript'
  ],['client','server']);

  /* Add client side dependencies */
  api.use([
    'jquery',
    'angular',
    'driftyco:ionic',
    'momentjs:moment',
    'jasonaibrahim:angular-moment',
    'danialfarid:ng-file-upload',
    'okland:camera-ui',
    'kadira:dochead'
  ],'client');

  // api.mainModule('app-mobile.js');
});

// Package.onTest(function(api) {
//   api.use('ecmascript');
//   api.use('tinytest');
//   api.use('app-mobile');
//   api.mainModule('app-mobile-tests.js');
// });
