'use strict';
module.exports = (sequelize, DataTypes) => {
  const Code = sequelize.define('Code', {
    code: {
      type: DataTypes.STRING,
      allowNull: false,
    }
    shortDescription: DataTypes.STRING,
    longDescription: DataTypes.STRING
  }, {});
  
  Code.associate = function(models) {
    // associations can be defined here
  };
  return Code;
};
