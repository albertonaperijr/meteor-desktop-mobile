/**
 *
 * Mobile Configurations
 * For Android: This will automatically update config.xml
 * @author: Alberto Naperi Jr.
 *
 **/

App.info({
    id: 'com.whatsapp.mobile',
    version: '1.0.0',
    name: 'WhatsApp by Alberto Naperi Jr.',
    description: '',
    author: 'Alberto Naperi Jr.',
    email: 'albertonaperijr@gmail.com',
    website: 'https://www.albertonaperijr.com'
});

// App.icons({
//     'iphone': 'icons/icon-60.png',
//     'iphone_2x': 'icons/icon-60@2x.png',
//     // ... more screen sizes and platforms ...
// });

// App.launchScreens({
//     'iphone': 'splash/Default~iphone.png',
//     'iphone_2x': 'splash/Default@2x~iphone.png',
//     // ... more screen sizes and platforms ...
// });

/**
 * Set PhoneGap/Cordova preferences
 **/
App.setPreference('android-minSdkVersion', '16');
App.setPreference('android-targetSdkVersion', '21');
App.setPreference('BackgroundColor', '0xff0000ff');
App.setPreference('HideKeyboardFormAccessoryBar', true);
App.setPreference('Orientation', 'default');
App.setPreference('Orientation', 'all', 'ios');
App.setPreference('SplashScreenDelay', '3000');

/**
 * Pass preferences for a particular PhoneGap/Cordova plugin
 **/
App.configurePlugin('com.phonegap.plugins.facebookconnect', {
    APP_ID: '1234567890',
    API_KEY: 'supersecretapikey'
});

/**
 * Set Access Rules
 **/
App.accessRule('*');
