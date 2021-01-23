
module.exports.routes = {

  '/': { view: 'pages/homepage' },

  //API Auth
  'POST /auth/login': 'AuthController.login',
  'GET /auth/check': 'AuthController.check',
  'POST /auth/signup': 'AuthController.signup',

  //API Usuario
  'GET /usuario/verUsuario': 'UsuarioController.verUsuario',
  'PATCH /usuario/updatePass': 'UsuarioController.updatePass',
  'GET /usuario/verTodosFuncionarios': 'UsuarioController.verTodosFuncionarios',
  'POST /usuario/crearFuncionario': 'UsuarioController.crearFuncionario',
  'POST /usuario/eliminarFuncionario': 'UsuarioController.eliminarFuncionario',
  'PATCH /usuario/updateFuncionario': 'UsuarioController.updateFuncionario',


  //API Paciente
  'POST /paciente/crearPaciente': 'PacienteController.crearPaciente',
  'GET /paciente/verTodosPacientes': 'PacienteController.verTodosPacientes',
  'POST /paciente/eliminarPaciente': 'PacienteController.eliminarPaciente',
  'POST /paciente/updatePaciente': 'PacienteController.updatePaciente',

  //API Unidad Administrativa
  'POST /unidadAdministrativa/crearUnidad': 'UnidadAdministrativaController.crearUnidad',
  'GET /unidadAdministrativa/verTodosUnidades': 'UnidadAdministrativaController.verTodosUnidades',
  'PATCH /unidadAdministrativa/updateUnidad': 'UnidadAdministrativaController.updateUnidad',
  'POST /unidadAdministrativa/eliminarUnidad': 'UnidadAdministrativaController.eliminarUnidad',

  //API Cargo
  'POST /cargo/crearCargo': 'CargoController.crearCargo',
  'GET /cargo/verTodosCargos': 'CargoController.verTodosCargos',
  'PATCH /cargo/updateCargo': 'CargoController.updateCargo',
  'POST /cargo/eliminarCargo': 'CargoController.eliminarCargo',

  //API Registro Sesiones
  'POST /registroSesiones/guardarSesion': 'RegistroSesionesController.guardarSesion',
  'POST /registroSesiones/registrosUsuario': 'RegistroSesionesController.registrosUsuario',

};
