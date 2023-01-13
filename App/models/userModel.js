const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: String,
    email: { type: String, required: true, index: true, unique: true },
    isAdmin: { type: Boolean, default: false },
    address: String,
    wishlist: [{ type: mongoose.Schema.Types.ObjectId, ref: "Product" }],
  },

  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
