import app from "./src/app";
import connectDB from "./src/config/db";
import { config } from "./src/config/config";

const startServer = async() => {

  //db connectivity
  await connectDB();
  const port = config.port || 3000;

  app.listen(port, () => {
    console.log(`listening on port: ${port}`);
  });
};
startServer();