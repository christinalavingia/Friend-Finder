var friends = require("../app/data/friends.js");

module.exports = function (app) {
    app.get("/api/friends", function (req, res) {
        res.json(friends);
    });

    app.post("/api/friends", function (req, res) {
        var userInput = req.body.scores;
        var scoresArray = [];
        var friendCount = 0;
        var bestMatch = 0;
        

        for (var i = 0; i < friends.length; i++) {
            var difference = 0;
            for (var j = 0; j < userInput.length; j++) {
                difference += (Math.abs(parseInt(friends[i].scores[j]) - parseInt(userInput[j])));
            }

            scoresArray.push(difference);

        }

            for (var i = 0; i < scoresArray.length; i++) {
                if (scoresArray[i] <= scoresArray[bestMatch]) {
                    bestMatch = i;
                }
            }
     
            var bestFriend = friends[bestMatch];
            res.json(bestFriend);
            friends.push(req.body);
    });
};