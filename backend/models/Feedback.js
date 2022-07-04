const mongoose = require('mongoose')

const FeedbackSchema = new mongoose.Schema({
  name: String,
  email: String,
  feedback: String,
})

module.exports = {
  default: mongoose.model("Feedback", FeedbackSchema),
  feedbackSchema: FeedbackSchema
}