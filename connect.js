const mongoose = require("mongoose");
 mongoose.set("strictQuery", true);
async function connectToMongoDB(URL)
 {
   mongoose.connect(URL);
}

module.exports = {
  connectToMongoDB
};