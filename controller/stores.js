const storesApi = require('../utils/superGet/stores')

const getStoresByCityId = async (req, res) => {
  const { body: { cityId, limit } } = req;
  storesApi.getStoresByCityId(cityId, limit).then(result => {
    res.status(200).json({ data: result.data })
  })
};

const getStoresByGps = async (req, res) => {
  const { body: { latitude, longitude, radius, limit } } = req
  storesApi.getStoresByGps(latitude, longitude, radius, limit).then(result => {
    res.status(200).json({ data: result.data })
  })
};

module.exports = {
  getStoresByCityId,
  getStoresByGps,
}
