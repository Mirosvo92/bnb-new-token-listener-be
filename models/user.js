const { Schema, model } = require('mongoose');

const UserSchema = new Schema({
  address: {
    type: String,
    unique: true,
    required: true,
  },
});

module.exports = model('User', UserSchema);
