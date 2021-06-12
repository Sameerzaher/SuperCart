const { postURL } = require("./general");

const getPriceByProductId = async (storeId, productsIds) => {
  const params = {
    action: 'GetPriceByProductBarCode',
    store_id: storeId,
    product_id: productsIds,
  }
  const res = postURL(params)
  return res;
}


const getPriceByBarcodes = async (storeId, barcodes) => {
  if (!Array.isArray(barcodes)){
    throw new Error('type Error: is not array');
  }
  const params = {
    action: 'GetPriceByProductBarCode',
    store_id: storeId,
    product_barcode: barcodes,
  }
  const res = postURL(params)
  return res;
}

module.exports = {
  getPriceByBarcodes,
  getPriceByProductId,
}