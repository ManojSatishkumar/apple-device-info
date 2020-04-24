
const iPhone = require('./iPhone');

module.exports = {
  getIphoneDetails: (device, model) => iPhone[device][model],
};
