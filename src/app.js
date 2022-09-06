const express = require("express");
const app = express();

const port = process.env.PORT || 3000;
const nft = require("./api-routes/nft");

app.use(express.json());
app.use("/nft", nft);

app.listen(port, () => console.log(`Server listening on port ${port}!`));
