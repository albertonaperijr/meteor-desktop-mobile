// Import Tinytest from the tinytest Meteor package.
import { Tinytest } from "meteor/tinytest";

// Import and rename a variable exported by app-desktop.js.
import { name as packageName } from "meteor/app-desktop";

// Write your tests here!
// Here is an example.
Tinytest.add('app-desktop - example', function (test) {
  test.equal(packageName, "app-desktop");
});
