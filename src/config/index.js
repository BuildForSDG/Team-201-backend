const dotenv = require('dotenv');

process.env.NODE_ENV = process.NODE_ENV || development;

const envFound = dotenv.config();
if(envFound.error) {
	throw new Error('Couldn\'t find .env file');
}

const serverSettings = {
	port: process.env.PORT || 8080,
	ssl: null  //require('./ssl')
}

const dbSettings = {
	databaseURL: process.env.DATABASE_URL || 'mongo://localhost:27017/team-201-backend'
}

module.exports = Object.assign({}, {serverSettings, dbSettings});
