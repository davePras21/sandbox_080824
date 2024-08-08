const sql = require('mssql');
const config_agro = require("./config_db_agro");

const request = async (query) => {
  let error = {};

  try {
    await sql.connect(config_agro);
    const data = await sql.query(query);

    await sql.close();
    return data.recordset;
  } catch (err) {
    await sql.close();
    await sleep(5000);
    error.error = "" + err;
    return error;
  }
}

const sleep = async (milliseconds) => {
  await new Promise(resolve => {
      return setTimeout(resolve, milliseconds)
  });
};

module.exports = request;