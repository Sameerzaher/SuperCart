const { postURL } = require("./general");

const getPriceByBarcodes = async (storeId, barcodes) => {
  if (!Array.isArray(barcodes)){
    throw new Error('type Error: is not array');
  }
  const params = {
    action: 'GetPriceByProductBarCode',
    store_id: storeId,
    product_barcode: barcodes,
  }
  const res = await postURL(params)
  return res;
}

module.exports = {
  getPriceByBarcodes,
}