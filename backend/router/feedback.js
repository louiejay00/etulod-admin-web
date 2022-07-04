const router = require("express").Router();
const {default:Feedback}= require("../models/Feedback");

router.get("/", async (req, res) => {
  try {
    const feedback = await Feedback.find();
    res.status(200).send(feedback);
  } catch (err) {
    console.error(err);
    res.status(500).send({
      error: err.message,
    });
  }
});
router.post("/", async (req, res) => {
  try {
    const response = await new Feedback(req.body).save();
    res.status(200).send(response);
  } catch (err) {
    res.status(400).send({
      error: err.message,
    });
  }
});
router.delete("/:id", async (req, res) => {
  // const filter = { _id: req.body._id };
  try {
    let doc = await Feedback.findByIdAndDelete(req.params.id);
    res.status(200).send({
      message: `Feedback ${id} Deleted`,
    });
  } catch (err) {
    console.log("Error deleting", err);
    res.status(500).send({
      error: err.message,
    });
  }
});
// router.get("/:id", async (req, res) => {
//   const feedback = await Feedback.findOne({
//     id: req.params.id,
//   });
//   res.status(200).send({
//     ...feedback._doc,
//   });
// });
module.exports = router;