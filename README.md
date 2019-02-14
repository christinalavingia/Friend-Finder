# Friend-Finder

### Live app on Heroku: https://friend-finder-2019-ucla.herokuapp.com/

## Overview

Much like commonplace dating apps, the Friend Finder app identifies people with similar personalities to the user. The user first clicks "Meet Your New Best Friend" to launch the quiz. The quiz consists of 10 questions designed to identify elements of the user's personality. When the survey is fully complete (meaning a name, image URL and all 10 questions have a response), the user will click "Get Ready for Friendship." 

This action will trigger a modal on the client side that will name the user's best match and display their submitted photo. The best match is one that most closely mirrors the answers the user provided in the quiz. The best match is retrieved from the friends array stored in friends.js and expored via module.exports.

On the backend, the user's inputs have been stored so the next person to take the quiz can be served up this user in addition to those existing in the database. With more submissions, the database (the friends array) becomes larger and richer, allowing for more similar matches.

## Technology

This app was written in jQuery, HTML, Bootstrap and CSS for the frontend. The following NPM packages were required for the server:

* Path
* Express
* Body Parser

Because this is a full front and backend app, Express is used to help route files from the client-side to the server-side and back. 

Locally, a user would have to install Node and run $ node server.js to kick-start a server, interact with the page at localhost:8080, and have data persist between different submissions. The app is served, now, in Heroku so anyone with the Heroku link can take advantage of its servers to handle this in a more user-friendly way. 

The app is pre-configured with sample data (starring "The Office" characters Jim, Pam and Dwight). This will allow any user to receive a functional experience upon first survey submission. 
