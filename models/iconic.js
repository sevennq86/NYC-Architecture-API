import mongoose from "mongoose";
const Schema = mongoose.Schema;

let Iconic = new Schema({
  title: { type: String },
  architecturalStyle: { type: String },
  year: { type: Number },
  about: { type: String },
  image: { type: String },
});

export default mongoose.model("iconic", Iconic);