const dotenv = require('dotenv');

process.env.NODE_ENV = process.NODE_ENV || development;

const envFound = dotenv.config();
if(envFound.error) {
	throw new Error('Couldn\'t find .env file');
}

const serverSettings = {
	port: process.env.PORT
	ssl: null  //require('./ssl')
}

const dbSettings = {
	databaseURL: process.env.MONGO
}

module.exports = Object.assign({}, {serverSettings, dbSettings});
