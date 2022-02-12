import mongoose from "mongoose";
const Schema = mongoose.Schema;

const bookSchema = new Schema(
  {
    title: { type: String, require: true },
    isbn: { type: String, require: true },
    pageCount: { type: Number, require: true },
    publishedDate: { type: Date, require: true },
    thumbnailUrl: { type: String, require: true },
    shortDescription: { type: String, require: true },
    status: { type: String, require: true },
    authors: [{ type: String, require: true }],
    categories: [{ type: String, require: true }],
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Book", bookSchema);
