import mongoose from "mongoose";
const Schema = mongoose.Schema;

let Top10 = new Schema({
  name: { type: String },
  opened: { type: Number },
  topFloor: { type: Number },
  height: { type: String },
  floorArea: { type: String },
  architect: { type: String },
  architecturalStyle: { type: String },
  rank: { type: Number },
  image: { type: String },
});

export default mongoose.model("top10", Top10);