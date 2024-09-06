// Example of a custom server setup with express
import express from "express";
import next from "next";

const app = next({});
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  // Define custom routes here
  server.get("/custom-route", (req, res) => {
    return res.send("This is a custom route!");
  });

  // Handle all other routes with Next.js
  server.all("*", (req, res) => {
    return handle(req, res);
  });

  const port = 80;
  server.listen(port, () => {
    console.log(`Nextjs custom production > Ready on http://localhost:${port}`);
  });
});
