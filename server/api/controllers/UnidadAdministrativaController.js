/**
 * UnidadAdministrativaController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {

    crearUnidad: async function (req,res) {

        let unidad = {
            titulo: req.body.titulo,
            descripcion: req.body.descripcion,
            unidadPadre: req.body.unidadPadre
        }

        await UnidadAdministrativa.create(unidad);

        return res.json({
            ok: true,
            unidad: unidad
        });

    },

    verTodosUnidades: async function (req, res) {

        var unidades = await UnidadAdministrativa.find({});

        return res.json({
            ok: true,
            unidades: unidades
        });

    },

    updateUnidad: async function (req, res) {

        let unidad = {
            id: req.body.id,
            titulo: req.body.titulo,
            descripcion: req.body.descripcion,
            unidadPadre: req.body.unidadPadre,
        }

        await UnidadAdministrativa.updateOne( { id: unidad.id } ).set(
            { titulo: unidad.titulo, 
                descripcion: unidad.descripcion, 
                unidadPadre: unidad.unidadPadre,
            });

        return res.json({
            ok: true,
            unidad: unidad
        });    

    },

    eliminarUnidad: async function (req,res) {

        await UnidadAdministrativa.destroyOne({id: req.body.id});

        return res.json({
            ok: true
        });

    }
  

};

