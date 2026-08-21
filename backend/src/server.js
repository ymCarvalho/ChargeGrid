const express = require("express");
const cors = require("cors");

const stations = require("./mocks/stations");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message: "ChargeGrid API funcionando!"
  });
});

app.get("/stations", (req, res) => {
  res.json(stations);
});

app.get("/stations/:id", (req, res) => {
  const station = stations.find(
    station => station.id === req.params.id
  );

  if (!station) {
    return res.status(404).json({
      message: "Estação não encontrada"
    });
  }

  res.json(station);
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`ChargeGrid API rodando em http://localhost:${PORT}`);
});