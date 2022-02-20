const express = require("express");
const router = express.Router();
const list = require(`${__dirname}/../public/universities.json`);

// get university list from short name of country
router.get("/:code", (req, res) => {
  // check url query have countrycode or not
  if (!req.params.code)
    return res.status(400).send(`Must contain country code in url paramitter`);

  let universities;
  if (req.params.code.length > 2) {
    universities = list.filter(
      (c) => c["country"].toUpperCase() === req.params.code.toUpperCase()
    );
  } else {
    universities = list.filter(
      (c) => c["alpha_two_code"].toUpperCase() === req.params.code.toUpperCase()
    );
  }

  //

  if (!universities) return res.status(404).send(`not found`);

  res.send(universities);
});

module.exports = router;
