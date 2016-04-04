// Import Tinytest from the tinytest Meteor package.
import { Tinytest } from "meteor/tinytest";

// Import and rename a variable exported by app-base.js.
import { name as packageName } from "meteor/app-base";

// Write your tests here!
// Here is an example.
Tinytest.add('app-base - example', function (test) {
  test.equal(packageName, "app-base");
});
