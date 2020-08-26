import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CadastroCarroPage } from '../cadastro-carro/cadastro-carro';
import { Carro } from '../../models/Carro';
import { CarroService } from '../../services/Carro.service';

/**
 * Generated class for the ListaCarrosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-lista-carros',
  templateUrl: 'lista-carros.html',
  providers: [CarroService]
})
export class ListaCarrosPage {

  public carros: Array<Carro> = new Array<Carro>();
  constructor(public navCtrl: NavController, public navParams: NavParams, public carroService: CarroService) {
    this.carros = this.carroService.listarCarros();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListaCarrosPage');
  }
  abrirCadastrarCarro() {
    this.navCtrl.setRoot(CadastroCarroPage);
  }
}
