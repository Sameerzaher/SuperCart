const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '../.env') });
const Joi = require('joi');

const envVarsSchema = Joi.object()
  .keys({
    PORT: Joi.number().default(3000),
    SUPER_GET_API_KEY: Joi.string().required().description('superGET api key'),
    SUPER_GET_API_URL: Joi.string().required().description('superGET api url'),
  })
  .unknown();

const { value: envVars, error } = envVarsSchema.prefs({ errors: { label: 'key' } }).validate(process.env);

if (error) {
  throw new Error(`Config validation error: ${error.message}`);
}
module.exports = {
  port: envVars.PORT,
  apiKey: envVars.SUPER_GET_API_KEY,
  superGetUrl: process.env.SUPER_GET_API_URL,
};