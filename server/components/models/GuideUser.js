const mongoose = require('mongoose');
const validator = require('validator');

const GuideUserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    validate: {
      validator: validator.isEmail,
      message: '{VALUE} is not a valid email address'
    }
  },
  password: {
    type: String,
    required: true
  },
  avatar: {
    type: String,
    default: ''
  }

})

const GuideUser = mongoose.model('GuideUser', GuideUserSchema);

module.exports = GuideUser;
