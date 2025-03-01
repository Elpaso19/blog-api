import { server } from "./www/server.js";
import configService from "./lib/classess/config.class.js";
import connectToDatabase from "./lib/database.js";

(async () => {
  const port = parseInt(configService.getOrThrow("PORT"))
  try {
    await connectToDatabase();
    server.listen(port, () => {
      console.log(`Server is running on http://localhost:${port}`);
    });
  } catch (error) {
    console.error(`error startung server`, error);
    process.exit(1);
  }
})();
