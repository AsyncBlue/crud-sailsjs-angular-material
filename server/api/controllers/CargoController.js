/**
 * CargoController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  
    crearCargo: async function (req,res) {

        let cargo = {
            titulo: req.body.titulo,
            descripcion: req.body.descripcion
        }

        await Cargo.create(cargo);

        return res.json({
            ok: true,
            cargo: cargo
        });

    },

    verTodosCargos: async function (req, res) {

        var cargos = await Cargo.find({});

        return res.json({
            ok: true,
            cargos: cargos
        });

    },

    updateCargo: async function (req, res) {

        let cargo = {
            id: req.body.id,
            titulo: req.body.titulo,
            descripcion: req.body.descripcion,
        }

        await Cargo.updateOne( { id: cargo.id } ).set(
            { titulo: cargo.titulo, 
                descripcion: cargo.descripcion, 
            });

        return res.json({
            ok: true,
            cargo: cargo
        });    

    },

    eliminarCargo: async function (req,res) {

        await Cargo.destroyOne({id: req.body.id});

        return res.json({
            ok: true
        });

    }

};

