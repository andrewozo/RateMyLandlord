const router = require("express").Router();
const {
  models: { Landlord },
} = require("../db");
module.exports = router;

// get all landlords
router.get("/", async (req, res, next) => {
  try {
    const landlords = await Landlord.findAll();
    res.json(landlords);
  } catch (error) {
    next(error);
  }
});

router.get("/:landlordId", async (req, res, next) => {
  try {
    const landlord = await Landlord.findByPk(req.params.landlordId);
    res.json(landlord);
  } catch (error) {
    next(error);
  }
});
