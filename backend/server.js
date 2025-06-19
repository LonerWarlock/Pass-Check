const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());
app.use(express.static("public"));

app.use("/api/password", require("./routes/password"));

app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));
