/**
 * RegistroSesionesController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

/* const RegistroSesiones = require("../models/RegistroSesiones"); */

module.exports = {
  
    guardarSesion: async function (req,res) {

        let sesion = {
            usuario: req.body.usuarioID,
            fecha: req.body.sesion
        }

        await RegistroSesiones.create(sesion);

        res.json({
            ok:true
        });

    },

    registrosUsuario: async function (req,res) {

        var usuario = req.body.id;
     
        var registro = await RegistroSesiones.find({usuario: usuario});

        res.json({
            ok:true,
            registro: registro
        });

    }

};

