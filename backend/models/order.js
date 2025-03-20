const mongoose = require('mongoose');


const order = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'user'
    },
    product: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'product'
    },
    status: {
      type: String,
      default: "Order placed",
      enum: ["Order placed", "Out of delivery", "Delivered", "Canceled"]
    },
  },
  { timestamps: true }
)
module.exports = mongoose.model("Order", order);
