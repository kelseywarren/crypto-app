const express = require('express');
const app = express();
const axios = require('axios');
const cors = require('cors');
const port = 5500;
const apiKey = "b389ed0c-d634-4243-841d-f38788db5e9c";

app.use(cors());

app.get("/api", (req, res) => {
    axios
      .get("https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?limit=100", {
        headers: {
          "X-CMC_PRO_API_KEY": `${apiKey}`,
        },
      })
      .then((response) => {
        console.log(response.data.data[0].name);

        // send json data to local host 
        res.json(response.data) 

      })
      .catch((error) => {
        console.log(error);
      });
  });
  
  app.get("/info", (req, res,) => {
    axios
      .get(`https://pro-api.coinmarketcap.com/v2/cryptocurrency/info?symbol=`, {
        headers: {
          "X-CMC_PRO_API_KEY": `${apiKey}`,
        },
      })
      .then((response) => {
        console.log(response.data.data);
        res.json(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  });


app.listen(port, () => {
    console.log(`server listening on port ${port}`); 
})

