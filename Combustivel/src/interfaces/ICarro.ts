import { Carro } from "../models/Carro";


export interface ICarro {

    criarCarro(carro: Carro): boolean;
    buscarCarro(id: number): Carro;
    listarCarros(): Array<Carro>;
    totalCarros(): number;
    calcularQuantidadeLitros(distancia: number, carro: Carro, tipo: number): number;
}