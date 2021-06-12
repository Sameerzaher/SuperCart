const pricesApi = require('../utils/superGet/prices')

const getPriceByBarcodes = (req, res) => {
  const { body: { productsNames }, params: { storeId } } = req;
  pricesApi.getPriceByProductId(storeId, productsNames).then(result => {
    console.log('result', result); // todo implementFunc
  })
};
const getPriceByProductId = (req, res) => {
  const { body: { productsIds }, params: { storeId } } = req;
  pricesApi.getPriceByProductId(storeId, productsIds).then(result => {
    console.log('result', result); // todo implementFunc
  })
};

module.exports = {
  getPriceByBarcodes,
  getPriceByProductId,
}