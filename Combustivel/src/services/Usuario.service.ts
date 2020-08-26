import { IUsuario } from "../interfaces/IUsuario";
import { Usuario } from "../models/Usuario";
import { Injectable } from "@angular/core";

@Injectable()
export class UsuarioService implements IUsuario {

    public usuarios: Array<Usuario>;

    constructor() {
        let listaUsuario = JSON.parse(localStorage.getItem("usuario"));
        this.usuarios = (listaUsuario) ? listaUsuario : [];
    }

    criarUsuario(usuario: Usuario): boolean {
        if (!usuario.nome) throw new Error("Preenchimento do campo nome é obrigatório !");
        if (!usuario.email) throw new Error("Preenchimento do campo email é obrigatório !");

        if (this.buscarUsuarioPorEmail(usuario.email)) throw new Error("Já existe um usuário com esse email.");

        usuario.id = this.totalUsuarios() + 1;

        this.usuarios.push(usuario);

        localStorage.setItem("usuario", JSON.stringify(this.usuarios));
        return true;
    }
    buscarUsuario(id: number): Usuario {
        let usuario: Usuario = this.usuarios.find(u => u.id == id);
        return usuario;
    }
    listarUsuarios(): Usuario[] {
        return this.usuarios;
    }
    buscarUsuarioPorEmail(email: string): Usuario {
        let usuario: Usuario = this.usuarios.find(u => u.email == email);
        return usuario;
    }
    logar(usuario: Usuario): void {
        localStorage.setItem("usuarioLogado", JSON.stringify(usuario));
    }
    totalUsuarios(): number {
        return this.usuarios.length;
    }
    retornarUsuarioLogado(): Usuario {
        let usuarioLogado: Usuario = JSON.parse(localStorage.getItem("usuarioLogado"));
        return usuarioLogado;
    }

}