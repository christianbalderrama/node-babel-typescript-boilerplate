import express from "express";
import morgan from "morgan";
const app = express();
const port = process.env.PORT || 3000;

app.use(morgan("dev"));
app.get("/", (_, res) => {
  return res.send("Hello, World!");
});

app.listen(port, () => console.log(`Server is listening to port: ${port}`));
