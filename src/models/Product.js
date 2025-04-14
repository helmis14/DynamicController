import mongoose from "mongoose";

const Schema = new mongoose.Schema(
  {
    categoryId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
    },
    name: {
      type: String,
      required: false,
    },
    status: {
      type: Boolean,
      required: true,
    },
    created_at: {
      type: Number,
    },
    updated_at: {
      type: Number,
    },
  },
  {
    timestamps: { currentTime: () => Math.floor(Date.now() / 1000) },
  }
);

Schema.set("toObject", { virtuals: true });
Schema.set("toJSON", { virtuals: true });

export default mongoose.model("product", Schema);
