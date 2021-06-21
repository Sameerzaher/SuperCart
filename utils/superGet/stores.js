const { postURL } = require("./general");

const getStoresByCityId = async (city_id, limit = 10) => {
  const params = {
    action: 'GetStoresByCityID',
    city_id,
    limit,
  }
  const res = await postURL(params)
  return res;
}

const getStoresByGps = async (latitude, longitude,  km_radius, limit = 10) => {
  const params = {
    action: 'GetStoresByGPS',
    latitude,
    longitude,
    km_radius,
    order: 1, // nearest first
    limit,
  }
  const res = await postURL(params)
  return res;
}

module.exports = {
  getStoresByGps,
  getStoresByCityId,
};