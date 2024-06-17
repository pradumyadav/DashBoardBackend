const data = require("../data");
const Data = require("../models/Data");

const interData = async (req, res) => {
  try {
    const first = await Data.create(data);
    res.send(first);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

const takeData = async (req, res) => {
  try {
    const second = await Data.find({});
    res.send(second);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

const deleteAllData = async (req, res) => {
  try {
    await Data.deleteMany({});
    res.send({ message: "All data deleted successfully" });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

module.exports = { interData, takeData, deleteAllData };
