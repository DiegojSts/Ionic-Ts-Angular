import { Usuario } from "../models/Usuario";

export interface IUsuario {

    criarUsuario(usuario: Usuario): boolean;
    buscarUsuario(id: number): Usuario;
    listarUsuarios(): Array<Usuario>;
    buscarUsuarioPorEmail(email: string): Usuario;
    logar(usuario: Usuario): void;
    totalUsuarios(): number;
    retornarUsuarioLogado(): Usuario;

}