'use strict';
require("dotenv").config();
const { Sequelize, DataTypes } = require('sequelize');
const clothesModel = require('./clothes/model.js');
const foodModel = require('./food/model.js');
const Collection = require('./data-collection.js');
const userModel = require('./users');

let sequelizeOptions={
  dialectOptions:{
    ssl:{
      require:true,
      rejectUnauthorized:false
    }
  }
};
//  const DATABASE_URL = process.env.DATABASE_URL || 'sqlite:memory;';
const DATABASE_URL='postgres://localhost:5432/lab08'
// const DATABASE_URL =
//   process.env.NODE_ENV == "test"
//     ? "sqlite:memory"
//     : process.env.DATABASE_URL;

const sequelize = new Sequelize(DATABASE_URL , {});
const food = foodModel(sequelize, DataTypes);
const clothes = clothesModel(sequelize, DataTypes);

module.exports = {
  db: sequelize,
  food: new Collection(food),
  clothes: new Collection(clothes),
  users:userModel(sequelize , DataTypes)
};

 
// const { Sequelize, DataTypes } = require('sequelize');

// const DATABASE_URL = process.env.DATABASE_URL || 'sqlite:memory;';

// const sequelize = new Sequelize(DATABASE_URL);

// module.exports = {
//   db: sequelize,
//   users: userModel(sequelize, DataTypes),
// }