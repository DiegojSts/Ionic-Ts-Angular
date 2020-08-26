import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UsuarioService } from '../../services/Usuario.service';
import { Usuario } from '../../models/Usuario';
import { LoginPage } from '../login/login';

/**
 * Generated class for the CadastroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cadastro',
  templateUrl: 'cadastro.html',
})
export class CadastroPage {

  public usuario: Usuario = new Usuario();

  constructor(public navCtrl: NavController, public navParams: NavParams, public usuarioService: UsuarioService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CadastroPage');
  }
  cadastrarUsuario() {

    let resposta: boolean = this.usuarioService.criarUsuario(this.usuario);
    if (resposta) this.navCtrl.setRoot(LoginPage);

  }
}
