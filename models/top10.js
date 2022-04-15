import mongoose from "mongoose";
const Schema = mongoose.Schema;

let Top10 = new Schema({
  name: { type: String },
  podiumResults: { type: String },
  fastestLap: { type: String },
  fastestPitStop: { type: String },
  laps: { type: Number },
  round: { type: Number },

});

export default mongoose.model("races", Race);