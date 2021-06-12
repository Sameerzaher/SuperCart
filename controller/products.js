const productsApi = require('../utils/superGet/products')

const getProductsByBarcode = (req, res) => {
  const { body: { barcodes } } = req;
  productsApi.getProductsByBarcode(barcodes).then(result => {
    console.log('result', result); // todo implement Func
  })
};

const getProductsByName = (req, res) => {
  const { body: { productsNames } } = req;
  productsApi.getProductsByName(productsNames).then(result => {
    console.log('result', result); // todo implement Func
  })
};

module.exports = {
  getProductsByBarcode,
  getProductsByName,
}
