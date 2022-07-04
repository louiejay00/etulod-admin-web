const mongoose = require('mongoose')

const FeedbackSchema = new mongoose.Schema({
  userName: String,
  userEmail: String,
  feedback: String,
})

module.exports = {
  default: mongoose.model("Feedback", FeedbackSchema),
  feedbackSchema: FeedbackSchema
}