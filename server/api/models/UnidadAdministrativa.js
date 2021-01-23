/**
 * UnidadAdministrativa.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    titulo: {
      type: 'string',
      required: true,
      allowNull: false
    },
    descripcion: {
      type: 'string',
      required: true,
      allowNull: false
    },
    unidadPadre: {
      type: 'string',
      required: true,
      allowNull: false,
    }/* ,
    listaFuncionarios: [{
      type: 'Usuario',
      required: true,
      allowNull: false,
    }] */

  },

};

