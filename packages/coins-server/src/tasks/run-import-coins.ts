require("dotenv-safe").config();

import { Database } from "../database/mongo";
import { importer } from "../utils/importer";

const LIMIT = 250;
const DEFAULT_PAGE = 1;

const run = async () => {
  const db = await Database.connect();
  if (db.err) process.exit(1);

  const PAGE = parseInt(process.argv[2] ?? DEFAULT_PAGE, 10) || DEFAULT_PAGE;

  const result = await importer.coins(LIMIT, PAGE);

  if (!result.ok) {
    console.log("[Error]: importer.coins failed");
  } else {
    console.log("[Info]: importer.coins was successfully");
  }

  await Database.disconnect();
  process.exit(0);
};

run();
