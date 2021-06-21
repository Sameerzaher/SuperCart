const pricesApi = require('../utils/superGet/prices')

const getPriceByBarcodes = (req, res) => {
  const { body: { productBarcodes }, params: { storeId } } = req;
  pricesApi.getPriceByBarcodes(storeId, productBarcodes).then(result => {
    res.status(200).json({ data: result.data });
  })
};

module.exports = {
  getPriceByBarcodes,
  getPriceByProductId,
}