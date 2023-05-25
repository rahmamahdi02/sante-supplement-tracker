const express = require("express");
const cors = require("cors");
const axios = require("axios");

require("dotenv").config();

const path = require("path");
const db = require("./db/db-connection.js");
const { response } = require("express");

const { auth } = require("express-oauth2-jwt-bearer");

//without --save will need to update package.json manually

const app = express();
const PORT = process.env.PORT || 8080;

const REACT_BUILD_DIR = path.join(__dirname, "..", "client", "dist");
app.use(express.static(REACT_BUILD_DIR));
app.use(cors());
app.use(express.json());

// const jwtCheck = auth({
//     audience: 'https://rahmaproject/api',
//     issuerBaseURL: 'https://dev-elk7fx7fv6dpfryd.us.auth0.com/',
//     tokenSigningAlg: 'RS256'
//   });

const { AuthenticationClient } = require("auth0");

const auth0 = new AuthenticationClient({
  domain: process.env.AUTH0_DOMAIN,
  clientId: process.env.AUTH0_CLIENT_ID,
});



// creates an endpoint for the route "/""

app.get("/", async (req, res) => {
  // const userProfile = await auth0.getProfile(req.auth.payload);
  // console.log("user profile:", userProfile);

  res.sendFile(path.join(REACT_BUILD_DIR, "index.html"));
});

//creating endpoint for a new user to be inserted into the database table called user

app.post("/api/username", async (req, res) => {
  try {
    const userProfile = req.body.username;

 

    const userEmail = await db.query("SELECT * FROM users WHERE email = $1", [
      userProfile.email, 
    ]);

    if (userEmail.rows.length === 0) {
      const newUser = {
        first_name: req.body.user.username,
        email: req.body.user.email,
      };
      const result = await db.query(
        "INSERT INTO users(first_name, email) VALUES ($1,$2) RETURNING *",
        [newUser.first_name, newUser.email]
      );
      console.log("line 67", result.rows[0]);
      res.json(result.rows[0]);
    }
  } catch (e) {
    console.log(e.message);
    return res.status(400).json({ e });
  } 
});

// create the get request for users in the endpoint '/api/users'
app.get("/api/users", async (req, res) => {
  try {
    const object = await db.query("SELECT * FROM users");
    let users = object.rows;
    res.send(users);

    // const { rows: users } = await db.query("SELECT * FROM users"); ^ same thing as above but this is object destructuring
    // res.send(users);
    
  } catch (e) {
    return res.status(400).json({ e });
  }
});

app.post("/api/factsheets", async (req, res) => {
  let vitamin = req.body.vitamin; console.log(vitamin);
  let api_key = process.env.API_KEY;
  try {
    axios.get(`https://api.ods.od.nih.gov/dsld/v9/ingredient-groups/?method=factsheet&term=${vitamin}&api_key=${api_key}`).then((response) => {
      // console.log("response.data: ", response.data.hits[0]._source.factsheets);
      let result =  response.data.hits;

      let factsheet = []; // define an outer variable to hold the array where factsheets 

      if (result.length){

        for (let i = 0; i < result.length; i++){

          if (result[i]._source.factsheets.length > 0) {
             
            factsheet = result[i]._source.factsheets;

          }
           
        } 
        // iterate results facsheets.length= == 0
        // 
      }
      //._source.factsheets; // facsheets is inside source 
      console.log(result);
      res.send(factsheet); 
    });
  } catch (error) {
    console.log("error from catch server.js", error);
  }
});


// app.get("/api/factsheets", async (req, res) => {
//   let api_key = process.env.API_KEY;
//   try {
//     const term = req.query.term; // Retrieve the term from the query parameters
//     axios
//       .get(`https://api.ods.od.nih.gov/dsld/v9/ingredient-groups/?method=factsheet&term=${term}&api_key=${api_key}`)
//       .then((response) => {
//         let result = response.data.hits[0]._source.factsheets;
//         console.log(result);
//         res.send(result);
//       });
//   } catch (error) {
//     console.log("error from catch server.js", error);
//   }
// });


// console.log that your server is up and running
app.listen(PORT, () => {
  console.log(`Hola, Server listening on ${PORT}`);
});



