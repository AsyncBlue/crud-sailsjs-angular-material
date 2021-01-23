/**
 * Paciente.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    nombre: {
      type: 'string',
      required: true,
      allowNull: false
    },
    apellido: {
      type: 'string',
      required: true,
      allowNull: false
    },
    rut: {
      type: 'string',
      required: true,
      allowNull: false,
      /* unique: true */
    },
    fechaNacimiento: {
      type: 'string',
      required: true,
      allowNull: false,
    },
    direccion: {
      type: 'string',
      required: true,
      allowNull: false,
    },
    genero: {
      type: 'string',
      required: true,
      allowNull: false,
    }

  },

};

