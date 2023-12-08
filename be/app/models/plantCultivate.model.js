const mongoose = require('mongoose');

const cultivativeItem = mongoose.Schema({
  name: String,
  amount_per_ha: Number,
})

const plan = new mongoose.Schema({
  cultivativeItems: [cultivativeItem],
  time: String,
  note: String,
  type: String
})

const plantCultivateSchema = new mongoose.Schema({
  farmId: String,
  plantId: String,
  seed: String,
  price: Number,
  plan: [plan],
});

const PlantCultivate = mongoose.model('PlantCultivate', plantCultivateSchema);

module.exports = PlantCultivate;
