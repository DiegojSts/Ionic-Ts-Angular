import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { CadastroCarroPage } from '../pages/cadastro-carro/cadastro-carro';
import { CalcularLitrosCombustivelPage } from '../pages/calcular-litros-combustivel/calcular-litros-combustivel';
import { LoginPage } from '../pages/login/login';
import { ListaCarrosPage } from '../pages/lista-carros/lista-carros';
import { CadastroPage } from '../pages/cadastro/cadastro';
import { UsuarioService } from '../services/Usuario.service';

@NgModule({
  declarations: [
    MyApp,
    CadastroPage,
    CadastroCarroPage,
    CalcularLitrosCombustivelPage,
    LoginPage,
    ListaCarrosPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    CadastroPage,
    CadastroCarroPage,
    CalcularLitrosCombustivelPage,
    LoginPage,
    ListaCarrosPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    UsuarioService,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
