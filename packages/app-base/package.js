Package.describe({
  name: 'app-base',
  version: '0.0.1',
  summary: 'MyApp base package'
});

Package.onUse(function(api) {
  api.versionsFrom('1.3');
  api.use('ecmascript');
  api.mainModule('app-base.js');
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('app-base');
  api.mainModule('app-base-tests.js');
});
