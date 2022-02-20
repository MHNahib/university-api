const express = require("express");
const helmet = require("helmet");
const asyncError = require("express-async-errors");
const home = require("./routes/home");
const universities = require("./routes/university");

const error = require("./middleware/error");
const app = express();

// middleware
app.use(helmet());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// app.use("/", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

// public file
app.use(express.static("public"));

// routes
app.use("/", home);
app.use("/universities", universities);

app.use(error);

// port
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`on port ${port}`);
});
