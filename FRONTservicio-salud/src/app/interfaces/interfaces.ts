export interface Usuario {
    id?: string;
    nombre?: string;
    apellido?: string;
    rut?: string;
    password?: string;
    perfil?: string;
    unidadAdministrativa?: string;
    cargo?: string;
}

export interface RespuestaLogin {
    usuario: Usuario;
    token: string;
}

export interface RespuestaVerTodosUsuarios {
    ok: boolean;
    funcionarios: Usuario[];
}

export interface Paciente {
    id?: string;
    nombre?: string;
    apellido?: string;
    rut?: string;
    fechaNacimiento?: string;
    direccion?: string;
    genero?: string;
}

export interface RespuestaVerTodosPacientes {
    ok: boolean;
    pacientes: Paciente[];
}

export interface unidadAdministrativa {
    id?: string;
    titulo?: string;
    descripcion?: string;
    unidadPadre?: string;
}

export interface RespuestaVerTodosUnidades {
    ok: boolean;
    unidades: unidadAdministrativa[];
}

export interface Cargo {
    id?: string;
    titulo?: string;
    descripcion?: string;
}

export interface RespuestaVerTodosCargos {
    ok: boolean;
    cargos: Cargo[];
}

export interface RegistroSesion {
    id?: string;
    usuario?: string;
    fecha?: string;
}

export interface RespuestaRegistroSesiones {
    ok: boolean;
    registro: RegistroSesion[];
}
