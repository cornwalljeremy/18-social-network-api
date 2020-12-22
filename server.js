const express = require("express");
const mongoose = require("mongoose");
const { User } = require("./models");
const router = require("./routes");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/social-network",
  {
    useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

mongoose.set("useCreateIndex", true);
mongoose.set("debug", true);

app.use(router);

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
