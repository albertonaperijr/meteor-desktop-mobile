Package.describe({
  name: 'app-desktop',
  version: '0.0.1',
  summary: 'MyApp desktop package'
});

Package.onUse(function(api) {
  api.versionsFrom('1.3');
  api.use('ecmascript');
  api.mainModule('app-desktop.js');
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('app-desktop');
  api.mainModule('app-desktop-tests.js');
});
