const express = require('express');
const server = express();
const port = 3001;


// Route file
const routesResults = require('./routes/result')

// mouting route
server.use("/api/v1/result", routesResults);


// setting the sever to listen on decleared port
server.listen(port,
    console.log(`The server is running on port: ${port}`)
)

// For checking the server live status

server.get("/", (req, res) => {

    res.send("The ISAAC'S test  app is live ")
})