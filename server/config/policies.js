
module.exports.policies = {
    
    'UsuarioController': {
        'verUsuario': 'verificaToken',
        'updatePass': true,
        'verTodosFuncionarios': true,
        'crearFuncionario': true,
        'eliminarFuncionario': true,
        'updateFuncionario': true
    },
    
    'PacienteController': {
        'crearPaciente': true,
        'verTodosPacientes': true,
        'eliminarPaciente': true,
        'updatePaciente': true
    },

    'UnidadAdministrativaController': {
        'crearUnidad': true,
        'verTodosUnidades': true,
        'updateUnidad': true,
        'eliminarUnidad': true
    },

    'CargoController': {
        'crearCargo': true,
        'verTodosCargos': true,
        'updateCargo': true,
        'eliminarCargo': true
    },
    
    'RegistroSesionesController': {
        'guardarSesion': true,
        'registrosUsuario': true,
    },

    'AuthController': {
        'signup': true,
        'check': true
    }

};
