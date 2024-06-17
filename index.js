const express = require("express");
const app = express();
 //app.use(express.json());
 const cors = require("cors");
const connection = require("./Configue/db");
//const { route } = require("./routes/dataRoutes");
const router = require("./Routes/allRouters");
// Increase the limit for parsing JSON payloads
app.use(express.json({ limit: '50mb' }));
app.use(cors());

app.use("/api",router)

app.listen(4001, async () => {
  try {
    await connection();
    console.log("We Are on 4001");
  } catch (err) {
    console.log(err);
  }
});
