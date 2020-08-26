import { ICarro } from "../interfaces/ICarro";
import { Carro } from "../models/Carro";
import { Injectable } from "@angular/core";
import { Usuario } from "../models/Usuario";
import { UsuarioService } from "./Usuario.service";

@Injectable()
export class CarroService implements ICarro {

    public usuarioLogado: Usuario;
    public listaCarros: Array<Carro>;

    constructor(public usuarioService: UsuarioService) {
        this.usuarioLogado = this.usuarioService.retornarUsuarioLogado();
        let carros: Array<Carro> = JSON.parse(localStorage.getItem('carros'));
        this.listaCarros = (carros) ? carros : [];
    }

    criarCarro(carro: Carro): boolean {

        if (!carro.modelo) throw new Error("O campo modelo é obrigatório.");
        if (!carro.marca) throw new Error("O campo marca é obrigatório.");
        if (!carro.consumoGasolina) throw new Error("O campo consumo da gasolina é obrigatório.");
        if (!carro.consumoAlcool) throw new Error("O campo consumo álcool é obrigatório.");

        carro.id = this.totalCarros() + 1;

        this.listaCarros.push(carro);
        carro.usuarioId = this.usuarioLogado.id;

        localStorage.setItem('carros', JSON.stringify(this.listaCarros));

        return true;
    }
    buscarCarro(id: number): Carro {
        if (!id) throw new Error("Nenhum carro foi escolhido.");
        let carro: Carro = this.listaCarros.find(c => c.id == id);
        return carro;
    }
    listarCarros(): Carro[] {
        let carros: Array<Carro> = this.listaCarros.filter(carro => carro.usuarioId === this.usuarioLogado.id);
        return carros;
    }
    totalCarros(): number {
        return this.listaCarros.length;
    }
    calcularQuantidadeLitros(distancia: number, carro: Carro, tipo: number): number {
        let litros: number = 0;
        let valorCombustivel: number = (tipo == 1) ? carro.consumoGasolina : carro.consumoAlcool;
        litros = distancia / valorCombustivel;
        litros = parseFloat(litros.toFixed(2));
        return litros;
    }

}