Package.describe({
    name: 'app-desktop',
    version: '0.0.1',
    summary: 'My app-desktop'
});

Package.onUse(function(api) {
    api.versionsFrom('1.3');

    /* Add our packages that we depend on on both mobile/desktop sides */
    api.use([
        'angular'
    ], ['client']);

    /* Add each of our files that are a part of this package */
    api.addFiles([
        'templates/directives/views/view-main.directive.html',
        'scripts/lib/app.module.js',
        'scripts/controllers/main.controller.js',
        'scripts/directives/views/view-main.directive.js'
    ], ['web.browser']);

    // api.use('ecmascript');
    // api.mainModule('app-desktop.js');
});

// Package.onTest(function(api) {
//   api.use('ecmascript');
//   api.use('tinytest');
//   api.use('app-desktop');
//   api.mainModule('app-desktop-tests.js');
// });
