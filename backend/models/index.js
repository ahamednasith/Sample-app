const dbConfig = require('../db.config');
const { Sequelize,DataTypes } = require('sequelize');
const sequelize = new Sequelize(dbConfig.DB,dbConfig.USER,dbConfig.PASSWORD,{
    host:dbConfig.HOST,
    dialect:dbConfig.dialect,
    port:8889,
    timezone:'+05:30'
});
const db ={};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.phone = require('./phone.models')(sequelize,DataTypes);

db.sequelize.sync();

module.exports = db;