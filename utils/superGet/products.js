const { postURL } = require("./general");

const getProductsByBarcode = async (barcodesArray) => {
  if (!Array.isArray(barcodesArray) || !!barcodesArray.find(barcode => isNaN(barcode))) {
    throw new Error('barcode is not valid');
  }

  const params = {
    action: 'GetProductsByBarCode',
    product_barcode: barcodesArray
  };

  const res = await postURL(params)
  return res;
};

const getProductsByName = async (namesArray) => {
  if (!Array.isArray(namesArray)){
    throw new Error('type Error: is not array');
  }
  const params = {
    action: 'GetProductsByName',
    product_name: namesArray,
  }
  const res = postURL(params)
  return res;
}


module.exports = {
  getProductsByBarcode,
  getProductsByName,
}
