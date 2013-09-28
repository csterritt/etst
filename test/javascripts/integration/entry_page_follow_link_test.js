module("Entry Page Follow Link Test", {
    setup: function() {
        Ember.run(function () { Etst.reset(); });
        Ember.testing = true;

        Ember.run(Etst, Etst.advanceReadiness);
        server = sinon.fakeServer.create();

        server.respondWith("GET", /(.*)/, function(xhr, url) {
            var res = {
                "personas": [
                    {"id": 1, "name": "Jack", "age": 32, "favorite_food": "Spam"},
                    {"id": 2, "name": "Jill", "age": 27, "favorite_food": "Mud Pie"}
                ]
            };
            Ember.run(function() {
                xhr.respond(200, { "Content-Type": "application/json" }, JSON.stringify(res));
            });
        });

        server.autoRespond = true;
    },

    teardown: function() {
        Ember.testing = false;
    }
});

test("it goes to the personas page", function() {
    var promise;
    Ember.run(Etst, function() {
        promise = visit("/personas");
    });
    promise.then(function() {
        equal(find("h3").text(), "Current Personas:");
        var links = find("a");
        equal(links.length, 2);
        equal(links[0].text, "Jack");
        equal(links[1].text, "Jill");
    });
});
