/**
 * Usuario.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

let bcrypt = require('bcrypt');

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
   /*    unique: true */
    },
    password: {
      type: 'string',
      required: true,
      allowNull: false,
    },
    perfil: {
      type: 'string',
      required: true,
      allowNull: false,
    },
    unidadAdministrativa: {
      type: 'string',
      required: false,
      allowNull: false,
    },
    cargo: {
      type: 'string',
      required: false,
      allowNull: false,
    }

  },

  customToJSON: function () {
    return _.omit(this, ['password']);
  },

  beforeCreate: function (usuario, callback) {
    bcrypt.genSalt(10, function(err, salt) {
      bcrypt.hash(usuario.password, salt, function(err, hash) {
        if (err){
          console.log(err);
          callback(err);
        }else {
          usuario.password = hash;
          callback();
        }
      });
    });
  }

      
};


