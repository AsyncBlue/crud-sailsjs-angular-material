let jwt = require('jsonwebtoken');

module.exports = {
    'sign': function (payload) {
        return jwt.sign({
            data: payload
        }, sails.config.secret, { expiresIn: 30 });
    },
    'verify': function(token, callback) {
        return jwt.verify(token, sails.config.secret, callback);
    },
    'comprobarToken': function ( userToken ) {

        return new Promise( (resolve,reject) => {

            jwt.verify( userToken, sails.config.secret, ( err, decoded ) => {

                if ( err ) {
                    reject();
                }else {
                    resolve( decoded );
                }
    
            });

        });

    }
}