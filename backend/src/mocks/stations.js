const stations = [
  {
    id: "station-001",
    name: "ChargeGrid Paulista",
    address: "Av. Paulista, 1000",
    city: "São Paulo",
    latitude: -23.5614,
    longitude: -46.6562,
    rating: 4.8,
    pricePerKwh: 2.19,
    chargersAvailable: 3,
    chargersTotal: 4,
    status: "available"
  },
  {
    id: "station-002",
    name: "ChargeGrid Faria Lima",
    address: "Av. Faria Lima, 2000",
    city: "São Paulo",
    latitude: -23.5725,
    longitude: -46.6895,
    rating: 4.6,
    pricePerKwh: 2.39,
    chargersAvailable: 1,
    chargersTotal: 4,
    status: "busy"
  },
  {
    id: "station-003",
    name: "ChargeGrid Shopping",
    address: "Av. das Nações, 500",
    city: "São Paulo",
    latitude: -23.5900,
    longitude: -46.6500,
    rating: 4.7,
    pricePerKwh: 1.99,
    chargersAvailable: 4,
    chargersTotal: 6,
    status: "available"
  }
];

module.exports = stations;