/**
 * AuthController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

/* const Usuario = require("../models/Usuario"); */
const jwToken = require('../services/jwToken');
let bcrypt = require('bcrypt');


module.exports = {
  
    login: async function (req, res) {
        //buscar usuario
        let usuario = await Usuario.findOne( { rut: req.body.rut } );

        if (usuario) {
            //generar token
            bcrypt.compare(req.body.password, usuario.password, function(err, result) {
                if (result ) {
                    return res.status(200).json({
                        usuario: usuario,
                        token: jwToken.sign(usuario)
                    });
                } else {
                    return res.json({error: 'Password incorrecta'});
                }
            });
        } else {
            return res.status(404).json({message: 'Usuario no encontrado'});
        }
    },

    check: async function (req, res) {
        return res.json(req.usuario);
    },

    signup: async function (req, res) {
        let usuario = {
            nombre: req.body.nombre,
            apellido: req.body.apellido,
            rut: req.body.rut,
            password: req.body.password,
            perfil: req.body.perfil,

        }

        var existeUsuario = await Usuario.findOne( { rut: req.body.rut } );

        if(existeUsuario) {
         
            return res.json({existe: true});

        } else {

        await Usuario.create(usuario);

        return res.status(201).json({ ok: true, token: jwToken.sign(usuario)});

        }

    }

};

