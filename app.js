const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const bookRoutes = require("./routes/book");
const userRoutes = require("./routes/user");

const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const cors = require("cors");

const path = require("path");

const swaggerOptions = {
  swaggerDefinition: {
    info: {
      title: "Mon Vieux Grimoire API",
      decription: "API",
      contact: {
        name: "Kévin",
      },
      servers: ["http://localhost:4000"],
    },
  },
  apis: [`${__dirname}/routes/*.js`, "./routes/book.js", "./routes/user.js"],
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);

mongoose
  .connect(
    "mongodb+srv://Audrey:toto@mvgcluster.jjt696v.mongodb.net/?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => console.log("Connexion à MongoDB réussie !"))
  .catch(() => console.log("Connexion à MongoDB échouée !"));

const app = express();

app.use(cors());
app.options("*", cors());

app.use(bodyParser.json());

app.use("/api/auth", userRoutes);
app.use("/api/books", bookRoutes);
app.use("/images", express.static(path.join(__dirname, "images")));

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

module.exports = app;
