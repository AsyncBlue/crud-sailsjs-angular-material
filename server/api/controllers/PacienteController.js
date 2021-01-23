/**
 * PacienteController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  
    crearPaciente: async function (req,res) {

        let paciente = {
            nombre: req.body.nombre,
            apellido: req.body.apellido,
            rut: req.body.rut,
            fechaNacimiento: req.body.fechaNacimiento,
            direccion: req.body.direccion,
            genero: req.body.genero,
        }

        var existePaciente = await Paciente.findOne( { rut: req.body.rut } );

        if(existePaciente) {

            return res.json({existe: true});

        } else {

            await Paciente.create(paciente);

            return res.status(201).json({
                ok: true,
                paciente: paciente
            });

        }



    },

    verTodosPacientes: async function (req, res) {

        var pacientes = await Paciente.find({});

        return res.json({
            ok: true,
            pacientes: pacientes
        });

    },

    eliminarPaciente: async function (req,res) {

        await Paciente.destroyOne({id: req.body.id});

        return res.json({
            ok: true
        });

    },

    updatePaciente: async function (req, res) {

        let paciente = {
            id: req.body.id,
            nombre: req.body.nombre,
            apellido: req.body.apellido,
            rut: req.body.rut,
            fechaNacimiento: req.body.fechaNacimiento,
            direccion: req.body.direccion,
            genero: req.body.genero,
        }

        await Paciente.updateOne( { id: paciente.id } ).set(
            { nombre: paciente.nombre, 
                apellido: paciente.apellido, 
                rut: paciente.rut,
                fechaNacimiento: paciente.fechaNacimiento, 
                direccion: paciente.direccion, 
                genero: paciente.genero
            });

        return res.json({
            ok: true,
            paciente: paciente
        });    

    }

};

