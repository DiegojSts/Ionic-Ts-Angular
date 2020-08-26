import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListaCarrosPage } from './lista-carros';

@NgModule({
  declarations: [
    ListaCarrosPage,
  ],
  imports: [
    IonicPageModule.forChild(ListaCarrosPage),
  ],
})
export class ListaCarrosPageModule {}
