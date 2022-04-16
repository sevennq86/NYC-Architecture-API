import db from "../db/connection.js";
import Iconic from "../models/iconic.js";
import Top10 from "../models/top10.js";
import iconic from "./iconic.json" assert { type: "json" };
import top10 from "./top10.json" assert { type: "json" };

const insertData = async () => {
  // reset database
  await db.dropDatabase();

  // insert iconic and top10 into database
  await Iconic.insertMany(iconic);
  await Top10.insertMany(top10);

  // close db connection (done)
  db.close();
};

insertData();