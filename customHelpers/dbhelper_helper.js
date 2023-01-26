const Helper = require("@codeceptjs/helper");
const sql = require("mssql");
require("dotenv").config();

const dbConfig = {
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DATABASE,
  server: process.env.SERVER,
  options: {
    instanceName: process.env.INSTANCE_NAME,
    port: process.env.DB_PORT,
    encrypt: false,
  },
};

const environment = {
  user: process.env.OBIT_INTAKE_DB_USER,
  host: process.env.OBIT_INTAKE_DB_HOST,
  database: process.env.OBIT_INTAKE_DB_NAME,
  password: process.env.OBIT_INTAKE_DB_PASSWORD,
  port: process.env.OBIT_INTAKE_DB_PORT,
};

class DBHelper extends Helper {
  // add custom methods here
  // If you need to access other helpers
  // use: this.helpers['helperName']

  async getJanusPersonRecord() {
    let result;
    const query =
      "SELECT TOP 1 * FROM tblPerson (NOLOCK) WHERE Source IN ('bismarcktribune', 'chippewa', 'beatricedailysun', 'columbustelegram', 'fremonttribune')";
    try {
      await sql.connect(dbConfig);
      result = await sql.query(query);
      // console.log(result);
      sql.close();
    } catch (err) {
      console.error(err);
    }
    return result;
  }
}

module.exports = DBHelper;
