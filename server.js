/****************************
**** Server Initializers ****
****************************/

//Initialize express
const express = require('express');
const app = express();

//Reads .env file for PORT number
require('dotenv').config();
const PORT = process.env.PORT || 3008;

//Allows us to recognize JSON, strings, and array objects
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// //Whitelist via Cors
// const cors = require('cors');
// const whitelist = ["http://localhost:3000"];
// const corsOptions = {
//   origin: (origin, callback) => {
//     if (whitelist.indexOf(origin) !== -1) {
//       callback(null, true);
//     }
//     else {
//       callback(new Error('Not allowed by CORS'));
//     }
//   }
// };
// app.use(cors(corsOptions));

app.get('/', (req, res) => {
    res.send("Express server running!")
})

app.listen(PORT, () => {
    console.log("*** Express server running at localhost:" + PORT + " ***");
});
