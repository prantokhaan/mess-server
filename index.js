const express = require("express");
const app = express();
const cors = require("cors");
const dbConnection = require("./db");
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/users/", require("./routes/usersRoute"));
app.use("/deposit/", require("./routes/depositRoute"));
app.use("/member/", require("./routes/memberRoute"));
app.use("/cost/", require("./routes/costRoute"));
app.use("/other/", require("./routes/otherRoute"));
app.use("/bazar/", require("./routes/bazarRoute"));
app.use("/not/", require("./routes/notRoute"));

app.put("/updateStatus/:id", async (req, res) => {
  const id = req.params.id;
  const newStatus = req.body;
  const filter = { _id: id };
  const options = { upsert: true };
  const updateStatus = {
    $set: {
      status: newStatus[0],
    },
  };
  const result = await notsCollection.updateOne(
    filter,
    updateStatus,
    options
  );
  res.json(result);
});




app.get("/", (req, res) => res.send("Hello World!"));
app.listen(port, () => console.log("Backend Server Started"));