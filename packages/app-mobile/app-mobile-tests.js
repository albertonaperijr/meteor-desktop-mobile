// Import Tinytest from the tinytest Meteor package.
import { Tinytest } from "meteor/tinytest";

// Import and rename a variable exported by app-mobile.js.
import { name as packageName } from "meteor/app-mobile";

// Write your tests here!
// Here is an example.
Tinytest.add('app-mobile - example', function (test) {
  test.equal(packageName, "app-mobile");
});
