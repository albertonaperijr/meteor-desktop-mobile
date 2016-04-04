Package.describe({
    name: 'app-mobile',
    version: '0.0.1',
    summary: 'My app-mobile'
});

Package.onUse(function(api) {
    api.versionsFrom('1.3');

    /* Add our packages that we depend on on both mobile/desktop sides */
    api.use([
        'angular'
    ], ['client']);

    /* Add each of our files that are a part of this package */
    api.addFiles([
      // Add Files Here
    ], ['web.cordova']);

    // api.use('ecmascript');
    // api.mainModule('app-mobile.js');
});

// Package.onTest(function(api) {
//   api.use('ecmascript');
//   api.use('tinytest');
//   api.use('app-mobile');
//   api.mainModule('app-mobile-tests.js');
// });
