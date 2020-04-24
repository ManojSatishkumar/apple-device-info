
const technology = require('../../../../../utils/technology');

const network = {
  technology: [
    technology.gsm,
    technology.cdma,
    technology.hspa,
    technology.evdo,
    technology.lte,
  ],
  '2G bands': 'GSM 850 / 900 / 1800 / 1900',
  '3G bands': 'HSDPA 850 / 900 / 1700(AWS) / 1900 / 2100 CDMA2000 1xEV - DO',
  '4G bands': '1, 2, 3, 4, 5, 7, 8, 11, 12, 13, 17, 18, 19, 20, 21, 25, 26, 28, 29, 30, 32, 34, 38, 39, 40, 41, 42, 46, 48, 66 - A2296',
};

module.exports = {
  network,
  // launch,
  // body,
  // display,
  // platform,
  // memory,
  // mainCamera,
  // selfieCamera,
  // sound,
  // comms,
  // features,
  // battery,
  // misc,
};
