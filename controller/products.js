const productsApi = require('../utils/superGet/products')

const getProductsByBarcode = (req, res) => {
  const { body: { barcodes } } = req;
  productsApi.getProductsByBarcode(barcodes).then(result => {
    res.status(200).json({ data: result.data })
  })
};

const getProductsByName = (req, res) => {
  const { body: { productNames } } = req;
  productsApi.getProductsByName(productNames).then(result => {
    res.status(200).json({ data: result.data })
  })
};

module.exports = {
  getProductsByBarcode,
  getProductsByName,
}
