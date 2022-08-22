"use strict";
const data = require("../datos_casas.json");
module.exports = {
  async up(queryInterface, Sequelize) {
    for(let key in data) {
      await queryInterface.bulkInsert(
        "casas",
        [
          {
            cuidad: data[key].cuidad,
            pisos: data[key].pisos,
            fechadeventa: new Date(),
            createdAt: new Date(),
            updatedAt: new Date(),
          },
        ],
        {}
      );
    }
    
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("casas", null, {});
  },
};
