'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
   await queryInterface.bulkInsert('Airports',[
    {
      name:'kempagoda internatioonal Airport',
      CityId:'1',
      createdAt:new Date(),
      updatedAt:new Date()
    },
    {
      name:'Bengaluru internatioonal Airport',
      CityId:'1',
      createdAt:new Date(),
      updatedAt:new Date()
    },
    {
      name:'Rajiv internatioonal Airport',
      CityId:'1',
      createdAt:new Date(),
      updatedAt:new Date()
    },
    {
      name:'Indira internatioonal Airport',
      CityId:'2',
      createdAt:new Date(),
      updatedAt:new Date()
    }

   ],{})
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
