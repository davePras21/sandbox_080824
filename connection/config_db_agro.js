const pool_agro = {
  user: process.env.DB_USER_AGRO,
  password: process.env.DB_PASSWORD_AGRO,
  database: process.env.DB_NAME_AGRO,
  server: process.env.DB_HOST_AGRO,
  // pool: {
  //   max: 10,
  //   min: 0,
  //   // idleTimeoutMillis: 30000
  // },
  options: {
    encrypt: false, // for azure
    trustServerCertificate: true // change to true for local dev / self-signed certs
  }
}

module.exports = pool_agro