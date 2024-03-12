import db from "../db/connection.js";
import Artist from "../models/Artist.js";
import Label from "../models/Label.js";
import Release from "../models/Release.js";

import artistsData from "./artists.json" assert { type: "json" };
import labelsData from "./labels.json" assert { type: "json" };
import releasesData from "./releases.json" assert { type: "json" };
import chalk from "chalk";

const insertData = async () => {
  // Reset DB
  await db.dropDatabase();

  // Insert Data
  await Label.create(labelsData);
  await Artist.create(artistsData);
  await Release.create(releasesData);

  console.log(chalk.greenBright("Artists, Labels, and Releases Created!"));

  // Close DB Connection
  await db.close();
};

insertData();
