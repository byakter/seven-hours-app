const mongoose = require('mongoose');
const { Schema } = mongoose;

const GuideLocationSchema = new Schema({
  country: {
    type: String,
    required: true
  },
  city: {
    type: String,
    required: true
  },
})


const GuideLocation = mongoose.model('GuideLocation', GuideLocationSchema);

module.exports = GuideLocation;
