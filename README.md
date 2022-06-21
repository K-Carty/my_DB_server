# DB_server_test

This appp takes in a value in the url the stores it to be accessed later with a key word.

When the server receives a request on http://localhost:4000/set?somekey=somevalue it stores the passed key and value in memory. 

When it receives a request on http://localhost:4000/get?key=somekey it returns the value stored at somekey. 


# Start server
This program  runs a server that is accessible on http://localhost:4000/. 

to start the server run node start.js 

# Install dependencies 

npm install


It uses:
- [Express](https://expressjs.com/) web framework for Node.js.
- [Jest and Supertest] for testing
- [ESLint](https://eslint.org) for linting.




