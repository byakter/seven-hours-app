const mongoose = require('mongoose');
const { Schema } = mongoose;

const GuideTripSchema = new Schema({
  // id,
  userId: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'User'
  },
  image: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  location: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'GuideLocation'
  },
  price: {
    amount: {
      type: Number,
      require: true
    },
    currency: {
      type: String,
      required: true,
      enum: ['USD', 'EUR', 'GBP', 'JPY', 'AUD', 'CAD', 'CHF', 'CNY', 'SEK', 'NZD', 'ARS', 'BRL',]
    }
  },
  startDateTime: '2024-06-25:T12:00',
  endtDateTime: '2024-06-25:T17:00',
  gallery: [{
    image: String,
    description: String
  }],

});

const GuideTrip = mongoose.model('GuideTrip', GuideTripSchema);

module.exports = GuideTrip;
