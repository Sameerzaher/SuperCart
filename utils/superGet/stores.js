const { postURL } = require("./general");

const getStoresByCityId = async () => {
  const params = {

  }
  const res = postURL(params)
  return res;
}

const getStoresByGps = async () => {
  const params = {

  }
  const res = postURL(params)
  return res;
}

module.exports = {
  getStoresByGps,
  getStoresByCityId,
};