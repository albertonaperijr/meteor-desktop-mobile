/**
 *
 * Test Methods
 * Create Update Delete
 *
 **/

Meteor.methods({

    /**
     * Create Test
     **/
    createTest: function(test) {
        let MethodName = 'CreateTest |';
        console.log(MethodName, test);

        let future = new Future();

        Tests.insert(test, function(error, result) {
            if (error) {
                throw new Meteor.Error(error);
            } else {
                console.info(MethodName, 'Success creating Test');
                return future.return({
                    _id: result
                });
            }
        });

        return future.wait();
    }
});
