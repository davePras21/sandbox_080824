const request = require('../connection/conn_agro');
const query = require("../query/index")

const mainService = async () => {
  try {
    const datas = await request(query())
    return datas
  } catch (err) {
    return err
  }
}

module.exports = mainService