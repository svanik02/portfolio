const express = require("express");

const app = express();

app.use(express.json());

require("./connection");

const Portfolio = require("./models/Portfolio");

const cors = require("cors");
app.use(cors());

//POST METHOD
app.post("/portfolio", async (req, res) => {
  try {
    const portfolio = new Portfolio(req.body);
    const createPortfolio = await portfolio.save();
    res.status(201).send(createPortfolio);
  } catch (e) {
    res.status(400).send(e);
  }
});

//GET METHOD
app.get("/portfolio", async (req, res) => {
  try {
    const portfolio = await Portfolio.find();
    res.send(portfolio);
  } catch (e) {
    res.status(400).send(e);
  }
});

//UPDATE METHOD
app.put("/portfolio/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const portfolio = await Portfolio.findByIdAndUpdate(_id, req.body, {
      new: true,
    });
    res.send(portfolio);
  } catch (e) {
    console.log(e);
    res.status(400).send(e);
  }
});

//DELETE METHOD
app.delete("/portfolio/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const portfolio = await Portfolio.findByIdAndDelete(_id, req.body, {
      new: true,
    });
    res.send(portfolio);
  } catch (e) {
    console.log(e);
    res.status(400).send(e);
  }
});

app.listen(3000, () => {
  console.log("Server started on port 3000");
});

