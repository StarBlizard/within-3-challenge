# Within-3 Challenge

## Setup the server
1. Install nodejs (version 16.15.1)
2. Install MongoDB [here](https://www.mongodb.com/docs/manual/installation/)
3. Install all npm dependences `npm install`
4. Migrate all the locations zip codes into MongoDB: `tsc && src/dist/jobs/backpopulate-locations.js -f PATH/TO/FILE` 
5. Start the project: `npm start`
6. To run tests, just: `npm test`

## Possible Improvements
Modifying the HTTP status code on the response was quite challenging, if I had more time, I would improve the error handling there, trying to map the possible error messages with status codes.

Also I would modify the entities folder, to admit more complex entities, adding instance and/or class methods depending on future necessities, even base models.
