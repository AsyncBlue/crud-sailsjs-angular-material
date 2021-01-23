module.exports = function ( req, res, next ) {

    const userToken = req.get('x-token') || '';

     jwToken.comprobarToken( userToken ).then( decoded => {
        console.log('Decoded', decoded);
        req.usuario = decoded.data;
        next();
    }).catch ( err => {
        res.json({
            ok: false,
            mensaje: 'Token no es correcto'
        });

    });

}

