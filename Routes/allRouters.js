
const {interData, takeData, deleteAllData} = require("../controllers/dataController")

const router = require("express").Router()

router.post("/postdata",interData);
router.get("/getdata",takeData);
router.delete("/deletedata",deleteAllData);


module.exports =router;

