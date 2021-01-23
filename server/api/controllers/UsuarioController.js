/**
 * UsuarioController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

let bcrypt = require('bcrypt');
/* const Usuario = require('../models/Usuario'); */
/* const Paciente = require('../models/Paciente'); */

module.exports = {
  
    verUsuario: function (req, res) {

        const usuario = req.usuario;

        return res.json({
            ok: true,
            usuario: usuario
        });
    },

    updatePass: async function (req, res) {

        const usuario = {
            id: req.body.id,
            password: bcrypt.hashSync(req.body.password, 10),
        }

        await Usuario.updateOne( { id: usuario.id } ).set({ password: usuario.password });

        return res.json({
            ok:true
        });

    },

    verTodosFuncionarios: async function (req, res) {

        var funcionarios = await Usuario.find({});

        return res.json({
            ok: true,
            funcionarios: funcionarios
        });

    },

    crearFuncionario: async function (req,res) {

        let usuario = {
            nombre: req.body.nombre,
            apellido: req.body.apellido,
            rut: req.body.rut,
            password: req.body.password,
            perfil: req.body.perfil,
            unidadAdministrativa: req.body.unidadAdministrativa,
            cargo: req.body.cargo
        }

        var existeUsuario = await Usuario.findOne( { rut: req.body.rut } );

        
        if(existeUsuario) {
         
            return res.json({existe: true});

        } else {

        await Usuario.create(usuario);

        return res.status(201).json({ ok: true, usuario: usuario});

        }

    },

    eliminarFuncionario: async function (req,res) {

        await Usuario.destroyOne({id: req.body.id});

        return res.json({
            ok: true
        });

    },

    updateFuncionario: async function (req, res) {

        const usuario = {
            id: req.body.id,
            nombre: req.body.nombre,
            apellido: req.body.apellido,
            rut: req.body.rut,
            perfil: req.body.perfil,
            unidadAdministrativa: req.body.unidadAdministrativa,
            cargo: req.body.cargo
            /* password: bcrypt.hashSync(req.body.password, 10), */
        }

        await Usuario.updateOne( { id: usuario.id } ).set(
            { nombre: usuario.nombre, 
                apellido: usuario.apellido, 
                rut: usuario.rut,
                perfil: usuario.perfil, 
                unidadAdministrativa: usuario.unidadAdministrativa, 
                cargo: usuario.cargo
            });

        return res.json({
            ok: true,
            usuario: usuario
        });    

    }
    

};


