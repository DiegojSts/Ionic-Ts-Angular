import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import { Usuario } from '../../models/Usuario';
import { UsuarioService } from '../../services/Usuario.service';
import { CadastroPage } from '../cadastro/cadastro';
import { ListaCarrosPage } from '../lista-carros/lista-carros';
import { CadastroCarroPage } from '../cadastro-carro/cadastro-carro';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  public listaUsuarios: Array<Usuario> = new Array<Usuario>();
  public srcIMG: string = "../../assets/imgs/logo-combustivel.svg";

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public usuarioService: UsuarioService, public menu: MenuController) {

    this.listaUsuarios = this.usuarioService.listarUsuarios();
  }

  ionViewDidLoad() {
    this.menu.swipeEnable(false)
  }


  abrirPaginaCarros(usuario: Usuario) {
    this.usuarioService.logar(usuario);
    this.navCtrl.setRoot(ListaCarrosPage);
  }

  abrirCadastroUsuario() {
    this.navCtrl.push(CadastroCarroPage);
  }
}
