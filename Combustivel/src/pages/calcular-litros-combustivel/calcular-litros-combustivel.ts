import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Carro } from '../../models/Carro';
import { CarroService } from '../../services/Carro.service';

/**
 * Generated class for the CalcularLitrosCombustivelPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-calcular-litros-combustivel',
  templateUrl: 'calcular-litros-combustivel.html',
  providers: [CarroService]
})
export class CalcularLitrosCombustivelPage {

  public carros: Array<Carro> = new Array<Carro>();
  public carroSelecionadoId: number;
  public tipoCombustivel: number = 1;
  public distancia: number = 0;
  public litros: number = 0;

  constructor(public navCtrl: NavController, public navParams: NavParams, public carroService: CarroService) {
    this.carroService.listarCarros().subscribe((response) => {
      this.carros = <Carro[]>response;
      console.log(this.carros);
    }, (erro) => {
      console.log(erro);
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CalcularLitrosCombustivelPage');
  }
  calcular() {
    let carro: Carro = this.carros.find(c => c.id == this.carroSelecionadoId);
    console.log(carro, " carro escolhido");
    this.litros = this.carroService.calcularQuantidadeLitros(this.distancia, carro, this.tipoCombustivel);
  }

}
